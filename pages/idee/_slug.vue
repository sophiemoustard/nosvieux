<template>
  <div class="container">
    <div class="bloc">
      <ni-header />
      <div class="idea-container">
        <div
          v-for="tag of idea.tags"
          :key="tag.name"
          class="idea-tag"
          :class="getTagColor(tag.slug)"
        >
          {{ tag.name }}
        </div>
        <div class="idea-content">
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
    </div>
    <ni-footer />
  </div>
</template>

<script>
import NiHeader from '~/components/Header'
import NiFooter from '~/components/Footer'
import {
  MAIN_TAG_AIDE,
  MAIN_TAG_CONTACT,
  MAIN_TAG_ACTIVITE,
  TAG_1_HOUR,
  TAG_HALF_DAY,
  TAG_FEW_HOURS,
  TAG_ALL_MY_TIME,
  TAG_CITOYEN,
  TAG_CHILD,
  TAG_RELATIVE
} from '~/helpers/constants'

export default {
  name: 'IdeaProfile',
  components: {
    NiHeader,
    NiFooter
  },
  async asyncData({ app, params }) {
    const idea = await app.$butter.post.retrieve(params.slug)
    return { idea: idea.data.data }
  },
  data() {
    const tagColors = {
      [MAIN_TAG_AIDE]: 'green-background',
      [MAIN_TAG_CONTACT]: 'blue-background',
      [MAIN_TAG_ACTIVITE]: 'green-blue-background',
      [TAG_1_HOUR]: 'green-background',
      [TAG_HALF_DAY]: 'blue-background',
      [TAG_FEW_HOURS]: 'green-blue-background',
      [TAG_ALL_MY_TIME]: 'dark-blue-background',
      [TAG_CITOYEN]: 'green-background',
      [TAG_CHILD]: 'blue-background',
      [TAG_RELATIVE]: 'green-blue-background'
    }
    return {
      tagColors
    }
  },
  methods: {
    getTagColor(slug) {
      return this.tagColors[slug] || 'dark-blue-background'
    }
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
  box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
}
.idea-content {
  padding: 20px;
  font-size: 18px;
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
