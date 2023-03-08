import type { CSSProperties } from 'react'

/**
 * @description 创建编辑器配置
 * @returns {} 返回编辑器注册组件的方法等
 */
export function createEditorComponent() {
  const componentModules: ComponentModules = {
    baseWidgets: [],
    // containerComponents: [],
  }

  const componentMap: Record<string, RenderComponent> = {}
  return {
    componentModules,
    componentMap,
    registry: <
      Props extends Record<string, any> = {},
      Model extends Record<string, string> = {},
    >(
      moduleName: keyof ComponentModules,
      key: string,
      component: {
        label: string
        preview: () => JSX.Element
        render: (data: {
          props: { [k in keyof Props]: any }
          model: Partial<{ [k in keyof Model]: any }>
          styles: CSSProperties
          block: RenderBlockData
          custom: Record<string, any>
        }) => JSX.Element
        props?: Props
        model?: Model
        styles?: CSSProperties
      },
    ) => {
      const comp = { ...component, key, moduleName } as RenderComponent
      componentModules[moduleName].push(comp)
      componentMap[key] = comp
    },
  }
}
