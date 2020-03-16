<template>
  <div class="bloc">
    <div class="dark-blue-text three-steps-title">
      En 3 etapes, c'est facile :
    </div>
    <div class="steps">
      <div class="first-steps">
        <div class="steps-container">
          <img class="steps-image" src="~/assets/step1.png" />
          <div class="container ml-sm">
            <div class="grey-text steps-title">Agis</div>
            <div class="green-text">
              Réalise une action de solidarité pour une personne âgée.
            </div>
          </div>
        </div>
        <div class="steps-container">
          <img class="steps-image" src="~/assets/step2.png" />
          <div class="container ml-sm">
            <div class="grey-text steps-title">Capture l'instant</div>
            <div class="green-text">Prend une photo ou une vidéo.</div>
          </div>
        </div>
      </div>
      <div class="steps-container">
        <img class="steps-image" src="~/assets/step3.png" />
        <div class="container ml-sm">
          <div class="grey-text steps-title">Partage</div>
          <div class="green-text">
            Raconte ton histoire sur les réseaux sociaux avec #NosVieux et défie
            deux amis de passer à l’action.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps-image {
  height: 42px;
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
  .three-steps-title {
    text-align: center;
    font-size: 20px;
  }
  .steps {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .first-steps {
    display: flex;
    flex-direction: row;
  }
  .steps-container {
    width: 350px;
    margin: 10px 20px;
    padding: 10px 20px;
  }
}
</style>
