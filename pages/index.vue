<template>
  <div class="nv-container">
    <nos-vieux />
    <act :daily-challenge="dailyChallenge" />
    <they-did-it :actions="actions" />
    <idea-box :ideas="ideas" @allIdeas="getAllIdeas()" />
    <social />
    <ni-footer />
  </div>
</template>

<script>
import Act from '~/components/Act'
import NiFooter from '~/components/Footer'
import NosVieux from '~/components/NosVieux'
import Social from '~/components/Social'
import IdeaBox from '~/components/IdeaBox'
import { CAT_BOITE_A_IDEE, DAILY_CHALLENGE } from '~/helpers/constants'
import TheyDidIt from '~/components/TheyDidIt'

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
  async asyncData({ app }) {
    const ideas = await app.$butter.post.list({
      category_slug: CAT_BOITE_A_IDEE,
      page_size: 30
    })
    const actions = await app.$butter.post.list({
      category_slug: 'test-ils-lont-fait'
    })
    return {
      ideas: ideas.data.data
        .sort((a, b) => {
          if (a.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return -1
          if (b.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return 1
          return new Date(a.published) - new Date(b.published)
        })
        .slice(0, 6),
      dailyChallenge: ideas.data.data.find((el) =>
        el.tags.some((tag) => {
          return tag.slug === DAILY_CHALLENGE
        })
      ),
      actions: [
        ...actions.data.data,
        ...actions.data.data,
        ...actions.data.data,
        ...actions.data.data,
        ...actions.data.data
      ]
    }
  },
  methods: {
    async getAllIdeas() {
      const ideas = await this.$butter.post.list({
        category_slug: CAT_BOITE_A_IDEE,
        page_size: 30
      })
      this.ideas = ideas.data.data.sort((a, b) => {
        if (a.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return -1
        if (b.tags.some((tag) => tag.slug === DAILY_CHALLENGE)) return 1
        return new Date(a.published) - new Date(b.published)
      })
    }
  }
}
</script>
