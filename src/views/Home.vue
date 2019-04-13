<template>
  <div class="home">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "@/components/ProductListOne.vue";
import ProductListTwo from "@/components/ProductListTwo.vue";

export default {
  name: "home",
  data() {
    return {
    }
  },

  components: {
    
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo

  }
};
</script>
