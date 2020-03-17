<template>
  <div class="bloc">
    <ni-header />
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
import NiHeader from '~/components/Header'

export default {
  name: 'NosVieux',
  components: { NiHeader }
}
</script>

<style scoped>
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
