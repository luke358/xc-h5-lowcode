import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import { create } from 'zustand'

const initialStates = {
  active: -1,
  editorList: [] as RenderComponent[],
}

type Editor = typeof initialStates

interface EditorActions {
  setEditorList: (editorList: RenderComponent[]) => void
  getTotal: () => number
  reorder: (startIndex: number, endIndex: number) => void
  move: (type: 'up' | 'down', index: number) => void
  del: (index: number) => void
  setActive: (index: number) => void
  add: (item: RenderComponent, index: number) => void
  copy: (index: number) => void
}

const useEditor = create<Editor & EditorActions>((set, get) => ({
  ...initialStates,
  setEditorList: (editorList) => {
    set({ editorList })
  },
  getTotal: () => get().editorList.length,
  reorder: (startIndex, endIndex) => {
    const editorList = cloneDeep(get().editorList)
    const [removed] = editorList.splice(startIndex, 1)
    editorList.splice(endIndex, 0, removed)

    set({ editorList, active: endIndex })
  },
  move: (type, index) => {
    if (type === 'up')
      get().reorder(index, index - 1)
    else
      get().reorder(index, index + 1)
  },
  del: (index) => {
    const editorList = cloneDeep(get().editorList)
    editorList.splice(index, 1)
    set({ editorList })
  },
  add: (item: RenderComponent, index) => {
    const editorList = cloneDeep(get().editorList)
    editorList.splice(index, 0, { ...item, _id: nanoid() })
    set({ editorList })
  },
  copy(index) {
    const editorList = cloneDeep(get().editorList)
    const item = cloneDeep(editorList[index])
    editorList.splice(index, 0, { ...item, _id: nanoid() })
    set({ editorList })
  },
  setActive: (active) => {
    set({ active })
  },
}))

export default useEditor
