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
      <idea-filter v-model="tags" :filters="filters" />
      <card
        v-for="idea of ideasArray"
        :key="idea.id"
        path="idee"
        :tag="getMainTag(idea)"
        :content="idea"
      />
      <template v-if="ideasArray.length >= 6">
        <div v-if="!showAll" class="nv-container">
          <button class="button is-dark-blue is-normal" @click="showAll = true">
            Voir plus d'idées
          </button>
        </div>
        <div v-else class="nv-container">
          <button class="button is-dark-blue" @click="showAll = false">
            Voir moins d'idées
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import {
  MAIN_TAG_AIDE,
  MAIN_TAG_CONTACT,
  MAIN_TAG_ACTIVITE,
  MAIN_TAG_TRAINING,
  DAILY_CHALLENGE,
  CAT_BOITE_A_IDEE,
  personFilterOptions,
  timeFilterOptions,
  needFilterOptions,
  timeTagsFilter
} from '~/helpers/constants'
import IdeaFilter from '~/components/IdeaFilter'

export default {
  name: 'IdeaBox',
  components: {
    Card,
    IdeaFilter
  },
  props: {
    ideas: { type: Array, default: () => [] }
  },
  data() {
    const tagColors = {
      [MAIN_TAG_AIDE]: 'green-background',
      [MAIN_TAG_CONTACT]: 'blue-background',
      [MAIN_TAG_ACTIVITE]: 'green-blue-background',
      [MAIN_TAG_TRAINING]: 'dark-blue-background',
      [DAILY_CHALLENGE]: 'social-network-color-background'
    }
    return {
      CAT_BOITE_A_IDEE,
      showAll: false,
      tagColors,
      defaultMainTag: {
        name: 'Garder contact',
        color: tagColors[MAIN_TAG_CONTACT]
      },
      tags: {}
    }
  },
  computed: {
    ideasArray() {
      return this.showAll ? this.filteredIdeas : this.filteredIdeas.slice(0, 6)
    },
    filterTagsArray() {
      return Object.values(this.tags).filter((tag) => !!tag)
    },
    filteredIdeas() {
      if (!this.filterTagsArray.length) return this.ideas
      return this.ideas.filter(this.filterIdeas)
    },
    filters() {
      return [
        {
          label: 'Je suis',
          name: 'person',
          options: personFilterOptions
        },
        {
          label: "J'ai",
          name: 'time',
          options: timeFilterOptions
        },
        {
          label: "J'ai besoin de",
          name: 'need',
          options: needFilterOptions
        }
      ]
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
    matchingTags(filterTag) {
      return (ideaTag) => {
        return filterTag.startsWith('time-')
          ? timeTagsFilter[filterTag].includes(ideaTag.slug)
          : ideaTag.slug === filterTag
      }
    },
    filterIdeas(idea) {
      return this.filterTagsArray.every((tag) => {
        return idea.tags.some(this.matchingTags(tag))
      })
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
