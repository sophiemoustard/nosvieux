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
        const ideas = await this.$butter.post.list({
          category_slug: CAT_BOITE_A_IDEE,
          page_size: 30
        })

        this.ideas = ideas.data.data.sort((a, b) => {
          if (a.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return -1
          if (b.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return 1
          return new Date(a.published) - new Date(b.published)
        })
        this.dailyChallenge = ideas.data.data.find((el) =>
          el.tags.some((tag) => tag.slug === DAILY_CHALLENGE)
        )

        this.actions = await this.$butter.post.list({
          category_slug: CAT_ILS_LONT_FAIT,
          page_size: 30
        })
      } catch (e) {
        this.ideas = []
        this.actions = []
        this.dailyChallenge = {}
      }
    }
  }
}
</script>
