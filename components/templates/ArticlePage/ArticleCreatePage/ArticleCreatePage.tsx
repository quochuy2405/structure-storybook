import { Button, TextArea, Title } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { SortableItemProps, TPreview } from '@/components/molecules/Draggable'
import { SectionEditors } from '@/components/organisms'
import Prism from 'prismjs'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { AiFillCode, AiOutlineOrderedList } from 'react-icons/ai'
import { BiHeading, BiLinkAlt } from 'react-icons/bi'
import { CgDetailsLess, CgDetailsMore } from 'react-icons/cg'
import { IoImagesOutline } from 'react-icons/io5'
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
  handleUpdateURL
}) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const handleActiveSection = (id: string) => {
    const currActive = editor.state.length && editor.state?.find((item) => item.id === id)
    if (currActive) active.setState(currActive)
  }

  const handleSaveChanges = async () => {
    const newEditor = [...editor.state]
    const section = newEditor?.find((item) => item.id === active.state.id)

    if (section) {
      section.content = active.state.content
      editor.setState(newEditor)
    }
  }

  const onChangeEdit = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    active.setState((cur) => cur && { ...cur, content: event.target.value })
  }

  return (
    <>
      <Modal
        isOpen={isOpenModel}
        onCancel={() => handleOpenModel(false)}
        className={Styles.Modal}
        isSubmit={false}
      >
        <>
          <Title size={2} className={Styles.TitleModel}>
            Choose Sections
          </Title>
          <div className={Styles.ModalContent}>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<BiHeading size={18} />}
              onClick={() => handleNewSection('heading')}
            >
              Heading
            </Button>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<CgDetailsLess size={18} />}
              onClick={() => handleNewSection('description')}
            >
              Description
            </Button>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<BiLinkAlt size={18} />}
              onClick={() => handleNewSection('url')}
            >
              URL
            </Button>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<CgDetailsMore size={18} />}
              onClick={() => handleNewSection('text')}
            >
              Long Text
            </Button>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<AiFillCode size={18} />}
              onClick={() => handleNewSection('code')}
            >
              Script Code
            </Button>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<AiOutlineOrderedList size={18} />}
              onClick={() => handleNewSection('list')}
            >
              Ordered List
            </Button>
            <Button
              mode="primary"
              className={Styles.ButtonNewSection}
              icon={<IoImagesOutline size={18} />}
              onClick={() => handleNewSection('image')}
            >
              Image
            </Button>
          </div>
        </>
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
            <Button onClick={handleSaveChanges} mode="primary">
              Save Changes
            </Button>
          </div>

          <TextArea
            name="editor"
            className={Styles.EditorBody}
            value={active.state.content}
            onChange={onChangeEdit}
          />
        </div>
      </div>
      <div className={Styles.Preview}>
        <div className={Styles.Head}>
          <p className={Styles.Title}>Preview</p>
          <Button mode="primary">Submit</Button>
        </div>

        <div
          className={Styles.PreviewBody}
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      </div>
    </>
  )
}

export default ArticleCreatePage
