<template>
  <div>
    <div class="bloc dark-blue-background">
      <div class="footer-container">
        <div>#NosVieux</div>
        <nuxt-link to="/cgu">Mentions Légales</nuxt-link>
        <div>
          <a href="mailto:contact@nosvieux.org">contact@nosvieux.org</a>
        </div>
      </div>
      <div class="buttercms-container">
        Ce site a été fait à l'aide de<a
          href="https://buttercms.com/"
          target="_blank"
        >
          <img src="../static/butter-w.png" />
        </a>
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

<style lang="scss" scoped>
a:-webkit-any-link {
  color: white;
}
.footer-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}
.footer-container > div,
.footer-container > nuxt-link {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
a {
  color: white;
}
.credits-container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.3;
  font-size: 14px;
}
.bloc {
  padding-bottom: 20px;
}
.buttercms-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;
  font-size: 14px;
}
.buttercms-container img {
  width: 200px;
}

@media screen and (min-width: 768px) {
  .footer-container > div,
  .footer-container > nuxt-link {
    flex-basis: 0;
  }
  .footer-container {
    flex-direction: row;
    justify-content: space-around;
    flex-direction: row;
    color: white;
  }
}
</style>
