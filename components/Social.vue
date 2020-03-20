<template>
  <div class="bloc social">
    <div class="social-title mb-sm dark-blue-text">
      À distance mais pas distant, partage ton action sur nos réseaux sociaux !
    </div>
    <div>
      <a
        target="_blank"
        href="https://www.facebook.com/search/posts/?q=%23nosvieux&epa=SERP_TAB"
      >
        <img class="social-logo mb-sm" src="~/assets/facebook.png" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/search?q=%23NosVieux&src=typed_query&f=live"
      >
        <img class="social-logo mb-sm" src="~/assets/twitter.png" />
      </a>
      <a target="_blank" href="https://www.instagram.com/nos_vieux/?hl=fr">
        <img class="social-logo mb-sm" src="~/assets/instagram.png" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/feed/hashtag/nosvieux/">
        <img class="social-logo mb-sm" src="~/assets/linkedin.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social'
}
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  flex-direction: column;
  &-logo {
    width: 35px;
    margin: 0 15px;
  }
}
</style>
