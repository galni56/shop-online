<template>
    <div class="s-main-wrapper bg-primary">
        <sCatalog/>
    </div>
</template>

<script>

import sCatalog from './s-catalog-products';

export default ({
    name:"s-main-wrapper",
    components: {
        sCatalog
    }
})
</script>

<style scoped>
    .s-main-wrapper {
        height: 100vh;
    }
</style>>