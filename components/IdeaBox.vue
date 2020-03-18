<template>
  <div>
    <div class="idea-box-header mb-sm">
      <div class="dark-blue-background idea-box-title">La boîte à idées</div>
    </div>
    <div class="idea-box-container">
      <div class="idea-box-subtitle">
        Tu veux agir mais ne sais pas encore comment ? Cette boite à idées est
        faite pour toi ! N'oublie pas de bien respecter les consignes en
        vigueur.
      </div>
      <div v-for="idea of ideas" :key="idea.id">
        <nuxt-link :to="`idee/${idea.slug}`" class="idea-container">
          <div class="idea-tag" :class="getMainTag(idea).color">
            {{ getMainTag(idea).name }}
          </div>
          <div class="idea-description">
            <img class="idea-logo" :src="idea.featured_image" />
            <div>
              <div>{{ idea.title }}</div>
              <div class="idea-summary grey-text">{{ idea.summary }}</div>
            </div>
            <img src="~/assets/chevron_right.png" class="chevron" />
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-if="!showAll" class="container">
      <div
        class="light-green-background more-ideas-button container"
        @click="getAllPosts()"
      >
        VOIR PLUS D'IDÉES
      </div>
    </div>
  </div>
</template>

<script>
import {
  MAIN_TAG_AIDE,
  MAIN_TAG_CONTACT,
  MAIN_TAG_ACTIVITE
} from '~/helpers/constants'

export default {
  name: 'IdeaBox',
  props: {
    ideas: { type: Array, default: () => [] }
  },
  data() {
    const tagColors = {
      [MAIN_TAG_AIDE]: 'green-background',
      [MAIN_TAG_CONTACT]: 'blue-background',
      [MAIN_TAG_ACTIVITE]: 'green-blue-background'
    }
    return {
      showAll: false,
      tagColors,
      defaultMainTag: {
        name: 'Garder contact',
        color: tagColors[MAIN_TAG_CONTACT]
      }
    }
  },
  methods: {
    getMainTag(idea) {
      if (!idea.tags || idea.tags.length === 0) return this.defaultMainTag

      const mainTag = idea.tags.find((tg) => tg.slug.startsWith('main-'))
      if (!mainTag) return this.defaultMainTag

      return {
        ...mainTag,
        color: this.tagColors[mainTag.slug] || 'dark-blue-background'
      }
    },
    getAllPosts() {
      this.showAll = true
      this.$emit('allPost')
    }
  }
}
</script>

<style scoped>
a:-webkit-any-link {
  color: black;
}
.idea-box-header {
  text-align: center;
}
.idea-box-title {
  color: white;
  font-weight: bold;
  padding: 10px 0;
}
.idea-box-subtitle {
  padding: 20px 0;
  text-align: center;
  font-style: italic;
}
.idea-tag {
  color: white;
  width: fit-content;
  padding: 2px 10px;
  font-size: 14px;
}
.idea-container {
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 12px 0 rgba(217, 226, 233);
  margin: 10px 0 20px 0;
}
.idea-description {
  display: flex;
  align-items: center;
  padding: 10px 15px 20px 20px;
}
.idea-logo {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}
.idea-summary {
  font-size: 14px;
}
.chevron {
  width: 5px;
  height: 10px;
  padding-left: 5px;
}
.container {
  flex-direction: row;
}
.more-ideas-button {
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  opacity: 0.6;
  color: white;
  width: 150px;
  height: 40px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1.5px;
}

@media screen and (min-width: 768px) {
  .idea-logo {
    width: 50px;
    height: 50px;
  }
  .idea-container:hover {
    background-color: #efefef;
  }
  .idea-description {
    padding: 10px 30px 20px;
  }
  .idea-box-subtitle {
    font-size: 18px;
  }
  .idea-box-container {
    width: 700px;
    margin: auto;
    font-size: 18px;
  }
  .chevron {
    display: none;
  }
}
</style>
