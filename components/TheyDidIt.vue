<template>
  <div>
    <nuxt-link :to="{ path: '/', hash: CAT_ILS_LONT_FAIT }">
      <div :id="CAT_ILS_LONT_FAIT" class="section-header mb-sm">
        <div class="blue-background section-title">Ils l'ont fait</div>
      </div>
    </nuxt-link>
    <div class="section-container">
      <card
        v-for="action of actions"
        :key="action.id"
        path="action"
        :content="action"
        class="action"
      />
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import { CAT_ILS_LONT_FAIT } from '~/helpers/constants'

export default {
  name: 'TheyDidIt',
  components: {
    Card
  },
  props: {
    actions: { type: Array, default: () => [] }
  },
  data() {
    return { CAT_ILS_LONT_FAIT }
  }
}
</script>
