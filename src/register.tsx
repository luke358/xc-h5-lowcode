import basic from './packages/base-widgets'
// 注册基础控件
// const basicName = basic.name
// Object.entries(basic.components).forEach(([name, widget]) => {

// })

import { createEditorConfig } from './utils/createEditorConfig'

export const editorConfig = createEditorConfig()
// 注册基础控件
Object.entries(basic).forEach(([name, widget]) =>
  editorConfig.registry('baseWidgets', name, widget),
)

// eslint-disable-next-line no-console
console.log(
  `%c成功加载组件数量:${Object.keys(editorConfig.componentMap).length}`,
  'color:#409EFF;background-color:#ecf5ff;padding:0 10px;line-height:2;margin-bottom:4px;',
)

// eslint-disable-next-line no-console
console.log('editorConfig:', editorConfig)
