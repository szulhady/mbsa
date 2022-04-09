export { default as BarChartHorizontal } from '../..\\components\\BarChartHorizontal.vue'
export { default as DetailCard } from '../..\\components\\DetailCard.vue'
export { default as DetailCards } from '../..\\components\\DetailCards.vue'
export { default as Frame } from '../..\\components\\Frame.vue'
export { default as Frame2 } from '../..\\components\\Frame2.vue'
export { default as Frame3 } from '../..\\components\\Frame3.vue'
export { default as LineGraph } from '../..\\components\\LineGraph.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Maps } from '../..\\components\\Maps.vue'
export { default as Maps2 } from '../..\\components\\Maps2.vue'
export { default as MbsaEnergyConsumption } from '../..\\components\\MbsaEnergyConsumption.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
