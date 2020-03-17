<template>
  <div class="container">
    <div class="bloc">
      <ni-header />
      <div class="idea-container">
        <div class="idea-title mb-md">
          <h1>{{ idea.title }}</h1>
          <img
            class="idea-logo"
            :src="idea.featured_image"
            :alt="idea.featured_image_alt"
          />
        </div>
        <div class="dark-blue-text">{{ idea.summary }}</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="idea.body" />
      </div>
    </div>
    <ni-footer />
  </div>
</template>

<script>
import NiHeader from '~/components/header'
import NiFooter from '~/components/Footer'

export default {
  name: 'IdeaProfile',
  components: {
    NiHeader,
    NiFooter
  },
  async asyncData({ app, params }) {
    const idea = await app.butter.post.retrieve(params.slug)
    return { idea: idea.data.data }
  },
  head() {
    return {
      title: this.idea.seo_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.idea.meta_description
        }
      ]
    }
  }
}
</script>

<style scoped>
.idea-logo {
  width: 50px;
  height: 50px;
}
.idea-container {
  font-size: 18px;
  padding: 20px;
  box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
}
.idea-title {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (min-width: 768px) {
  .idea-logo {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }
  .idea-container {
    width: 700px;
    margin: auto;
    font-size: 18px;
  }
  .idea-title {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
