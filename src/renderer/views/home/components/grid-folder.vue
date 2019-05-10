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
            >
                {{item.label}}
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                layout:[],
                items: [
                    {
                        key: 1,
                        label: '1',
                        empty: false
                    },
                    {
                        key: 2,
                        label: '2',
                        empty: false
                    },
                    {
                        key: 3,
                        label: '3',
                        empty: false
                    },
                    // {
                    //     key: 4,
                    //     label: '4',
                    //     empty: false
                    // },
                    // {
                    //     key: 5,
                    //     label: '5',
                    //     empty: false
                    // },
                    // {
                    //     key: 6,
                    //     label: '6',
                    //     empty: false
                    // },
                    // {
                    //     key: 7,
                    //     label: '7',
                    //     empty: false
                    // },
                    // {
                    //     key: 8,
                    //     label: '',
                    //     empty: true
                    // },
                    // {
                    //     key: 9,
                    //     label: '',
                    //     empty: true
                    // },
                    // {
                    //     key: 10,
                    //     label: '',
                    //     empty: true
                    // },
                    // {
                    //     key: 11,
                    //     label: '',
                    //     empty: true
                    // },
                    // {
                    //     key: 12,
                    //     label: '',
                    //     empty: true
                    // },
                    // {
                    //     key: 13,
                    //     label: '',
                    //     empty: true
                    // },
                ],
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
            handleFolder(){
                this.items.forEach(item=>{
                    let lay = this.layout.find(layoutItem => { return layoutItem.key ==item.key})
                    lay.label = item.label
                    lay.empty = item.empty
                })
            },
            handleGridColumn(){
                console.log(123)
                let grid ,height ,width ,cols ,rows, colums='',Rows=''
                this.layout = []
                grid = this.$refs.grid.$el
                height = grid.clientHeight
                width = grid.clientWidth
                cols = parseInt(width/100)
                rows = parseInt(height/100)
               
                for(var i=0;i<cols;i++){
                    colums+= "100px "
                }
                
                for(var i=0;i<rows;i++){
                    Rows+= "100px "
                }
                for(var i=0;i<rows*cols;i++){
                    this.layout.push({
                        key:i,
                        label:'',
                        empty:true
                    })
                }
                console.log(colums)
                this.gridColumn.gridTemplateColumns=colums
                this.gridColumn.gridTemplateRows=Rows
            },
            dragstart(e, item) {
                console.log('start')
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