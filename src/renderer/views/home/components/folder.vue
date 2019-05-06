<template>
    <div 
        class="folder" 
        draggable="true" 
        @dragstart="dragstart" 
        @drag="drage" 
        @dragend="dragend"
        :style="[{top,left}]"          
        >
            <div>{{label}}</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            top:0,
            left:0,
            label:'new Folder'
        }
    },
    methods:{
        dragstart(e){
            console.log('start')
        },
        drage(e){
        
        },
        dragend(e){
             console.log('img',e.clientX,e.clientY)
            this.left = e.clientX-50+'px'
            this.top = e.clientY-50+'px'
        }
    }
}
</script>

<style lang="scss" scoped>
 .folder{
    height: 100px;
    width:100px;
    display: inline-block;
    background: #eeeeee;
    position: absolute
 }
</style>
