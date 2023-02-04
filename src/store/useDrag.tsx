import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import type { OnDragEndResponder } from 'react-beautiful-dnd'
import { editorConfig } from 'src/register'
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

    const editorList = useEditor.getState().editorList
    const setEditorList = useEditor.getState().setEditorList
    const reorder = useEditor.getState().reorder
    // dropped outside the list
    if (!destination)
      return

    if (destination.droppableId === 'COMPONENT') {
      if (source.droppableId !== 'COMPONENT') {
        // 复制
        const _editorList = cloneDeep(editorList)
        _editorList.splice(destination.index, 0, { ...cloneDeep(editorConfig.componentMap[draggableId]), _id: nanoid() })
        setEditorList(_editorList)
      }
      else {
        // 排序
        reorder(source.index, destination.index)
      }
    }
  },
}))

export default useDrag
