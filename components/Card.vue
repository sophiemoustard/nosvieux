<template>
  <nuxt-link :to="`idee/${content.slug}`" class="content-container">
    <div v-if="tag" class="content-tag" :class="tag.color">
      {{ tag.name }}
    </div>
    <div class="content-description">
      <img class="content-logo" :src="content.featured_image" />
      <div>
        <div>{{ content.title }}</div>
        <div class="content-summary grey-text">{{ content.summary }}</div>
      </div>
      <img src="~/assets/chevron_right.png" class="chevron" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    path: { type: String, default: '/' },
    tag: { type: Object, default: null },
    content: { type: Object, default: () => ({}) }
  }
}
</script>

<style lang="scss" scoped>
a:-webkit-any-link {
  color: black;
}
.content {
  &-tag {
    color: white;
    width: fit-content;
    padding: 2px 10px;
    font-size: 14px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 12px 0 rgb(217, 226, 233);
    margin: 10px 0 20px 0;
  }
  &-description {
    display: flex;
    align-items: center;
    padding: 10px 15px 20px 20px;
  }
  &-logo {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }
  &-summary {
    font-size: 14px;
  }
}
@media screen and (min-width: 768px) {
  .content {
    &-logo {
      width: 50px;
      height: 50px;
    }
    &-container:hover {
      background-color: #efefef;
    }
    &-description {
      padding: 10px 20px 20px;
    }
  }
}
.action {
  .content {
    &-logo {
      width: 100px;
      height: 100px;
    }
  }
}
@media screen and (max-width: 767px) {
  .action {
    .content {
      &-summary {
        display: none;
      }
    }
  }
}
</style>
