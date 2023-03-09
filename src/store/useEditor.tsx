import { cloneDeep } from 'lodash-es'
import { nanoid } from 'nanoid'
import { create, useStore } from 'zustand'
import type { TemporalState } from 'zundo'
import { temporal } from 'zundo'

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
// test data
// const defaultEditorData = (): EditorData => ({ title: '默认页面', path: '/xNVjHLiykQqHKbbWStmiP', blocks: [{ _id: 'iYnwoQeQULZ5PfyIIpTQe', moduleName: 'baseWidgets', componentKey: 'input', label: '输入框', adjustPosition: true, focus: false, styles: { display: 'flex', justifyContent: 'flex-start', paddingTop: '0', paddingRight: '0', paddingLeft: '0', paddingBottom: '0', tempPadding: '0' }, hasResize: false, props: {}, draggable: true, showStyleConfig: true, animations: [], actions: [], events: [], model: {} }, { _id: '7ikPKVNW1mPvz1JpFyXko', moduleName: 'baseWidgets', componentKey: 'selector-single', label: '选择框-单选', adjustPosition: true, focus: false, styles: { display: 'flex', justifyContent: 'flex-start', paddingTop: '0', paddingRight: '0', paddingLeft: '0', paddingBottom: '0', tempPadding: '0' }, hasResize: false, props: { showCheckMark: true }, draggable: true, showStyleConfig: true, animations: [], actions: [], events: [], model: {} }] })
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
  add: (item: RenderComponent, index?: number) => void
  copy: (index: number) => void
  update: (key: string | string[], value: any, index?: number) => void
  clear: () => void
}

const useEditor = create(temporal<Editor & EditorActions>((set, get) => ({
  ...cloneDeep(initialStates),
  setBlocks: (blocks) => {
    const editorData = cloneDeep(get().editorData)
    editorData.blocks = blocks
    set({ editorData })
  },
  clear: () => {
    set(cloneDeep(initialStates))
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
  add: (item: RenderComponent, _index) => {
    const editorData = cloneDeep(get().editorData)
    const blocks = editorData.blocks
    const block = createBlock(item)
    const index = _index ?? blocks.length
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
  /**
   * 更新当前block的属性
   * @param {string} key 属性key
   * @param {any} value 属性值
   * @param {number | null} [_index] 索引
   */
  update(key, value, _index) {
    const editorData = cloneDeep(get().editorData)
    const index = _index ?? get().active
    const blocks = editorData.blocks
    let block = blocks[index]

    if (!Array.isArray(key))
      key = [key]
    const lastKey = key.pop()!

    for (const k of key) {
      // 数据保证一定存在，但是偶尔还是会报错，需要判断一下，但是会覆盖其他属性
      // TODO:可能是zustand的bug，也可能写的又问题
      if (!block[k])
        block[k] = {}
      block = block[k]
    }

    block[lastKey] = value

    set({ editorData })
  },
  setActive: (active) => {
    set({ active })
  },
})))

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const useTemporalStore = <T extends unknown>(
  selector: (state: TemporalState<Editor & EditorActions>) => T,
  equality?: (a: T, b: T) => boolean,
) => useStore(useEditor.temporal, selector, equality)

export default useEditor

function createBlock(component: RenderComponent): RenderBlockData {
  const _id = nanoid()
  return {
    _id,
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
    props: Object.entries(component.props || {}).reduce((prev, [propName, propSchema]) => {
      if (propSchema?.defaultValue)
        prev[propName] = propSchema?.defaultValue
      return prev
    }, {} as Record<string, any>),
    draggable: component.draggable ?? true, // 是否可以拖拽
    showStyleConfig: component.showStyleConfig ?? true, // 是否显示组件样式配置
    animations: [], // 动画集
    actions: [], // 动作集合
    events: component.events || [], // 事件集合
    model: {},
    pos: {
      i: _id,
      x: 0,
      y: Infinity, // puts it at the bottom
      w: 24,
      h: 24,
    },
  }
}
