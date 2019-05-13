<template>
    <div 
        class="context-menu" 
        v-if="show"
        :style="[posisiton]"
        @click="context"
        @contextmenu="context"
        >
        <ul class="menu-list">
            <template v-for="list in lists">
                 <li 
                    class="item" 
                    @click="Do($event,list)"
                    :key="list.key"
                    
                >{{list.label}}</li>
            </template>
           
        </ul>
    </div>
</template>

<script>
export default {
    name:'contextName',
    props:{
        lists:Array
    },
    data () {
        return {
            show:false,
            posisiton:{
                top:'',
                left:''
            }
        }
    },
    methods:{
        open(x,y){
            this.setOption(x,y)
            this.show = true
            
        },
        close(){
            this.show = false
        },
        Do(e,item){
            e.preventDefault()
            e.cancelBubble = true;
            this.$emit('operation',item)
            //this.close()
        },
        setOption(x,y){
            this.posisiton.top = y+'px'
            this.posisiton.left = x+'px'
        },
        context(e){
            e.preventDefault()
            e.cancelBubble = true;
        }
    }
}
//另一种实现方式
// let menu =Vue.extend(ContextMenu)
// let menuTemplate = new menu().$mount()
// let dom = menuTemplate.$el

// let bodyChildren =document.body.childNodes
// let bool =false
// let childNode = null
// for(var i = 0 ;i<bodyChildren.length;i++){
//     if(bodyChildren[i].classList.contains('context-menu')){
//         bool = true;
//         childNode = bodyChildren[i]
//         break;
//     }       
// }
// if(bool)
//     document.body.removeChild(childNode)
// console.log(document.body.childNodes)

// dom.style.position = 'fixed'
// dom.style.top = y +'px'
// dom.style.left = x +'px'
// document.body.append(dom)

// // setTimeout(()=>{
// //     document.body.removeChild(dom)
// // },2000)
// console.log(dom.style)
</script>

<style lang="scss" scoped>
.context-menu{
    background:rgba(255, 255, 255, 0.9);
    color: black;
    font-family: sans-serif;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2pt 6pt;
    z-index: 1;
    border-radius: 4px;
    .menu-list{
        list-style: none;
        margin: 0;
        padding: 0;
        .item{
            padding: 5px 0 5px 15px;
            width: 100px;
        }
        .item:hover{
            background-color: rgba(127, 127, 127, 0.75);
            color: rgb(255, 255, 255);
        }
    }
}
</style>
