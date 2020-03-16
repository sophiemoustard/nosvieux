<template>
  <div>
    <div class="bloc blue-background footer-container">
      <div>#NosVieux 2020</div>
      <nuxt-link to="/cgu">Mentions Légales</nuxt-link>
      <a href="mailto:contact@nosvieux.com">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  color: white;
}
</style>
