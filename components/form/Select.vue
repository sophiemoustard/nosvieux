<template>
  <div :class="computedClasses">
    <select :value="value" @input="$emit('input', $event.target.value)">
      <option value="">...</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: { type: String, default: '' },
    options: { type: Array, default: () => [] },
    small: { type: Boolean, default: false },
    selectClass: { type: String, default: '' }
  },
  computed: {
    computedClasses() {
      return [
        'select',
        { 'is-small': this.small },
        ...this.selectClass.split(' ')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
option {
  color: black;
}
</style>
