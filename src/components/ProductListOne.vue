<template>
    <div class="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="(product, index) in saleProducts" :key="index">
                <span class="name"> {{ product.name }} </span>
                <span class="price"> {{ product.price }} </span>
            </li>
        </ul>
        <button @click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>
export default {
    computed: {
        //Use VueX
        products() {
            return this.$store.state.products;
        },
        
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice() {
            // Commiting a mutation

            this.$store.commit('reducePrice');
        }
    }
}
</script>

<style>

</style>
