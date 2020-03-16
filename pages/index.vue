<template>
  <div class="container">
    <nos-vieux />
    <act />
    <ni-footer />
  </div>
</template>

<script>
import Act from '~/components/Act'
import NiFooter from '~/components/Footer'
import NosVieux from '~/components/NosVieux'

export default {
  components: {
    Act,
    NiFooter,
    NosVieux
  }
}
</script>

<style></style>
