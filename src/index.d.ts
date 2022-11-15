interface RenderComponent {
  /** 组件name */
  key: string
  /** 组件所属模块名称 */
  moduleName: keyof ComponentModules
  /** 组件唯一id */
  _id?: string
  /** 组件中文名称 */
  label: string
  /** 组件预览函数 */
  preview: () => JSX.Element
  /** 组件渲染函数 */
  render: (data: {
    props: any
    styles?: CSSProperties
    block?: RenderBlockData
    custom?: Record<string, any>
  }) => JSX.Element
  /** 组件是否可以被拖拽 */
  draggable?: boolean
  /** 是否显示组件的样式配置项 */
  showStyleConfig?: boolean
  /** 组件属性 */
  props?: Record<string, EditorProps>
  /** 动画集 */
  animations?: Animation[]
  /** 组件事件集合 */
  events?: { label: string; value: string }[]
  /** 组件样式 */
  styles?: CSSProperties
}

interface RenderBlockData {
  /** 组件id 时间戳, 组件唯一标识 */
  _id: string
  /** 组件所属的模块（基础组件、容器组件） */
  moduleName: keyof ComponentModules
  /** 映射 EditorConfig 中 componentMap 的 component对象 */
  componentKey: string
  /** 组件标签名称 */
  label: string
  /** 是否需要调整位置 */
  adjustPosition: boolean
  /** 当前是否为选中状态 */
  focus: boolean
  /** 当前组件的样式 */
  styles: CSSProperties & {
    tempPadding?: string
  }
  /** 是否调整过宽度或者高度 */
  hasResize: boolean
  /** 组件的设计属性 */
  props: Record<string, any>
  /** 绑定的字段 */
  model: Record<string, string>
  /** 组件是否可以被拖拽 */
  draggable: boolean
  /** 是否显示组件样式配置项 */
  showStyleConfig?: boolean
  /** 动画集 */
  animations?: Animation[]
  /** 组件动作集合 */
  actions: Action[]
  /** 组件事件集合 */
  events: { label: string; value: string }[]
  [prop: string]: any
}
// 组件模块
interface ComponentModules {
  baseWidgets: RenderComponent[] // 基础组件
}

enum RenderPropsType {
  /** 输入框 */
  input = 'input',
  /** 数字输入框 */
  inputNumber = 'InputNumber',
  /** 颜色选择器 */
  color = 'color',
  /** 下拉选择器 */
  select = 'select',
  /** 表格 */
  table = 'table',
  /** 开关 */
  switch = 'switch',
  /** 模型绑定选择器 */
  modelBind = 'ModelBind',
  /** 可拖拽项 */
  crossSortable = 'CrossSortable',
}

type EditorProps = {
  type: RenderPropsType
  /** 表单项标签名称 */
  label: string
  /** 表单项提示说明 */
  tips?: string
  /** 表单域标签的位置 */
  labelPosition?: string
  /** 表单项默认值 */
  defaultValue?: any
} & {
  /** 可选项 */
  options?: VisualEditorSelectOptions
  /** 是否可以多选 */
  multiple?: boolean
  /** 项属性配置 */
  showItemPropsConfig?: boolean
} & {
  max?: number
  min?: number
} & {
  table?: VisualEditorTableOption
}
