<template>
  <div class="bloc step-bloc">
    <nuxt-link :to="{ path: '/', hash: 'agir' }">
      <div id="agir" class="dark-blue-text mb-sm">
        En 3 étapes, c'est facile :
      </div>
    </nuxt-link>
    <div class="section-container">
      <div class="steps-container">
        <img class="steps-image" src="~/assets/step1.png" />
        <div class="nv-container ml-sm">
          <div class="grey-text steps-title">Agis</div>
          <div class="green-text">
            Réalise une action de solidarité en respect des consignes en
            vigueur.
          </div>
        </div>
      </div>
      <div class="steps-container" style="align-self: flex-end">
        <img class="steps-image" src="~/assets/step2.png" />
        <div class="nv-container ml-sm">
          <div class="grey-text steps-title">Capture l'instant</div>
          <div class="green-text">
            Prends une photo ou une vidéo pour raconter ton histoire.
          </div>
        </div>
      </div>
      <div class="steps-container">
        <img class="steps-image" src="~/assets/step3.png" />
        <div class="nv-container ml-sm">
          <div class="grey-text steps-title">Partage</div>
          <div class="green-text">
            Poste la sur les réseaux sociaux avec
            <span class="blue-text">#NosVieux</span>
            et défie deux amis de passer à l’action.
          </div>
        </div>
        <div v-if="dailyChallenge" class="daily-challenge-button-container">
          <nuxt-link :to="`idee/${dailyChallenge.slug}`">
            <button
              class="button is-normal is-outlined is-social-network-color"
            >
              Passe à l'action !
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Act',
  props: {
    dailyChallenge: { type: Object, default: () => null }
  }
}
</script>

<style lang="scss" scoped>
.daily-challenge-button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.steps {
  &-image {
    height: 50px;
  }
  &-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px 0;
    padding: 10px 0;
  }
  &-title {
    text-decoration: underline $dark-blue;
  }
}

@media screen and (min-width: 768px) {
  .step-bloc {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
  }
  .section-container {
    display: flex;
    flex-direction: column;
  }
  .steps-container {
    width: 45%;
    margin: 10px 0;
    padding: 10px;
    box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 1);
  }
}
</style>
