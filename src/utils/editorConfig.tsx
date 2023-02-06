export const createInputProp = (label: string, defaultValue: string) => ({ type: 'input', label, defaultValue })
export const createSelectProp = (label: string,
  options: { label: string; value: string }[],
  defaultValue: string,
  multiple = false) => ({ type: 'select', label, defaultValue, options, multiple })
export const createSwitchProp = (label: string, defaultValue = false) => ({ type: 'switch', label, defaultValue })
