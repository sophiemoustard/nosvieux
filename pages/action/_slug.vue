<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="nv-container">
    <div class="bloc">
      <ni-header />
      <div class="action-container">
        <div class="action-title mb-md">
          <h1 v-if="!loading">{{ action.title }}</h1>
        </div>
        <div v-if="!loading" class="dark-blue-text">{{ action.summary }}</div>
        <div v-if="showImage && !loading" class="content-container">
          <img
            v-if="!loading"
            class="action-img"
            :src="action.featured_image"
            :alt="action.featured_image_alt"
          />
          <div v-if="!loading" class="action-text" v-html="action.body" />
        </div>
        <div
          v-else-if="!loading"
          class="content-iframe-container"
          v-html="action.body"
        />
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
  data() {
    return {
      showImage: false,
      loading: false
    }
  },
  async mounted() {
    try {
      this.loading = true
      const action = await this.$butter.post.retrieve(this.$route.params.slug)
      this.action = action.data.data
      if (!/iframe/.test(this.action.body)) this.showImage = true
    } catch (e) {
      return { action: {} }
    } finally {
      this.loading = false
      this.showImage = false
    }
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
      width: 200px;
      height: 200px;
      float: left;
      margin-right: 20px;
    }
    &-container {
      width: 750px;
    }
  }
}
</style>
