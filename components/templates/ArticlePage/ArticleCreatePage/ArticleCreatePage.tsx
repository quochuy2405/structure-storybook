import { Button, TextArea, Title } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { SortableItemProps, TPreview } from '@/components/molecules/Draggable'
import { SectionEditors } from '@/components/organisms'
import { ButtonAligns, ButtonFormats, ButtonNewSections, colors } from '@/constants/index'
import { TFormatCombine } from '@/utils/index'
import { Tooltip } from '@mui/material'
import clsx from 'clsx'
import Prism from 'prismjs'
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { IoColorPalette } from 'react-icons/io5'
import { MdLibraryAdd } from 'react-icons/md'
import Styles from './ArticleCreatePage.module.scss'

export type TStateArrayPreviewProps = {
  state: Array<TPreview>
  setState: Dispatch<SetStateAction<TPreview[]>>
}
export type TStatePreviewProps = {
  state: TPreview
  setState: Dispatch<SetStateAction<TPreview>>
}

export interface IArticleCreatePageProps {
  items?: SortableItemProps[]
  preview: string
  editor: TStateArrayPreviewProps
  active: TStatePreviewProps
  isOpenModel: boolean
  setItems: Dispatch<SetStateAction<SortableItemProps[]>>
  handleNewSection: (type: string) => void
  handleRemoveSection: (id: string) => void
  handleOpenModel: (isOpen: boolean) => void
  handleRenameSection: (id: string, newName: string) => void
  handleUpdateURL?: (id: string, url: string) => void
  handleSubmitArticle: () => void
}

const ArticleCreatePage: React.FC<IArticleCreatePageProps> = ({
  items,
  editor,
  preview,
  active,
  isOpenModel,
  setItems,
  handleNewSection,
  handleRemoveSection,
  handleOpenModel,
  handleRenameSection,
  handleUpdateURL,
  handleSubmitArticle
}) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const [editorFormats, setEditorFormats] = useState<Array<TFormatCombine>>([])
  const align = editorFormats.find((item) => item.key === 'align')
  const colorEdit = editorFormats.find((item) => item.key === 'color')

  const handleActiveSection = (id: string) => {
    const currActive = editor.state.length && editor.state?.find((item) => item.id === id)
    if (currActive) {
      active.setState(currActive)
      setEditorFormats(currActive.format || [])
    }
  }

  const handleSaveChanges = async () => {
    const newEditor = [...editor.state]
    const section = newEditor?.find((item) => item.id === active.state.id)

    if (section) {
      section.format = editorFormats
      section.content = active.state.content
      editor.setState(newEditor)
    }
  }

  const onChangeEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    active.setState((cur) => cur && { ...cur, content: event.target.value })
  }

  const handleChangeAlign = (value: string) => {
    const formats = [...editorFormats]
    const align = formats.find((item) => item.key === 'align')
    if (align) {
      if (align.value !== value) {
        align.value = value
        setEditorFormats(formats)
      } else {
        setEditorFormats((curr) => curr.filter((item) => item.key !== 'align'))
      }
    } else {
      setEditorFormats((cur) => [...cur, { key: 'align', value }])
    }
  }

  const handleChangeTextStyle = (key: string, value: string) => {
    const formats = [...editorFormats]
    const item = formats.find((item) => item.key === key)
    if (item) {
      if (item.value === value) {
        const newFormats = formats.filter((item) => item.key !== key)
        setEditorFormats(newFormats)
      } else {
        item.value = value
        setEditorFormats(formats)
      }
    } else {
      setEditorFormats((cur) => [...cur, { key, value }])
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const charCode = String.fromCharCode(event.which).toLowerCase()
    if ((event.ctrlKey || event.metaKey) && charCode === 's') {
      event.preventDefault()
      handleSaveChanges()
    }
  }

  return (
    <Fragment>
      <Modal
        isOpen={isOpenModel}
        onCancel={() => handleOpenModel(false)}
        className={Styles.Modal}
        isSubmit={false}
      >
        <Fragment>
          <Title size={2} className={Styles.TitleModel}>
            Choose Sections
          </Title>
          <div className={Styles.ModalContent}>
            {ButtonNewSections.map((item) => (
              <Button
                key={item.key}
                mode="primary"
                className={Styles.ButtonNewSection}
                icon={item.icon}
                onClick={() => handleNewSection(item.key)}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </Fragment>
      </Modal>
      <div className={Styles.CreatePage}>
        <div className={Styles.Sections}>
          <div className={Styles.Head}>
            <p className={Styles.Title}>Sections</p>
            <Button
              onClick={() => handleOpenModel(true)}
              mode="primary"
              icon={<MdLibraryAdd size={18} />}
            >
              New Sections
            </Button>
          </div>

          <div className={Styles.SectionsBody}>
            <SectionEditors
              onClick={(id) => handleActiveSection(id)}
              active={active.state}
              items={items}
              setItems={setItems}
              onDelete={handleRemoveSection}
              onDoubleClick={handleRenameSection}
              handleUpdateURL={handleUpdateURL}
            />
          </div>
        </div>
        <div className={Styles.Editor}>
          <div className={Styles.Head}>
            <p className={Styles.Title}>Editors</p>
            <Tooltip title="CTRL + S">
              <Button onClick={handleSaveChanges} mode="primary">
                Save Changes
              </Button>
            </Tooltip>
          </div>

          <TextArea
            name="editor"
            className={Styles.EditorBody}
            value={active.state.content}
            rows={20}
            onChange={onChangeEdit}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={Styles.OptionEditor}>
          {ButtonFormats.map((item) => (
            <Button
              key={item.key}
              mode={
                !!editorFormats.find(({ key }) => key === item.key)
                  ? 'warning'
                  : 'default'
              }
              onClick={() => handleChangeTextStyle(item.key, item.value)}
            >
              {item.icon}
            </Button>
          ))}
          <div className={Styles.BoxColor}>
            <Button
              className={Styles.ButtonColor}
              mode={
                !!editorFormats.find(({ key }) => key === 'color') ? 'warning' : 'default'
              }
            >
              <IoColorPalette size={20} />
            </Button>
            <div className={Styles.ColorList}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => handleChangeTextStyle('color', color)}
                  className={clsx(Styles.ItemColor, {
                    [Styles.ColorActive as string]: colorEdit?.value === color
                  })}
                />
              ))}
            </div>
          </div>

          {ButtonAligns.map((item) => (
            <Button
              key={item.key}
              mode={align && align.value === item.value ? 'warning' : 'default'}
              onClick={() => handleChangeAlign(item.value)}
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
      <div className={Styles.Preview}>
        <div className={Styles.Head}>
          <p className={Styles.Title}>Preview</p>
          <Button mode="primary" onClick={handleSubmitArticle}>
            Submit
          </Button>
        </div>

        <div className={Styles.PreviewBody}>
          <div
            className={Styles.ShowPreview}
            dangerouslySetInnerHTML={{ __html: preview }}
          ></div>
        </div>
      </div>
    </Fragment>
  )
}

export default ArticleCreatePage
