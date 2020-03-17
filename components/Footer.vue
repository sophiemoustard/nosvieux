<template>
  <div>
    <div class="bloc dark-blue-background footer-container">
      <div>#NosVieux</div>
      <nuxt-link to="/cgu">Mentions Légales</nuxt-link>
      <div><a href="mailto:contact@nosvieux.com">contact@nosvieux.org</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
a:-webkit-any-link {
  color: white;
}
.footer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}
@media screen and (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-around;
    flex-direction: row;
    color: white;
  }
}
</style>
