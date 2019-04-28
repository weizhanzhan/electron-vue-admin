<template>
    <div class="home" ref="home" @click.self="test($event,'left')" @contextmenu="test($event,'right')">
        <ContextMenu ref="contextMenu"/>
       <div class="bottom">
           <BottomBar/>
       </div>
    </div>
</template>

<script>
import Vue from 'vue'
import BottomBar from './components/bottom-bar'
import ContextMenu from '../../components/context_menu'
export default {
    components:{BottomBar, ContextMenu},
    data () {
        return {
        }
    },
    methods:{
        test(e,type){
            let menu = this.$refs.contextMenu
            console.log('test',e)
            if(type=='right'){
                menu.open(e.clientX,e.clientY)
            }else{
                menu.close()
            }
        }
    },
    mounted(){
        // let home = this.$refs.home
        // home.onmousedown = e =>{
        //     e.preventDefault()
        //     let mouseKey = e.button
        //     let menu = this.$refs.contextMenu
        //     switch(mouseKey){
        //         case 0:
        //             console.log('左键')
        //             menu.close()
        //             break;
        //         case 1:
        //             console.log('滚轮')
        //             menu.close()
        //             break;
        //         case 2:
        //             console.log('右键')
        //             menu.open(e.clientX,e.clientY)
        //             break;
        //         default:

        //     }
       // }
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

}
</style>
