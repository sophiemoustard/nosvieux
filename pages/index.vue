<template>
  <div class="container">
    <nos-vieux />
    <act />
    <idea-box :ideas="ideas" />
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
    const posts = await app.butter.post.list()
    const ideas = posts.data.data.filter((id) =>
      id.categories.some((cat) => cat.slug === 'boite-a-idee')
    )
    return {
      ideas: ideas.sort((a, b) => new Date(a.published) - new Date(b.published))
    }
  }
}
</script>

<style></style>
