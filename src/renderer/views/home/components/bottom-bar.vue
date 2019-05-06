<template>
<div id="container" @contextmenu="contextmenu">
    <div id="dock">
        <ul>
            <li>
                <span>Data</span>
                <a href="javascript:;" class="hvr-bob"><img src="../../../../../static/images/menu/index.png"></a>
            </li>
            <li>
                <span>Index</span>
                <a href="javascript:;" class="hvr-bob"><img src="../../../../../static/images/menu/data.png"></a>
            </li>
            <li >
                <span>Setting</span>
                <a href="javascript:;" class="hvr-bob"><img src="../../../../../static/images/menu/set.png"></a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
  
    export default {
        name: 'menu-bottom',
        data() {
            return {
             
            }
        },
        methods: {
          contextmenu(e){
            e.cancelBubble = true
          }
        },
      
    }
</script>

<style scoped lang="scss">
    #container{
     
        text-align: center;
        width: 100%;
        #dock {
            width: 100%;
            text-align: center;
            margin: 0 auto;
        }
        ul {
          
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.2);
           
            display: flex;
            justify-content: center;
        }
        li {
            list-style-type: none;
            position: relative;
            width: 100px;
            font-size: 16px;
          
            img{
                width: 50px;
                height: 50px;
                -webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, .5)));
                transition: all 0.3s;
                transform-origin: 40% 70%;
            }
            span{
                display: none;
                position: absolute;
                bottom: 60px;
                left: 5px;
                width: 100%;
                background-color:rgba(255, 255, 255, .2);
                padding: 2px 0;
                border-radius: 4px;
            }
        }
        li:hover{
            // img {
            //    transform: scale(1.1);
              
            // }
            span {
                display: block;
                color: #fff;
            }
        }
        // li:hover+li img,li.prev img{
        //     transform: scale(1.2);

        // }
    }

  
</style>