<template>
    <div class="home" ref="home" >
        <ContextMenu 
            ref="contextMenu"
            :lists="lists"
            @operation="operation"
        />
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
import BottomBar from './components/BottomBar'
import ContextMenu from '../../components/context_menu'
import Desktop  from './components/Desktop'
export default {
    components:{BottomBar, ContextMenu, Desktop},
    provide(){
        return {
            _sup:this
        }
    },
    data () {
        return {
            lists:[
                {  key:1 ,label:'新建',type:'add'},
                {  key:2 ,label:'刷新',type:'refresh'},
                {  key:3 ,label:'设置',type:'set'},
            ]
        }
    },
    methods:{
        contextmenu(e,type){
            let screenX = document.body.clientWidth-e.clientX
            let screenY = document.body.clientHeight-e.clientY
            if(type=='right'){
                if(screenX<100&&screenY<190){
                    this.Menu.open(document.body.clientWidth-100,e.clientY-90)
                }else if(screenX>100&&screenY<190){
                    this.Menu.open(e.clientX,e.clientY-90)
                }else if(screenX<100&&screenY>190){
                    this.Menu.open(document.body.clientWidth-100,e.clientY)
                }else{
                    this.Menu.open(e.clientX,e.clientY)
                }
                
            }else{
                this.Menu.close()
            }
        },
        operation(item){

            switch (item.type) {
                case 'add':     
                    this.$store.dispatch('addFolder')
                    break;
                case 'refresh':
                        
                        break;
                case 'set':
                        
                        break;
                
                default:
                    break;
            }
            this.Menu.close()
        }
    },
    computed:{
        Menu(){
            return this.$refs.contextMenu
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
