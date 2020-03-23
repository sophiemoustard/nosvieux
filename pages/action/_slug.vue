<template>
  <div class="nv-container">
    <div class="bloc">
      <ni-header />
      <div class="main_container"></div>
      <div class="action-container">
        <div class="action-content">
          <div class="action-title mb-md">
            <h1>{{ action.title }}</h1>
          </div>
          <div class="dark-blue-text">{{ action.summary }}</div>
          <div class="content-container">
            <img
              class="action-img"
              :src="action.featured_image"
              :alt="action.featured_image_alt"
            />
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="action-text" v-html="action.body" />
          </div>
        </div>
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
    const action = await app.$butter.post.retrieve(params.slug)
    return { action: action.data.data }
  }
}
</script>

<style lang="scss" scoped>
.main_container {
  display: flex;
  flex-direction: column;
}
.content-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.action-text {
  display: flex;
  align-items: center;
}
.action {
  &-img {
    width: --webkit-fill-available;
    border: solid 2px $dark-blue;
  }
  &-img-container {
    display: flex;
    justify-content: center;
  }
  &-container {
    box-shadow: 0 5px 12px 0 rgba(217, 226, 233, 0.5);
  }
  &-title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-content {
    padding: 20px;
    font-size: 18px;
  }
}

@media screen and (min-width: 768px) {
  .content-container {
    flex-direction: row;
  }
  .action-img {
    width: 300px;
    height: 300px;
    margin-right: 20px;
  }
}
</style>
