<template>
    <div class="desktop">
        <!-- <Folder/>
        <Folder/> -->
          <grid-layout
           :layout="layout"
            :auto-size="false"
            :col-num="20"
            :row-height="50"
            :max-rows="100"
            :is-draggable="true"
            :is-resizable="false"
            :vertical-compact="false"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="(item,index) in layout"
        :key="index"
        :item="watchitem(item)"
                :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               @resize="resizeEvent"
               @move="moveEvent"
               @resized="resizedEvent"
               @moved="movedEvent"
               >
            {{item.i}}
        </grid-item>
    </grid-layout>
    </div>
</template>

<script>
import Folder from './folder'
import VueGridLayout from 'vue-grid-layout';
var testLayout = [
	    {"x":0,"y":0,"w":1,"h":1,"i":"0"},
    {"x":0,"y":1,"w":1,"h":1,"i":"1"},
    {"x":0,"y":2,"w":1,"h":1,"i":"2"},
    {"x":0,"y":3,"w":1,"h":1,"i":"3"},
    {"x":1,"y":0,"w":1,"h":1,"i":"4"},
    {"x":1,"y":1,"w":1,"h":1,"i":"5"},
    {"x":1,"y":2,"w":1,"h":1,"i":"6"},
    {"x":1,"y":3,"w":1,"h":1,"i":"7"},
    {"x":2,"y":0,"w":1,"h":1,"i":"8"},
    {"x":2,"y":1,"w":1,"h":1,"i":"9"},
    {"x":2,"y":2,"w":1,"h":1,"i":"10"},
    {"x":2,"y":3,"w":1,"h":1,"i":"11"},
    {"x":3,"y":0,"w":1,"h":1,"i":"12"},
    {"x":3,"y":1,"w":1,"h":1,"i":"13"},
    {"x":3,"y":2,"w":1,"h":1,"i":"14"},
    {"x":3,"y":3,"w":1,"h":1,"i":"15"},
    {"x":4,"y":0,"w":1,"h":1,"i":"16"},
    {"x":4,"y":1,"w":1,"h":1,"i":"17"},
    {"x":4,"y":2,"w":1,"h":1,"i":"18"},
    {"x":4,"y":3,"w":1,"h":1,"i":"19"}
	];
export default {
    components:{ 
        Folder,
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem
       
     },
     data () {
         return {
            layout: testLayout,
            newX:0,
            newY:0
         }
     },
     methods:{
         watchitem:function(item) {
            console.log(item.y)
        if(item.y>13 ||item.x>19){
            item.y=1
            item.x=1
        }
       
         return item
    },
        moveEvent: function(i, newX, newY,e){
            //console.log(e)
            //console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
        },
        resizeEvent: function(i, newH, newW){
            //console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
        },
        movedEvent: function(i, newX, newY,e){
            //console.log(e)
            //console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
        },
        resizedEvent: function(i, newH, newW, newHPx, newWPx){
            //console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
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

