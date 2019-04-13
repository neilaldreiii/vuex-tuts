<template>
    <div class="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="(product, index) in saleProducts" :key="index">
                <span class="name"> {{ product.name }} </span>
                <span class="price"> {{ product.price }} </span>
            </li>
        </ul>
        <button @click="reducePrice(4)">Reduce Price</button>
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
        reducePrice(amount) {
            // Commiting a mutation
            // this.$store.commit('reducePrice');

            //Dispatching actions
            //Instead of directly commiting a mutation
            // this.$store.dispatch("reducePrice");

            //Passing parameters into action
            this.$store.dispatch("reducePrice", amount);
        }
    }
}
</script>

<style>

</style>
