<template>
    <div class="product-box">
        <sCardItem/>
        <sCardItem/>        
        <sCardItem/>        
        <sCardItem/>        
        <sCardItem/> 
    </div>           
</template>

<script>
import sCardItem from './s-catalog-item';

export default ({
    name:"s-main-wrapper",
    components: {
        sCardItem
    }
})

</script>