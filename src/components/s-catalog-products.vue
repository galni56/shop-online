<template>
    <div class="product-box">
        <sItemModal/>

        <sCardItem
            v-for="product in this.$store.state.products"
            :key="product.store"
            v-bind:product_data="product"
        />
    </div>           
</template> 

<script>
import { mapActions } from 'vuex';
import sCardItem from './s-catalog-item';

export default ({
    name:"s-catalog-products",
    components: {
        sCardItem,
    },
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions([
           'GET_PRODUCTS_FROM_API' 
        ])
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API
    }
})

</script>

<style scoped>
    .product-box {
        display: flex;
        flex-wrap: wrap;
    
        width: 100%;
        max-width: 1280px;   
    
        padding: 20px 0 0;
    }
</style>>