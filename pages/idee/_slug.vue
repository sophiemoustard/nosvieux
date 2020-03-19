<template>
  <div class="nv-container">
    <div class="bloc">
      <ni-header />
      <div class="main_container">
        <div class="idea-container">
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
        <div class="tags_container">
          <button
            v-for="tag of idea.tags"
            :key="tag.name"
            :class="['button', 'is-rounded', 'is-small', getTagColor(tag.slug)]"
          >
            {{ tag.name }}
          </button>
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
      [MAIN_TAG_AIDE]: 'is-green',
      [MAIN_TAG_CONTACT]: 'is-blue',
      [MAIN_TAG_ACTIVITE]: 'is-green-blue',
      [TAG_1_HOUR]: 'is-green',
      [TAG_HALF_DAY]: 'is-blue',
      [TAG_FEW_HOURS]: 'is-green-blue',
      [TAG_ALL_MY_TIME]: 'is-dark-blue',
      [TAG_CITOYEN]: 'is-green',
      [TAG_CHILD]: 'is-blue',
      [TAG_RELATIVE]: 'is-green-blue'
    }
    return {
      tagColors
    }
  },
  methods: {
    getTagColor(slug) {
      return this.tagColors[slug] || 'is-dark-blue'
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

<style lang="scss" scoped>
.main_container {
  display: flex;
  flex-direction: column;
}
.tags_container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 37px;
  flex-wrap: wrap;
  height: -webkit-fill-available;
}
.idea {
  &-logo {
    width: 50px;
    height: 50px;
  }
  &-container {
    box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
  }
  &-title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-content {
    padding: 20px;
    font-size: 18px;
  }
  &-tag {
    border-radius: 15px;
    box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
    margin: 5px;
    display: flex;
  }
}

@media screen and (min-width: 768px) {
  .idea {
    &-logo {
      width: 60px;
      height: 60px;
      margin-left: 10px;
    }
    &-container {
      width: 700px;
      margin: auto;
      font-size: 18px;
    }
    &-title {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
