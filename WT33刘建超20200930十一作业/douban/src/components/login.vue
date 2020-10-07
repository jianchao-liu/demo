<template>
  <div class="login">
     <h1 class="loginTitle">登录豆瓣</h1>
     <p class="grayColor">登录注册表示同意 <router-link to="#">豆瓣使用协议、隐私政策</router-link></p>
     <form class="form">
       <p>
         <input type="text" placeholder="手机号/邮箱" class="name">
       </p>
       <p>
         <input type="password" placeholder="密码" class="pwd"> 
       </p>
       <p>
         <input type="button" value="登录" class="btn">
       </p>
     </form>
    <p class="skip"><router-link to="/loginTwo">免密码登录</router-link> <router-link to="#">海外手机登录</router-link> <span class="fr">找回密码</span></p>
    <div class="loginSection">
      <p>第三方登录</p>
      <div class="ring">
        <span class="iconfont icon-icon_xinlang-chunselogo"></span>
      </div>
      <div class="ring">
        <span class="iconfont icon-weixin"></span>
      </div>
    </div>
  </div>
</template>

<script>
import '../../static/font/font_2114091_s2sat9wr28i/iconfont.css'
export default {

}
</script>
<style lang='less'>
.fr{float: right;}
.login{
  font-size: 25/100rem;
  margin: 30/100rem auto;
  .loginTitle{font-weight: normal;}
  a{color: #42bd56;text-decoration: none;}
  .grayColor{color: #bababa;}
  .form{
    padding: 40/100rem 0;
    p{
      input{
        width: 80%;
        height: 70/100rem;
        border: 1px solid gainsboro;
      }
      .name,.pwd{text-indent: 0.2rem;}
      .btn{
        color: #fff;
        background: #a0deaa;
        margin-top: 30/100rem;
      }
    }
  }
  .skip{
    width: 80%;
    margin: 0 auto;
    text-align: left;
  }
  .loginSection{
    margin-top: 200/100rem;
    p{color:#bababa ;font-size: 20/100rem;}
    .ring{
      width: 90/100rem;
      height: 90/100rem;
      border-radius: 50%;
      line-height: 90/100rem;
      margin: 0 auto;
      display: inline-block;
      margin-top: 30/100rem;
      margin-right: 20/100rem;
      border: 1px solid gainsboro;
      .iconfont:before{
        color: red;
        font-size: 45/100rem;
      }
      .icon-weixin:before{
        color: #39bb4a;
      }
    }
  }
}
</style>