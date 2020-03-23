<template>
  <div class="section-filter columns is-multiline is-mobile justify-around">
    <div
      v-for="(filter, index) of filters"
      :key="index"
      class="column is-narrow"
    >
      <div class="mb-xs">{{ filter.label }}</div>
      <nv-select
        :value="value[filter.name] || ''"
        :options="filter.options"
        :select-class="filter.class"
        small
        @input="inputHandler($event, filter.name)"
      />
    </div>
  </div>
</template>

<script>
import NvSelect from '~/components/form/Select'

export default {
  name: 'IdeaFilter',
  components: { NvSelect },
  props: {
    value: { type: Object, default: () => {} },
    filters: { type: Array, default: () => [] }
  },
  methods: {
    inputHandler(value, filterName) {
      this.$emit('input', { ...this.value, [filterName]: value })
    }
  }
}
</script>
