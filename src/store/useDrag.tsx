import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import { editorComponent } from 'src/register'
import { create } from 'zustand'
import useEditor from './useEditor'
const initialStates = {}

type Drag = typeof initialStates

interface DragActions {
  onDragEnd: (item: { data: RenderComponent }) => void
}

const useDrag = create<Drag & DragActions>(() => ({
  ...initialStates,
  onDragEnd: (item) => {
    const add = useEditor.getState().add
    add({ ...cloneDeep(editorComponent.componentMap[item.data.key]), _id: nanoid() })
  },
}))

export default useDrag
