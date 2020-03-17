<template>
  <div>
    <ni-header />
  </div>
</template>

<script>
import NiHeader from '~/components/header'

export default {
  name: 'IdeaProfile',
  components: {
    NiHeader
  },
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped></style>
