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
  asyncData() {
    return butter.category.list().then((res) => {
      return {
        categories: res.data.data
      }
    })
  }
}
</script>

<style></style>
