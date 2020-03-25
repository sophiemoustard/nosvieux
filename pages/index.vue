<template>
  <div class="nv-container">
    <nos-vieux />
    <act :daily-challenge="dailyChallenge" />
    <they-did-it v-if="actions.length" :actions="actions" />
    <social />
    <idea-box :ideas="ideas" />
    <ni-footer />
  </div>
</template>

<script>
import Act from '~/components/Act'
import NiFooter from '~/components/Footer'
import NosVieux from '~/components/NosVieux'
import Social from '~/components/Social'
import IdeaBox from '~/components/IdeaBox'
import TheyDidIt from '~/components/TheyDidIt'
import ButterCMS from '~/api/ButterCMS'
import {
  CAT_BOITE_A_IDEE,
  DAILY_CHALLENGE,
  CAT_ILS_LONT_FAIT
} from '~/helpers/constants'

export default {
  name: 'Index',
  components: {
    Act,
    NiFooter,
    NosVieux,
    Social,
    IdeaBox,
    TheyDidIt
  },
  data() {
    return {
      ideas: [],
      actions: [],
      dailyChallenge: {}
    }
  },
  async mounted() {
    await this.getAllIdeas()
  },
  methods: {
    async getAllIdeas() {
      try {
        const ideas = await ButterCMS.retrievePostsFromCategory(
          CAT_BOITE_A_IDEE
        )

        this.ideas = ideas.sort((a, b) => {
          if (a.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return -1
          if (b.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return 1
          return new Date(a.published) - new Date(b.published)
        })
        this.dailyChallenge = ideas.find((el) =>
          el.tags.some((tag) => tag.slug === DAILY_CHALLENGE)
        )

        this.actions = await ButterCMS.retrievePostsFromCategory(
          CAT_ILS_LONT_FAIT
        )
      } catch (e) {
        this.ideas = []
        this.actions = []
        this.dailyChallenge = {}
      }
    }
  }
}
</script>
