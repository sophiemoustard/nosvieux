<template>
  <div class="section-filters">
    <div v-for="(filter, index) of filters" :key="index" class="filter">
      <div class="mb-xs">{{ filter.label }}</div>
      <nv-select
        :value="value[filter.name] || ''"
        :options="filter.options"
        :select-class="filterColorClass[filter.name] || 'is-dark-blue'"
        small
        @input="inputHandler($event, filter.name)"
      />
    </div>
  </div>
</template>

<script>
import NvSelect from '~/components/form/Select'
import { tagColors as filterColors } from '~/helpers/tagColors'

export default {
  name: 'IdeaFilter',
  components: { NvSelect },
  props: {
    value: { type: Object, default: () => {} },
    filters: { type: Array, default: () => [] }
  },
  computed: {
    filterColorClass() {
      return Object.keys(this.value).reduce((acc, filter) => {
        const tag = this.value[filter]
        return {
          ...acc,
          [filter]: tag ? filterColors[tag] : 'is-dark-blue'
        }
      }, {})
    }
  },
  methods: {
    inputHandler(value, filterName) {
      this.$emit('input', { ...this.value, [filterName]: value })
    }
  }
}
</script>
