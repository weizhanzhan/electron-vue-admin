<template>
<div id="container">
    <div id="dock">
        <ul>
            <li>
                <span>Data</span>
                <a href="javascript:;"><img src="../../../../../static/images/menu/index.png"></a>
            </li>
            <li>
                <span>Index</span>
                <a href="javascript:;"><img src="../../../../../static/images/menu/data.png"></a>
            </li>
            <li >
                <span>Setting</span>
                <a href="javascript:;"><img src="../../../../../static/images/menu/set.png"></a>
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
          
        },
      
    }
</script>

<style scoped lang="scss">

    #container{
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        #dock {
            width: 100%;
            text-align: center;
            margin: 0 auto;
        }
        ul {
            min-width: 50%;
            width: 50%;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px 10px 0 0;
            display: flex;
            justify-content: center;
        }
        li {
            list-style-type: none;
            position: relative;
            width: 100px;
            font-size: 20px;
          
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
                bottom: 70px;
                left: 10px;
                width: 100%;
                background-color: #222;
                padding: 4px 0;
                border-radius: 7px;
            }
        }
        li:hover{
            img {
               transform: scale(1.1);
              
            }
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