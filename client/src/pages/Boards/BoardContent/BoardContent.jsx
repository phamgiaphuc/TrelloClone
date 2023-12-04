import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

const BoardContent = ({ board }) => {
  // Require the mouse to move by 10 pixels before activating
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })


  // Hold for 250ms and tolerance for 5px of movement to activate
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  // Prioritize using 2 sensors, MouseSensor and TouchSensor, to have the best experience on mobile without bugs
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])

  // Just one component card or column is being dragged
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnWhenDragCard, setOldColumnWhenDragCard] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // Find the columns by cardId
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column?.cards?.map(card => card?._id)?.includes(cardId))
  }

  // Trigger when start to drag a component
  const handleDragStart = (event) => {
    // console.log('handleDragStart: ', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDragCard(findColumnByCardId(event?.active?.id))
    }
  }

  // Trigger when during drag a component
  const handleDragOver = (event) => {
    // Column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    // console.log('handleDragOver: ', event)

    // Card
    const { active, over } = event

    // Check if there is no relocated or over column, return for avoding the errors
    if (!active || !over) return

    // activeDraggingCard: Card is being dragged
    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
    // overCard: Card is pointed out from the dragging card
    const { id: overCardId } = over

    // Find the columns of 2 activeDraggingCard and overCard
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    // Check if the columns of 2 activeDraggingCard and overCard are existed or return to prevent crashing website
    if (!activeColumn || !overColumn) return

    // Check if the columns of 2 activeDraggingCard and overCard are different
    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns(prevColumns => {
        // Find the index of over card
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
        // Calculating logic of the new index for the draggiin card
        let newCardIndex = null
        const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1 : 0
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1
        // Using lodash library to clone the prevColumns
        const nextColumns = cloneDeep(prevColumns)
        // Old column
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        // New column
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)
        if (nextActiveColumn) {
          // Delete card from the active column
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
          // Udpate the cardOrderIds of active column
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }
        if (nextOverColumn) {
          // Delete card from the over column if the card is already existed in over column
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
          // Udpate the cards of over column with the newCardIndex
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
          // Udpate the cardOrderIds of active column
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }
        return nextColumns
      })
    }
  }

  // Trigger when finish to drag a component
  const handleDragEnd = (event) => {
    // console.log('handleDragEnd: ', event)
    const { active, over } = event

    // Check if there is no relocated or over column, return for avoding the errors
    if (!active || !over) return

    // Dragging card
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      // activeDraggingCard: Card is being dragged
      const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
      // overCard: Card is pointed out from the dragging card
      const { id: overCardId } = over

      // Find the columns of 2 activeDraggingCard and overCard
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      // Check if the columns of 2 activeDraggingCard and overCard are existed or return to prevent crashing website
      if (!activeColumn || !overColumn) return

      if (oldColumnWhenDragCard._id !== overColumn._id) {
        // In 2 columns
        setOrderedColumns(prevColumns => {
          // Find the index of over card
          const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
          // Calculating logic of the new index for the draggiin card
          let newCardIndex = null
          const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height
          const modifier = isBelowOverItem ? 1 : 0
          newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1
          // Using lodash library to clone the prevColumns
          const nextColumns = cloneDeep(prevColumns)
          // Old column
          const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
          // New column
          const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)
          if (nextActiveColumn) {
            // Delete card from the active column
            nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
            // Udpate the cardOrderIds of active column
            nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
          }
          if (nextOverColumn) {
            // Delete card from the over column if the card is already existed in over column
            nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
            // Udpate the cards of over column with the newCardIndex
            nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)
            // Udpate the cardOrderIds of active column
            nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
          }
          return nextColumns
        })
      } else {
        // In 1 column

        // Get the old position/index of the moving column
        const oldCardIndex = oldColumnWhenDragCard?.cards?.findIndex(column => column._id === activeDragItemId)
        // Get the new position/index of the relocated column
        const newCardIndex = overColumn?.cards?.findIndex(column => column._id === overCardId)
        // Get the new array of cards after moving
        const dndOrderedCards = arrayMove(oldColumnWhenDragCard?.cards, oldCardIndex, newCardIndex)
        setOrderedColumns(prevColumns => {
          // Using lodash library to clone the prevColumns
          const nextColumns = cloneDeep(prevColumns)

          // Find the column that dragging card targets on
          const targetColum = nextColumns.find(column => column._id === overColumn._id)
          // Update new data: cards + cardOrderIds
          targetColum.cards = dndOrderedCards
          targetColum.cardOrderIds = dndOrderedCards.map(card => card._id)
          return nextColumns
        })
      }
    }

    // Dragging column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      // Check if the moving column is different from relocated or over column (their ids), return for avoding the errors
      if (active.id !== over.id) {
        // Get the old position/index of the moving column
        const oldColumnIndex = orderedColumns.findIndex(column => column._id === active.id)
        // Get the new position/index of the relocated column
        const newColumnIndex = orderedColumns.findIndex(column => column._id === over.id)
        // Get the new array of columns after moving
        const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
        // const dndOrderedColumnsIds = dndOrderedColumns.map(column => column.id)
        // Udpate the new ordered columns
        setOrderedColumns(dndOrderedColumns)
      }
    }
    // After dragging card or column, reset all states to null
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnWhenDragCard(null)
  }
  // Smooth animation when drag a component
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } })
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
      sensors={sensors}
    >
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ecf0f1'),
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns}/>
        <DragOverlay dropAnimation={customDropAnimation}>
          {(!activeDragItemType) && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
