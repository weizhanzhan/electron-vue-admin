<template>
    <div class="home">
       <div class="bottom">
           <BottomBar/>
       </div>
    </div>
</template>

<script>
import BottomBar from './components/bottom-bar'
export default {
    components:{BottomBar}
}
</script>

<style lang="scss">
.home{
    color:#ffffff;
    height: 100vh;
    background: url('../../../../static/images/menu/bg3.jpg') no-repeat;
    background-size: 100% 100%;
}
</style>
