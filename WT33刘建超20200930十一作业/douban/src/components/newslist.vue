<template>
  <div>
      <ul>
          <li>
               <img :src="imgSrc" alt="">
              <div class="leftTxt">
                  <h3 class="title">{{title}}</h3>
                  <p class="content">{{desc}}</p>
                  <span class="zuoze">作者:{{name}}</span>
              </div>
                
          </li>
      </ul>
   

  </div>
</template>

<script>

export default {
    props:['imgSrc','title','desc','name'],
  }  
</script>

<style lang='less'>
ul{
    width: 100%;
    li{
        height: 230/100rem;
        list-style: none;
        padding: 20/100rem;
        box-sizing: border-box;
        border-bottom: 1px solid gainsboro;
        .leftTxt{
            width: 60%;
              height: 150/100rem;
            font-size: 20/100rem;
            text-align: left;
            .title{font-weight: normal;text-indent: 0.1rem;margin-bottom: 10/100rem;}
            .content{color: gray;margin-bottom: 10/100rem;}
            .zuoze{color:gray;}
        }
        img{
            width: 150/100rem;
            height:140/100rem ;
            float: right;
        }
    }
}
</style>