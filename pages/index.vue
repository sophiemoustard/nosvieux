<template>
  <div class="container">
    <nos-vieux />
    <act />
    <social />
    <ni-footer />
  </div>
</template>

<script>
import { butter } from '../buttercms'
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
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      butter.category
        .retrieve('test', { include: 'recent_posts' })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data)
          this.posts = res.data.data
        })
    }
  }
}
</script>

<style></style>
