import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import type { OnDragEndResponder } from 'react-beautiful-dnd'
import { editorComponent } from 'src/register'
import { create } from 'zustand'
import useEditor from './useEditor'
const initialStates = {}

type Drag = typeof initialStates

interface DragActions {
  onDragEnd: OnDragEndResponder
}

const useDrag = create<Drag & DragActions>(() => ({
  ...initialStates,
  onDragEnd: (result) => {
    const { source, destination, draggableId } = result

    const add = useEditor.getState().add
    const reorder = useEditor.getState().reorder
    // dropped outside the list
    if (!destination)
      return

    if (destination.droppableId === 'COMPONENT') {
      if (source.droppableId !== 'COMPONENT') {
        // 添加
        add({ ...cloneDeep(editorComponent.componentMap[draggableId]), _id: nanoid() }, destination.index)
      }
      else {
        // 排序
        reorder(source.index, destination.index)
      }
    }
  },
}))

export default useDrag
