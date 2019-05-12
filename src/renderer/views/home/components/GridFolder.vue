<template>
    <div class="grid-container">
        <transition-group 
            tag="div" 
            class="grid"
            ref="grid"
            :style="[gridColumn]"
        >
            <div 
                v-for="item in layout" 
                :class="[
                    'item',
                    item.empty?'empty-folder':'is-folder',
                    dragging&&item.key == dragging.key?'drag-self':''
                ]"          
                :key="item.key"  
                draggable="true" 
                @dragstart="dragstart($event,item)" 
                @drag="drage($event,item)"
                @dragend="dragend($event,item)" 
                @dragenter="onDragenter($event,item)"
                @contextmenu="contextmenu($event,item)"
            >
                {{item.label}}
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props:{
            items:Array
        },
        data() {
            return {
                layout:[],
                dragging: null,
                enterDragging: null,
                gridColumn:{
                    gridTemplateColumns:'',
                    gridTemplateRows: ''
                }
            }
        },
        mounted(){
            this.init()
        },
        methods: {
            init(){
                this.handleGridColumn()
                this.handleFolder()
            },
            handleFolder(){//把有的实例 渲染到模板中
                this.items.forEach(item=>{
                    let lay = this.findItem(item.key).item
                    lay.label = item.label
                    lay.empty = item.empty
                })
            },
            handleGridColumn(){
                let grid ,height ,width ,cols ,rows
                this.layout = []
                grid = this.$refs.grid.$el
                height = grid.clientHeight
                width = grid.clientWidth
                cols = parseInt(width/100)
                rows = parseInt(height/100)
                for(var i=0;i<rows*cols;i++){
                    this.layout.push({
                        key:i,
                        label:'',
                        empty:true
                    })
                }
                this.gridColumn.gridTemplateColumns=`repeat(${cols}, 100px)`
                this.gridColumn.gridTemplateRows=`repeat(${rows}, 100px)`
            },
            dragstart(e, item) {
                this.dragging = item
            },
            drage(e) {

            },
            dragend(e, item) {
                if(this.dragging.empty)
                    return
                let newItems = [...this.layout]
                let start = this.findItem(this.dragging.key)
                let end = this.findItem(this.enterDragging.key)

                newItems[start.index] = end.item
                newItems[end.index] = start.item
                this.$emit('exchange',start,end)
                this.layout = [...newItems]
                this.dragging = null
            },
            onDragenter(e, item) {
                this.enterDragging = item
            },
           
            findItem(key) {
                let index;
                index = this.layout.findIndex(item => {
                    return item.key == key
                })
                return {
                    index,
                    item: this.layout[index]
                }
            },
            contextmenu(e,item){
                this.$emit('contextmenu',item)
                if(item.empty)
                    return
                e.preventDefault()
                e.cancelBubble = true;
              
            }
        }
    }
</script>

<style scoped>
    .grid-container{
        height: 100%;
    }
    .grid {
        display: grid;
        
        position: relative;
        height: 100%;
    }
    .item {
        height: 90px;
        width: 90px;
        margin: auto;
        margin: 5px;
        color: #ffffff;
        transition: all 0.05s
    }
    .empty-folder{

    }
    .is-folder{
        background: rgba(255, 255, 255, 0.2)
    }
    .drag-self{
        opacity: 0.8;
    }
</style>