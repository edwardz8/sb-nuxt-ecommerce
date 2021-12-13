<script>
import { getProductById } from '../plugins/graphql-bigcommerce'

export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      error: null 
    }
  },
  computed: {
    strippedContent() {
      const regex = /(<([^>]+)>)/gi 
    }
  },
  async mounted() {
    try {
      const res = await getProductById(this.blok.product.items[0].id)
      if (res) {
        this.product = res.site.product
      }
    } catch (error) {
      this.error = error 
    }
  }
};
</script>

<template>
  <div v-if="product" v-editable="blok" class="py-2 text-center">
    <img class="mx-auto w-32" :src="product.defaultImage.img1280px" />
    <h1 class="text-lg">{{ product.name }}</h1>
    <p class="text-gray-600">
      {{ blok.headline }}
    </p>
  </div>
</template>
