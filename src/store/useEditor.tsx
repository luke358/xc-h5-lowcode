import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import { create } from 'zustand'

interface EditorData {
  /** 页面标题 */
  title: string
  /** 页面路径 */
  path: string
  /** 页面配置 WIP */
  // config: PageConfig
  /** 当前页面的所有组件 */
  blocks: RenderBlockData[]
}
const defaultEditorData = (): EditorData => ({ title: '默认页面', path: `/${nanoid()}`, blocks: [] })
const initialStates = {
  active: -1,
  editorData: defaultEditorData(),
}

type Editor = typeof initialStates

interface EditorActions {
  setBlocks: (blocks: RenderBlockData[]) => void
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
  setBlocks: (blocks) => {
    const editorData = cloneDeep(get().editorData)
    editorData.blocks = blocks
    set({ editorData })
  },
  getTotal: () => get().editorData.blocks.length,
  reorder: (startIndex, endIndex) => {
    const editorData = cloneDeep(get().editorData)
    const blocks = editorData.blocks
    const [removed] = blocks.splice(startIndex, 1)
    blocks.splice(endIndex, 0, removed)
    set({ editorData, active: endIndex })
  },
  move: (type, index) => {
    if (type === 'up')
      get().reorder(index, index - 1)
    else
      get().reorder(index, index + 1)
  },
  del: (index) => {
    const editorData = cloneDeep(get().editorData)
    const blocks = editorData.blocks
    blocks.splice(index, 1)
    set({ editorData })
  },
  add: (item: RenderComponent, index) => {
    const editorData = cloneDeep(get().editorData)
    const blocks = editorData.blocks
    // blocks.splice(index, 0, { ...item, _id: nanoid() } as any)
    const block = createBlock(item)

    blocks.splice(index, 0, block)

    set({ editorData })
  },
  copy(index) {
    const editorData = cloneDeep(get().editorData)
    const blocks = editorData.blocks
    const item = cloneDeep(blocks[index])
    blocks.splice(index, 0, { ...item, _id: nanoid() } as any)
    set({ editorData })
  },
  setActive: (active) => {
    set({ active })
  },
}))

export default useEditor

function createBlock(component: RenderComponent): RenderBlockData {
  return {
    _id: nanoid(),
    moduleName: component.moduleName,
    componentKey: component!.key,
    label: component!.label,
    adjustPosition: true,
    focus: false,
    styles: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingTop: '0',
      paddingRight: '0',
      paddingLeft: '0',
      paddingBottom: '0',
      tempPadding: '0',
    },
    hasResize: false,
    props: {},
    draggable: component.draggable ?? true, // 是否可以拖拽
    showStyleConfig: component.showStyleConfig ?? true, // 是否显示组件样式配置
    animations: [], // 动画集
    actions: [], // 动作集合
    events: component.events || [], // 事件集合
    model: {},
  }
}
