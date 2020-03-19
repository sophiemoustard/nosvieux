<template>
  <div>
    <nuxt-link to="/">
      <img class="logo mb-sm" src="~/assets/logo.png" />
    </nuxt-link>
    <div class="hashtag-nv-container mb-xl">
      <div class="hashtag">
        <div class="blue-text">#</div>
        <div class="green-text">Nos</div>
        <div class="green-blue-text">Vi</div>
        <div class="blue-text">eux</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.logo {
  width: 60px;
}
.hashtag-nv-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hashtag {
  font-size: 42px;
  line-height: 57px;
  display: flex;
}

@media screen and (min-width: 768px) {
  .logo {
    width: 100px;
  }
  .hashtag {
    font-size: 90px;
  }
}
</style>
