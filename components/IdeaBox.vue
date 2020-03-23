<template>
  <div>
    <nuxt-link :to="{ path: '/', hash: CAT_BOITE_A_IDEE }">
      <div :id="CAT_BOITE_A_IDEE" class="section-header mb-sm">
        <div class="dark-blue-background section-title">La boîte à idées</div>
      </div>
    </nuxt-link>
    <div class="section-container">
      <div class="section-subtitle">
        Tu veux agir mais ne sais pas encore comment ? Cette boite à idées est
        faite pour toi ! N'oublie pas de bien respecter les consignes en
        vigueur.
      </div>
      <card
        v-for="idea of ideasArray"
        :key="idea.id"
        path="idea/"
        :tag="getMainTag(idea)"
        :content="idea"
      />
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
  </div>
</template>

<script>
import Card from '~/components/Card'
import {
  MAIN_TAG_AIDE,
  MAIN_TAG_CONTACT,
  MAIN_TAG_ACTIVITE,
  CAT_BOITE_A_IDEE,
  DAILY_CHALLENGE
} from '~/helpers/constants'

export default {
  name: 'IdeaBox',
  components: {
    Card
  },
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
.nv-container {
  padding-top: 15px;
  flex-direction: row;
}
</style>
