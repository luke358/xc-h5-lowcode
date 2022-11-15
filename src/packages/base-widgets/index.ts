const modules: Record<string, any> = import.meta.glob('./*/index.tsx', { eager: true })

const components: Record<string, RenderComponent> = {}

Object.entries(modules).forEach(([key, module]) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx)/, '$1')
  components[name] = module?.default || module
})

// console.log(components, 'basic-components')
export default components
