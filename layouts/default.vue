<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
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

<style></style>
