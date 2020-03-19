<template>
  <div class="nv-container">
    <nos-vieux />
    <act />
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
import { CAT_BOITE_A_IDEE } from '~/helpers/constants'

export default {
  name: 'Index',
  components: {
    Act,
    NiFooter,
    NosVieux,
    Social,
    IdeaBox
  },
  async asyncData({ app }) {
    const ideas = await app.$butter.post.list({
      category_slug: CAT_BOITE_A_IDEE
    })
    return {
      ideas: ideas.data.data
        .sort((a, b) => new Date(a.published) - new Date(b.published))
        .slice(0, 6)
    }
  },
  methods: {
    async getAllIdeas() {
      const ideas = await this.$butter.post.list({
        category_slug: CAT_BOITE_A_IDEE
      })
      this.ideas = ideas.data.data.sort(
        (a, b) => new Date(a.published) - new Date(b.published)
      )
    }
  }
}
</script>

<style></style>
