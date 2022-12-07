import Draggable from '@/components/molecules/Draggable'
import { SortableItemProps, TPreview } from '@/components/molecules/Draggable/Draggable'

import React, { Dispatch, SetStateAction } from 'react'
export interface ISectionEditorsProps {
  items?: SortableItemProps[]
  active?: TPreview
  setItems: Dispatch<SetStateAction<SortableItemProps[]>>
  onClick?: (id: string) => void
  onDelete?: (id: string) => void
  onDoubleClick?: (id: string, newName: string) => void
  handleUpdateURL?: (id: string, url: string) => void
}
const SectionEditors: React.FC<ISectionEditorsProps> = ({
  items,
  active,
  setItems,
  onClick,
  onDelete,
  onDoubleClick,
  handleUpdateURL
}) => {
  const props = {
    items,
    active,
    setItems,
    onClick,
    onDelete,
    onDoubleClick,
    handleUpdateURL
  }
  return <Draggable {...props} />
}

export default SectionEditors
