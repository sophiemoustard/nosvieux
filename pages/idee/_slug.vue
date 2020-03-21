<template>
  <div class="nv-container">
    <div class="bloc">
      <ni-header />
      <div class="main_container">
        <div class="idea-container">
          <div
            v-if="isDailyChallenge"
            class="idea-tag social-network-color-background"
          >
            {{ getDailyChallengeName }}
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
        <div class="tags_container">
          <button
            v-for="tag of idea.tags"
            :key="tag.name"
            :class="[
              'button',
              'is-rounded',
              { 'is-outlined': tag.slug === DAILY_CHALLENGE },
              'is-small',
              getTagColor(tag.slug)
            ]"
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
import { DAILY_CHALLENGE } from '~/helpers/constants'
import { tagColors } from '~/helpers/tagColors'

export default {
  name: 'IdeaProfile',
  components: {
    NiHeader,
    NiFooter
  },
  async asyncData({ app, params }) {
    try {
      const idea = await app.$butter.post.retrieve(params.slug)
      return { idea: idea.data.data }
    } catch (e) {
      return { idea: {} }
    }
  },
  data() {
    return {
      DAILY_CHALLENGE,
      tagColors
    }
  },
  computed: {
    isDailyChallenge() {
      return (
        !!this.idea.tags &&
        this.idea.tags.some((tag) => tag.slug === DAILY_CHALLENGE)
      )
    },
    getDailyChallengeName() {
      if (!this.idea.tags) return ''
      const dailyChallengeTag = this.idea.tags.find(
        (tag) => tag.slug === DAILY_CHALLENGE
      )
      return dailyChallengeTag.name || ''
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
  :not(:last-child) {
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
.tags_container > button {
  cursor: default;
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
  .tags_container {
    :not(:last-child) {
      margin-bottom: 0px;
    }
  }
}
</style>
