<template>
  <div class="bloc social">
    <div class="social-title mb-sm dark-blue-text">
      À distance mais pas distant, partage ton action sur nos réseaux sociaux !
    </div>
    <div>
      <a
        target="_blank"
        href="https://www.facebook.com/Nos-Vieux-104914367810701/?modal=admin_todo_tour"
      >
        <img class="social-logo mb-sm" src="~/assets/facebook.png" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/search?q=%23NosVieux&src=typed_query"
      >
        <img class="social-logo mb-sm" src="~/assets/twitter.png" />
      </a>
      <a target="_blank" href="https://www.instagram.com/nos_vieux/?hl=fr">
        <img class="social-logo mb-sm" src="~/assets/instagram.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social'
}
</script>

<style scoped>
.social-logo {
  width: 35px;
  margin: 0 15px;
}
.social {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
