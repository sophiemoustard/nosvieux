<template>
  <div :class="['select', { 'is-small': small }]">
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
    small: { type: Boolean, default: false }
  }
}
</script>
