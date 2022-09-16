<template>
    <div class="c-card-item product-card">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Product: {{product_data.name}}</h5>
                <p class="card-text">Company: {{ product_data.company }}</p>
                <p class="card-text">Store: {{ product_data.store }}</p>
                <p class="card-text">Delivery Date: {{ product_data.deliveryDate }}</p>
                <p class="card-text">Created Date: {{ product_data.createdDate }}</p>

                <a href=# class="btn" @click="editData(product_data)">Edit</a>
            </div>
        </div>
    </div> 
</template>
<script>
    
export default ({
    name: "c-card-item",
    methods:{
        editData() {

        }
    },
    
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }


})

</script>

<style scoped>
    .product-card {
        flex: 1 1 auto;
        max-width: 300px;
        width: 100%;

        margin: 0 10px 20px;
    }
</style>