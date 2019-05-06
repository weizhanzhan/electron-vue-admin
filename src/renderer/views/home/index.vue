<template>
    <div class="home" ref="home" @click="contextmenu($event,'left')" @contextmenu="contextmenu($event,'right')">
        <ContextMenu ref="contextMenu"/>
        <div class="top"></div>
        <div class="content">
            <Desktop/>
        </div>
        <div class="bottom">
            <BottomBar/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import BottomBar from './components/bottom-bar'
import ContextMenu from '../../components/context_menu'
import Desktop  from './components/desktop'
export default {
    components:{BottomBar, ContextMenu, Desktop},
    data () {
        return {
        }
    },
    methods:{
        contextmenu(e,type){
            let screenX = document.body.clientWidth-e.clientX
            let screenY = document.body.clientHeight-e.clientY
      
            let menu = this.$refs.contextMenu
            if(type=='right'){
           
                if(screenX<100&&screenY<190){
                    menu.open(document.body.clientWidth-100,e.clientY-90)
                }else if(screenX>100&&screenY<190){
                    menu.open(e.clientX,e.clientY-90)
                }else if(screenX<100&&screenY>190){
                    menu.open(document.body.clientWidth-100,e.clientY)
                }else{
                    menu.open(e.clientX,e.clientY)
                }
                
            }else{
                menu.close()
            }
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">
.home{
    color:#ffffff;
    height: 100vh;
    background: url('../../../../static/images/menu/bg3.jpg') no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    .content{   
        flex: 1;
    }
    .bottom{
     
        flex: 0 0 54px
    }
}
</style>
