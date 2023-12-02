import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

const BoardContent = ({ board }) => {
  // Require the mouse to move by 10 pixels before activating
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  // Hold for 250ms and tolerance for 5px of movement to activate
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  // Prioritize using 2 sensors, MouseSensor and TouchSensor, to have the best experience on mobile without bugs
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])
  const handleDragEnd = (event) => {
    const { active, over } = event

    // Check if there is no relocated or over column, return for avoding the errors
    if (!over) return

    // Check if the moving column is different from relocated or over column (their ids), return for avoding the errors
    if (active.id !== over.id) {
      // Get the old position/index of the moving column
      const oldIndex = orderedColumns.findIndex(column => column._id === active.id)
      // Get the new position/index of the relocated column
      const newIndex = orderedColumns.findIndex(column => column._id === over.id)
      // Get the new array of columns after moving
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(column => column.id)
      // Udpate the new ordered columns
      setOrderedColumns(dndOrderedColumns)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#ecf0f1'),
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent
