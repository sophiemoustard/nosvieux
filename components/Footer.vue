<template>
  <div>
    <div class="bloc dark-blue-background">
      <div class="footer-container">
        <div>#NosVieux</div>
        <nuxt-link to="/cgu">Mentions Légales</nuxt-link>
        <div>
          <a href="mailto:contact@nosvieux.com">contact@nosvieux.org</a>
        </div>
      </div>
      <div class="credits-container">
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
            >Freepik</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com</a
          >
        </div>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware"
            >Good Ware</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </div>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/wanicon" title="wanicon"
            >wanicon</a
          >
          from
          <a href="https://www.flaticon.com/" title="Flaticon"
            >www.flaticon.com</a
          >
        </div>
      </div>
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
.footer-nv-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}
.footer-container > div,
.footer-container > nuxt-link {
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
}
.credits-container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  line-height: 1.3;
  font-size: 14px;
}
.bloc {
  padding-bottom: 20px;
}
@media screen and (min-width: 768px) {
  .footer-nv-container {
    flex-direction: row;
    justify-content: space-around;
    flex-direction: row;
    color: white;
  }
}
</style>
