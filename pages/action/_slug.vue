<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="nv-container">
    <div class="bloc">
      <ni-header />
      <div class="action-container">
        <div class="action-title mb-md">
          <h1>{{ action.title }}</h1>
        </div>
        <div class="dark-blue-text">{{ action.summary }}</div>
        <div v-if="showImage" class="content-container">
          <img
            class="action-img"
            :src="action.featured_image"
            :alt="action.featured_image_alt"
          />
          <div class="action-text" v-html="action.body" />
        </div>
        <div v-else class="content-iframe-container" v-html="action.body" />
      </div>
    </div>
    <ni-footer />
  </div>
</template>

<script>
import NiHeader from '~/components/Header'
import NiFooter from '~/components/Footer'

export default {
  name: 'ActionProfile',
  components: {
    NiHeader,
    NiFooter
  },
  async asyncData({ app, params }) {
    try {
      const action = await app.$butter.post.retrieve(params.slug)
      return { action: action.data.data }
    } catch (e) {
      return { action: {} }
    }
  },
  data() {
    return {
      showImage: false
    }
  },
  mounted() {
    if (!/iframe/.test(this.action.body)) this.showImage = true
  }
}
</script>

<style lang="scss" scoped>
.content {
  &-container {
    margin-top: 30px;
  }
  &-iframe-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.action {
  &-img {
    width: --webkit-fill-available;
    border: solid 2px $dark-blue;
  }
  &-container {
    box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
    margin: auto;
    padding: 20px;
    font-size: 18px;
  }
  &-title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (min-width: 768px) {
  .action {
    &-img {
      width: 150px;
      height: 150px;
      float: left;
      margin-right: 20px;
    }
    &-container {
      width: 750px;
    }
  }
}
</style>
