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
      <div class="idea-box-filter">
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-narrow">
            <div class="mb-xs">Je suis</div>
            <nv-select
              v-model="tags.person"
              :options="filter.personOptions"
              small
            />
          </div>
          <div class="column is-narrow">
            <div class="mb-xs">J'ai</div>
            <nv-select
              v-model="tags.time"
              :options="filter.timeOptions"
              small
            />
          </div>
          <div class="column is-narrow">
            <div class="mb-xs">J'ai besoin de</div>
            <nv-select
              v-model="tags.need"
              :options="filter.needsOptions"
              small
            />
          </div>
        </div>
      </div>
      <card
        v-for="idea of ideasArray"
        :key="idea.id"
        path="idee"
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
  MAIN_TAG_TRAINING,
  DAILY_CHALLENGE,
  AIDE,
  CONTACT,
  ACTIVITE,
  TRAINING,
  CITIZEN,
  RELATIVE,
  HEALTH_CARE_PROVIDER,
  FEW_MINUTES,
  HALF_DAY,
  ALL_MY_TIME,
  ONE_HOUR,
  TAG_FEW_MINUTES,
  TAG_HALF_DAY,
  TAG_ALL_MY_TIME,
  TAG_ONE_HOUR,
  TAG_CITIZEN,
  TAG_RELATIVE,
  TAG_HEALTH_CARE_PROVIDER
} from '~/helpers/constants'
import NvSelect from '~/components/form/Select'

export default {
  name: 'IdeaBox',
  components: {
    Card,
    NvSelect
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
      tags: { person: '', time: '', need: '' },
      filter: {
        personOptions: [
          { label: CITIZEN, value: TAG_CITIZEN },
          { label: RELATIVE, value: TAG_RELATIVE },
          { label: HEALTH_CARE_PROVIDER, value: TAG_HEALTH_CARE_PROVIDER }
        ],
        timeOptions: [
          { label: FEW_MINUTES, value: TAG_FEW_MINUTES },
          { label: ONE_HOUR, value: TAG_ONE_HOUR },
          { label: HALF_DAY, value: TAG_HALF_DAY },
          { label: ALL_MY_TIME, value: TAG_ALL_MY_TIME }
        ],
        needsOptions: [
          { label: TRAINING, value: MAIN_TAG_TRAINING },
          { label: ACTIVITE, value: MAIN_TAG_ACTIVITE },
          { label: AIDE, value: MAIN_TAG_AIDE },
          { label: CONTACT, value: MAIN_TAG_CONTACT }
        ]
      },
      timeTagsFilter: {
        [TAG_FEW_MINUTES]: [TAG_FEW_MINUTES],
        [TAG_ONE_HOUR]: [TAG_FEW_MINUTES, TAG_ONE_HOUR],
        [TAG_HALF_DAY]: [TAG_FEW_MINUTES, TAG_ONE_HOUR, TAG_HALF_DAY],
        [TAG_ALL_MY_TIME]: [
          TAG_FEW_MINUTES,
          TAG_ONE_HOUR,
          TAG_HALF_DAY,
          TAG_ALL_MY_TIME
        ]
      }
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
      if (this.filterTagsArray.every((tag) => !tag)) return this.ideas
      return this.ideas.filter((idea) => {
        return this.filterTagsArray.every((tag) => {
          return idea.tags.some((ideaTag) => {
            return tag.startsWith('time-')
              ? this.timeTagsFilter[tag].includes(ideaTag.slug)
              : ideaTag.slug === tag
          })
        })
      })
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
