<template>
    <div 
        class="context-menu" 
        v-if="show"
        :style="[posisiton]"
        @click="can"
        >
        <ul class="menu-list">
            <li class="item">刷新</li>
            <li class="item">新建</li>
            <li class="item">设置</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'contextName',
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
        setOption(x,y){
            this.posisiton.top = y+'px'
            this.posisiton.left = x+'px'
        },
        can(e){
            console.log(123)
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
    background:rgba(255, 255, 255, 0.2);
    position: absolute;
   
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
            background: rgba(255, 255, 255, 0.1)
        }
    }
}
</style>
