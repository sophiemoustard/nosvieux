<template>
  <div class="container">
    <nos-vieux />
    <act />
    <social />
    <ni-footer />
  </div>
</template>

<script>
import Act from '~/components/Act'
import NiFooter from '~/components/Footer'
import NosVieux from '~/components/NosVieux'
import Social from '~/components/Social'

export default {
  name: 'Index',
  components: {
    Act,
    NiFooter,
    NosVieux,
    Social
  },
  async asyncData({ app }) {
    const posts = await app.butter.post.list()
    return { posts: posts.data.data }
  }
}
</script>

<style></style>
