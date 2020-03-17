<template>
  <div>
    <div class="idea-box-header mb-sm">
      <div class="dark-blue-background idea-box-title">La boîte à idées</div>
      <div class="idea-box-subtitle">
        Vous voulez agir mais vous ne savez pas encore comment ? Cette boite à
        idée est faite pour vous !
      </div>
    </div>
    <div class="">
      <div v-for="idea of ideas" :key="idea.id">
        <div class="idea-tag green-background">{{ idea.tags[0].name }}</div>
        <div class="idea-container">
          <img class="idea-logo mb-sm" src="~/assets/send love.png" />
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
  padding: 3px 8px;
}
.idea-container {
  display: flex;
  align-items: center;
  padding: 10px 30px 20px;
  box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
}
.idea-logo {
  width: 50px;
  height: 50px;
  flex-grow: 1;
  margin-right: 15px;
}
.idea-summary {
  font-size: 14px;
}
</style>
