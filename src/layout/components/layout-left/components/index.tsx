const modules: Record<string, any> = import.meta.glob('./*/index.tsx', { eager: true })

const components: Record<string, (() => JSX.Element) & { label: string; componentName: string }> = {}

for (const path in modules) {
  const comp = modules[path].default
  components[comp.name || path.split('/')[1]] = comp
}

export default components
