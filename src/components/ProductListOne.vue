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
//Mapping Actions & Getters
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        //Use VueX
        products() {
            
            return this.$store.state.products;

        },

        //To make the spreader work install babel preset
        //npm install babel-preset-stage-2 --save-dev
        
        ...mapGetters([
            "saleProducts",
            // "anotherone",
            // "anotheranotherone"
        ])
    },
    methods: {
        ...mapActions([
            'reducePrice',
            // "Anotherone",
            // "anotherone"
        ])
    }
}
</script>

<style>

</style>
