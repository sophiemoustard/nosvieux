<template>
  <div class="nv-container">
    <ni-header />
    <nuxt class="nuxt-container" />
    <ni-footer />
  </div>
</template>

<script>
import NiHeader from '~/components/Header'
import NiFooter from '~/components/Footer'

export default {
  components: {
    NiHeader,
    NiFooter
  },
  async mounted() {
    const anchor = this.$router.currentRoute.hash
    await this.$nextTick()
    if (anchor && document.querySelector(anchor)) location.href = anchor
  },
  head() {
    return {
      titleTemplate: '#NosVieux',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Lutter contre l'isolement social des personnes agées"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nv-container {
  min-height: 100%;
}
.nuxt-container {
  flex: 1;
}
</style>
