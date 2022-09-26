import React, { ReactNode, useState } from 'react'
import Styles from './Draggable.module.scss'
import {
  DragDropContext,
  Draggable as Drag,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import Card from '../Card/Card'

type options = {
  id: string
  content: ReactNode
}

export interface IDraggableProps {
  listOptions: options[]
}

export const getItems = (count: number) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: <p>{`item ${k}`}</p>
  }))

// a little function to help us with reordering the result
const reorder = (list: options[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const Draggable: React.FC<IDraggableProps> = ({ listOptions = [] }) => {
  const [list, setList] = useState(listOptions)
  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      list,
      result.source.index,
      result.destination.index
    ) as options[]

    setList(items)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={
              !!snapshot.isDraggingOver ? Styles.onDrag : Styles.onSelect
            }
          >
            {list.map((item, index) => (
              <Drag key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <p>{item.content}</p>
                  </Card>
                )}
              </Drag>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Draggable
