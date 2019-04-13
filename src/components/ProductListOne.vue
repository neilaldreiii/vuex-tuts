<template>
    <div class="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="(product, index) in products" :key="index">
                <span class="name"> {{ product.name }} </span>
                <span class="price"> {{ product.price }} </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products']
}
</script>

<style>

</style>
