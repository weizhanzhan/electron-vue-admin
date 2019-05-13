<template>
    <div 
        class="desktop" 
        @click="contextmenu($event,'left')" 
        @contextmenu="desktopContextMenu($event,'right')">
        <GridFoler 
            ref="grid"
            :items="items"
            @contextmenu="contextmenu"
            @exchange="exchange"
        />
        <ContextMenu 
            ref="contextMenu"
            :lists="lists"
            @operation="operation"
        />
    </div>
</template>

<script>
import ContextMenu from '../../../components/context_menu'
import GridFoler from './GridFolder'
import { mapGetters } from 'vuex'
export default {
    inject:['_sup'],
    components:{     
        GridFoler, ContextMenu
     },
     data () {
         return {
            lists:[
                {  key:1 ,label:'新建',type:'add'},
                {  key:2 ,label:'刷新',type:'refresh'},
                {  key:3 ,label:'设置',type:'set'},
            ],
            newFolder:null
         }
     },
     watch:{
        items:{
            handler(val){
                
                this.$refs.grid.init()
            },
            deep:true
        }
     },
     methods:{
        contextmenu(item){
           
            if(!item.empty) // empty为true 就是点击的文件
                this.Menu.close()
            else{ //点击空的格子
                 this.newFolder = {...item}
            }
        },
         operation(item){

            switch (item.type) {
                case 'add':     
                    this.$store.dispatch('addFolder',this.newFolder)
                    break;
                case 'refresh':
                        
                        break;
                case 'set':
                        
                        break;
                
                default:
                    break;
            }
            this.Menu.close()
        },
         desktopContextMenu(e,type){
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
        exchange(start,end){
          
            this.$store.dispatch('refreshFolder',{
                start,end
            })
        }
     },
     mounted(){
         console.log(this.items)
     },
     computed:{
         ...mapGetters({
             items:'Folders'
         }),
          Menu(){
            return this.$refs.contextMenu
        }
     }
}
</script>

<style lang="scss" scoped>
.desktop{
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.vue-grid-item{
    background: red
}
</style>

