<template>
  <div>
    <nuxt-link :to="{ path: '/', hash: CAT_BOITE_A_IDEE }">
      <div :id="CAT_BOITE_A_IDEE" class="idea-box-header mb-sm">
        <div class="dark-blue-background idea-box-title">La boîte à idées</div>
      </div>
    </nuxt-link>
    <div class="idea-box-container">
      <div class="idea-box-subtitle">
        Tu veux agir mais ne sais pas encore comment ? Cette boite à idées est
        faite pour toi ! N'oublie pas de bien respecter les consignes en
        vigueur.
      </div>
      <div v-for="idea of ideasArray" :key="idea.id">
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
    <div v-if="!showAll" class="nv-container">
      <button class="button is-dark-blue is-normal" @click="getAllIdeas()">
        Voir plus d'idées
      </button>
    </div>
    <div v-else class="nv-container">
      <button class="button is-dark-blue" @click="getSomeIdeas()">
        Voir moins d'idées
      </button>
    </div>
  </div>
</template>

<script>
import {
  MAIN_TAG_AIDE,
  MAIN_TAG_CONTACT,
  MAIN_TAG_ACTIVITE,
  CAT_BOITE_A_IDEE,
  DAILY_CHALLENGE
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
      [MAIN_TAG_ACTIVITE]: 'green-blue-background',
      [DAILY_CHALLENGE]: 'social-network-color-background'
    }
    return {
      showAll: false,
      tagColors,
      defaultMainTag: {
        name: 'Garder contact',
        color: tagColors[MAIN_TAG_CONTACT]
      },
      CAT_BOITE_A_IDEE
    }
  },
  computed: {
    ideasArray() {
      return this.showAll ? this.ideas : this.ideas.slice(0, 6)
    }
  },
  methods: {
    getMainTag(idea) {
      if (!idea.tags || idea.tags.length === 0) return this.defaultMainTag

      const dailyChallengeTag = idea.tags.find(
        (tag) => tag.slug === DAILY_CHALLENGE
      )
      if (dailyChallengeTag) {
        return {
          name: dailyChallengeTag.name,
          color: this.tagColors[DAILY_CHALLENGE]
        }
      }
      const mainTag = idea.tags.find((tag) => tag.slug.startsWith('main-'))
      if (!mainTag) return this.defaultMainTag

      return {
        ...mainTag,
        color: this.tagColors[mainTag.slug] || 'dark-blue-background'
      }
    },
    getAllIdeas() {
      this.showAll = true
      this.$emit('allIdeas')
    },
    getSomeIdeas() {
      this.showAll = false
    }
  }
}
</script>

<style lang="scss" scoped>
a:-webkit-any-link {
  color: black;
}
.idea {
  &-box {
    &-header {
      text-align: center;
    }
    &-title {
      color: white;
      font-weight: bold;
      padding: 10px 0;
    }
    &-subtitle {
      padding: 20px 0;
      text-align: center;
      font-style: italic;
    }
  }
  &-tag {
    color: white;
    width: fit-content;
    padding: 2px 10px;
    font-size: 14px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 12px 0 rgb(217, 226, 233);
    margin: 10px 0 20px 0;
  }
  &-description {
    display: flex;
    align-items: center;
    padding: 10px 15px 20px 20px;
  }
  &-logo {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  &-summary {
    font-size: 14px;
  }
}
.chevron {
  width: 10px;
  height: 10px;
  padding-left: 5px;
}
.nv-container {
  padding-top: 15px;
  flex-direction: row;
}

@media screen and (min-width: 768px) {
  .idea {
    &-logo {
      width: 50px;
      height: 50px;
    }
    &-container:hover {
      background-color: #efefef;
    }
    &-description {
      padding: 10px 30px 20px;
    }
    &-box {
      &-subtitle {
        font-size: 18px;
      }
      &-container {
        width: 700px;
        margin: auto;
        font-size: 18px;
      }
    }
  }
  .chevron {
    display: none;
  }
}
</style>
