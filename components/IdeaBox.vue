<template>
  <div>
    <div class="idea-box-header mb-sm">
      <div class="dark-blue-background idea-box-title">La boîte à idées</div>
      <div class="idea-box-subtitle">
        Tu veux agir mais ne sais pas encore comment ? Cette boite à idée est
        faite pour toi ! N'oublie pas de bien respecter les consignes en
        vigueur.
      </div>
    </div>
    <div class="idea-box-container">
      <div v-for="(idea, index) of ideas" :key="idea.id" class="idea-container">
        <div class="idea-tag" :class="getbackgroundClass(index)">
          {{ idea.tags[0].name }}
        </div>
        <div class="idea-description mb-sm">
          <img class="idea-logo mr-sm" src="~/assets/send love.png" />
          <div>
            <div>{{ idea.title }}</div>
            <div class="idea-summary grey-text">{{ idea.summary }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IdeaBox',
  props: {
    ideas: { type: Array, default: () => [] }
  },
  methods: {
    getbackgroundClass(index) {
      switch (index % 4) {
        case 0:
          return 'green-background'
        case 1:
          return 'blue-background'
        case 2:
          return 'green-blue-background'
        case 3:
          return 'dark-blue-background'
      }
    },
    getMainTag(idea) {
      return idea.tags && idea.tags[0] && idea.tags[0].name
        ? idea.tags[0].name
        : 'Citoyen concerné'
    }
  }
}
</script>

<style scoped>
.idea-box-header {
  text-align: center;
}
.idea-box-title {
  color: white;
  font-weight: bold;
  padding: 10px 0;
}
.idea-box-subtitle {
  padding: 10px;
  font-style: italic;
}
.idea-tag {
  color: white;
  width: fit-content;
  padding: 2px 10px;
  font-size: 14px;
}
.idea-description {
  display: flex;
  align-items: center;
  padding: 10px 30px 20px;
  box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
}
.idea-logo {
  width: 50px;
  height: 50px;
  flex-grow: 1;
}
.idea-summary {
  font-size: 14px;
}
@media screen and (min-width: 768px) {
  .idea-box-subtitle {
    font-size: 18px;
  }
  .idea-box-container {
    width: 700px;
    margin: auto;
    font-size: 18px;
  }
}
</style>
