import { SortableItemProps, TPreview } from '@/components/molecules/Draggable/Draggable'
import { ArticleCreatePage } from '@/components/templates'
import { FORMAT_NEW_SECTION } from '@/constants/index'
import { Layouts } from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { combineEditorToHTML } from '@/utils/index'
import 'prismjs/themes/prism-tomorrow.css'
import { ReactElement, useEffect, useState } from 'react'
import shortid from 'shortid'
const initEditor = [
  { id: '1', content: '', type: 'heading' },
  { id: '2', content: '', type: 'desc' },
  { id: '3', content: '', type: 'code' },
  { id: '4', content: '', type: 'text' },
  { id: '5', content: '', type: 'list' },
  { id: '6', content: '', type: 'image' },
  { id: '7', content: '', url: 'https ://example', type: 'url' }
]
const initSections = [
  { id: '1', name: 'Title Heading' },
  { id: '2', name: 'Description ' },
  { id: '3', name: 'MarkDown' },
  { id: '4', name: 'Content ' },
  { id: '5', name: 'List' },
  { id: '6', name: 'Image ' },
  { id: '7', name: 'URL Link' }
]
const ArticleCreate: NextPageWithLayout = () => {
  const [editor, setEditor] = useState<Array<TPreview>>(initEditor)
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false)
  const [active, setActive] = useState<TPreview>(editor[0])
  const [preview, setPreview] = useState<Array<TPreview>>([])
  const [sections, setSections] = useState<SortableItemProps[]>(initSections)

  useEffect(() => {
    setPreview(editor)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(editor)])

  useEffect(() => {
    const curEditor = sections.map((item) =>
      editor.find((edit) => edit.id == item.id)
    ) as Array<TPreview>

    if (curEditor.length) setEditor(curEditor)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sections)])

  const handleCombineEditorToHTML = () => {
    return preview.map((item) => combineEditorToHTML(item)).join('')
  }

  const handleNewSection = (type: string) => {
    const section =
      FORMAT_NEW_SECTION[type.toUpperCase() as keyof typeof FORMAT_NEW_SECTION]
    if (section) {
      handleOpenModel(false)
      const newSection = { id: shortid.generate(), ...section }
      setEditor((cur) => [...cur, newSection])
      setSections((cur) => [...cur, { id: newSection.id, name: newSection.name }])
    }
  }
  const handleRemoveSection = (id: string) => {
    if (id) {
      setEditor((cur) => cur.filter((item) => item.id !== id))
      setSections((cur) => cur.filter((item) => item.id !== id))
    }
  }
  const handleOpenModel = (isOpen: boolean) => {
    setIsOpenModel(isOpen)
  }

  const handleRenameSection = (id: string, newName: string) => {
    const renameSection = sections.map((item) =>
      item.id === id ? { id: id, name: newName } : item
    )
    setSections(renameSection)
  }
  const handleUpdateURL = (id: string, url: string) => {
    console.log(id, url)
    const renameEditor = editor.map((item) =>
      item.id === id ? { ...item, url: url } : item
    )
    setEditor(renameEditor)
  }
  const props = {
    items: sections,
    isOpenModel,
    editor: { state: editor, setState: setEditor },
    active: { state: active, setState: setActive },
    preview: handleCombineEditorToHTML(),
    setItems: setSections,
    handleNewSection,
    handleRemoveSection,
    handleOpenModel,
    handleRenameSection,
    handleUpdateURL
  }

  return <ArticleCreatePage {...props} />
}

ArticleCreate.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default ArticleCreate
