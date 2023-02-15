import { ReactSortable } from 'react-sortablejs'

import { ButtonIcon, TextField } from '@/components/atoms'
import clsx from 'clsx'
import { Dispatch, memo, SetStateAction, useEffect, useState } from 'react'
import { BsLink45Deg } from 'react-icons/bs'
import { MdDelete, MdDone, MdDragIndicator } from 'react-icons/md'
import Styles from './Draggable.module.scss'
import { TFormatCombine } from '@/utils/index'

export type TPreview = {
  id: string
  content: string
  url?: string
  type: string
  format?: Array<TFormatCombine>
}

export interface SortableItemProps {
  id: string
  name: string
}
export interface IDraggableProps {
  items?: SortableItemProps[]
  active?: TPreview
  setItems: Dispatch<SetStateAction<SortableItemProps[]>>
  onDoubleClick?: (id: string, newName: string) => void
  onClick?: (id: string) => void
  onDelete?: (id: string) => void
  handleUpdateURL?: (id: string, url: string) => void
}

const Draggable: React.FC<IDraggableProps> = ({
  items = [],
  active,
  setItems,
  handleUpdateURL,
  onClick,
  onDelete,
  onDoubleClick
}) => {
  const [isRename, setIsRename] = useState<boolean>(false)
  const [newName, setNewName] = useState<string>('')
  const [url, setURL] = useState<string>()

  const handleRename = (curName: string) => {
    setNewName(curName)
    setIsRename(true)
  }
  const handleSaveName = (id: string) => {
    onDoubleClick?.(id, newName)
    setIsRename(false)
  }
  useEffect(() => {
    setIsRename(false)
    if (active?.type === 'url') {
      setURL(active.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(active)])

  useEffect(() => {
    if (active?.type === 'url') {
      const timer = setTimeout(() => {
        handleUpdateURL?.(active.id, url || '')
      }, 400)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(active), url])

  return (
    <div className={Styles.DragList}>
      <ReactSortable
        list={items}
        setList={setItems}
        easing="cubic-bezier(0.2, 0, 0, 1)"
        animation={150}
        className="container"
        ghostClass="dragging"
        delay={1}
      >
        {items.map((item) => (
          <div key={item.id} className={Styles.ItemDragContainer}>
            <div
              className={clsx(Styles.ItemDrag, {
                [Styles.Active]: active?.id === item.id
              })}
              onClick={() => active?.id !== item.id && onClick?.(item.id)}
              onDoubleClick={() => handleRename(item.name)}
            >
              <MdDragIndicator size={20} />

              {isRename && active?.id === item.id ? (
                <input
                  name="input"
                  value={newName}
                  type="text"
                  className={Styles.InputRename}
                  onChange={(e) => setNewName(e.target.value)}
                />
              ) : (
                <p>{item.name}</p>
              )}

              {isRename && active?.id === item.id && (
                <ButtonIcon
                  className={Styles.ButtonRename}
                  onClick={() => handleSaveName(item.id)}
                >
                  <MdDone size={10} />
                </ButtonIcon>
              )}
            </div>
            <ButtonIcon
              className={Styles.ButtonDelete}
              onClick={() => onDelete?.(item.id)}
            >
              <MdDelete size={18} />
            </ButtonIcon>
            {active?.type === 'url' && active?.id === item.id && (
              <div className={Styles.ButtonEditLinkContainer}>
                <ButtonIcon className={Styles.ButtonEditLink}>
                  <BsLink45Deg size={18} />
                </ButtonIcon>
                <TextField
                  name="relink"
                  value={url}
                  type="text"
                  className={Styles.InputLink}
                  onChange={(e) => setURL(e.target.value)}
                />
              </div>
            )}
          </div>
        ))}
      </ReactSortable>
    </div>
  )
}

export default memo(Draggable)
