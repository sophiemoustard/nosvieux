<template>
  <div class="container bloc">
    <div class="dark-blue-text">En 3 etapes, c'est facile:</div>
    <div class="steps-container">
      <img class="steps-image" src="../static/img1.png" />
      <div class="container mg-sm">
        <div class="grey-text steps-title">Agis</div>
        <div class="green-text">
          Réalise une action de solidarité pour une personne âgée
        </div>
      </div>
    </div>
    <div class="steps-container">
      <img class="steps-image" src="../static/img2.png" />
      <div class="container mg-sm">
        <div class="grey-text steps-title">Capture l'instant</div>
        <div class="green-text">Prend une photo ou une vidéo</div>
      </div>
    </div>
    <div class="steps-container">
      <img class="steps-image" src="../static/img3.png" />
      <div class="container mg-sm">
        <div class="grey-text steps-title">Partage</div>
        <div class="green-text">
          Raconte ton histoire sur les réseaux sociaux avec #NosVieux et défie
          deux amis de passer à l’action
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
  margin-top: 10px;
}
.steps-title {
  text-decoration: underline #0073c0;
}
</style>
