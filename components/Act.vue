<template>
  <div class="bloc">
    <div class="step-bloc">
      <div id="act" class="dark-blue-text mb-sm">
        En 3 étapes, c'est facile :
      </div>
      <div class="steps">
        <div class="steps-container">
          <img class="steps-image" src="~/assets/step1.png" />
          <div class="container ml-sm">
            <div class="grey-text steps-title">Agis</div>
            <div class="green-text">
              Réalise une action de solidarité en respect des consignes en
              vigueur.
            </div>
          </div>
        </div>
        <div class="steps-container" style="align-self: flex-end">
          <img class="steps-image" src="~/assets/step2.png" />
          <div class="container ml-sm">
            <div class="grey-text steps-title">Capture l'instant</div>
            <div class="green-text">
              Prends une photo ou une vidéo pour raconter ton histoire.
            </div>
          </div>
        </div>
        <div class="steps-container">
          <img class="steps-image" src="~/assets/step3.png" />
          <div class="container ml-sm">
            <div class="grey-text steps-title">Partage</div>
            <div class="green-text">
              Poste la sur les réseaux sociaux avec
              <span class="blue-text">#NosVieux</span>
              et défie deux amis de passer à l’action.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Act'
}
</script>

<style scoped>
.steps-image {
  height: 50px;
}
.steps-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
  padding: 10px 0;
}
.steps-title {
  text-decoration: underline #0073c0;
}

@media screen and (min-width: 768px) {
  .step-bloc {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
  }
  .steps {
    width: 750px;
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
