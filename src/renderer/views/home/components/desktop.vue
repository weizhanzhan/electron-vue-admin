<template>
    <div class="desktop">
        <Folder/>
    </div>
</template>

<script>
import Folder from './folder'
export default {
    components:{ Folder }
}
</script>

<style lang="scss" scoped>
.desktop{
    height: 100%;
    width: 100%;
    position: relative;
}
</style>

