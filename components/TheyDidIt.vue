<template>
  <div>
    <nuxt-link :to="{ path: '/', hash: CAT_BOITE_A_IDEE }">
      <div :id="CAT_BOITE_A_IDEE" class="section-header mb-sm">
        <div class="blue-background section-title">Ils l'ont fait</div>
      </div>
    </nuxt-link>
    <div class="section-container">
      <div v-for="action of actions" :key="action.id" class="action">
        <nuxt-link :to="`action/${action.slug}`" class="action-container">
          <img class="action-logo" :src="action.featured_image" />
          <div class="black-text action-title">{{ action.title }}</div>
          <img src="~/assets/chevron_right.png" class="chevron" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { CAT_BOITE_A_IDEE } from '~/helpers/constants'

export default {
  name: 'TheyDidIt',
  props: {
    actions: { type: Array, default: () => [] }
  },
  data() {
    return { CAT_BOITE_A_IDEE }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &-container {
    padding: 20px 0;
  }
}
.action {
  &-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 5px 12px 0 rgb(217, 226, 233);
    padding: 20px;
  }
  &-logo {
    width: 70px;
    height: 70px;
    margin-right: 15px;
  }
}

@media screen and (min-width: 768px) {
  .section {
    &-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .action {
    width: 200px;
    margin: 10px;
    &-container {
      flex-direction: column;
      padding: 0;
      &:hover {
        background-color: #efefef;
      }
    }
    &-logo {
      width: 200px;
      height: 200px;
      margin-right: 0;
    }
    &-title {
      padding: 10px;
      text-align: center;
    }
  }
}
</style>
