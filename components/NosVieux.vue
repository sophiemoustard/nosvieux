<template>
  <div class="bloc">
    <img class="logo mb-sm" src="~/assets/logo.png" />
    <div class="hashtag-container mb-xl">
      <div class="hashtag">
        <div class="blue-text">#</div>
        <div class="green-text">Nos</div>
        <div class="green-blue-text">Vi</div>
        <div class="blue-text">eux</div>
      </div>
    </div>
    <div class="dark-blue-text mb-xl description">
      « Nous changeons nos habitudes pour protéger nos aînés et les personnes
      vulnérables. Mais <b>confinement ne doit pas rimer avec isolement</b> !
      Soyons solidaires avec les personnes âgées et vulnérables, mobilisons-nous
      dans le respect des consignes. »
    </div>
    <div class="green-background punchline mb-xl">
      <div class="punchline-text">
        Lavons nous les mains mais ne nous tournons pas les pouces !
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NosVieux'
}
</script>

<style scoped>
.logo {
  width: 60px;
}
.hashtag-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hashtag {
  font-size: 42px;
  line-height: 57px;
  display: flex;
}
.description {
  text-align: center;
}
.punchline {
  color: white;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  padding: 8px 15px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .logo {
    width: 100px;
  }
  .hashtag {
    font-size: 90px;
  }
  .description {
    width: 780px;
    margin: 0 auto 60px;
    line-height: 35px;
  }
  .punchline {
    width: 40%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .punchline-text {
    width: 80%;
    line-height: 35px;
  }
}
</style>
