<template>
  <div>
    <Header title="我的">
      <template #right>
        <img
          src="../../assets/images/ic_settings.png"
          alt=""
          class="rightImg"
        />
      </template>
    </Header>
    <div class="run">
      <span class="iconfont icon-suo">
        <br />
        密码管理</span
      >
      <span class="iconfont icon-yinxingqia"> <br />银行卡管理</span>
    </div>
    <ul class="opt">
      <li><span class="iconfont icon-pinggu"></span> 风险承受能力评估 <span class="iconfont icon-iconfontjiantou5 fr" > </span></li>
      <li><span class="iconfont icon-anquanbaozhang"></span>安全保障 <span class="iconfont icon-iconfontjiantou5 fr" > </span></li>
      <li><span class="iconfont icon-guanyuwomen"></span> 我的关注 <span class="iconfont icon-iconfontjiantou5 fr " > </span></li>
      <li><span class="iconfont icon-bangzhu"></span>帮助中心 <span class="iconfont icon-iconfontjiantou5 fr" > </span></li>
      <li><span class="iconfont icon-guanyuwomen"></span>关于我们 <span class="iconfont icon-iconfontjiantou5 fr" > </span></li>
      <li><span class="iconfont icon-jianchafenzu"></span>检查更新 <span class="iconfont icon-iconfontjiantou5 fr" > </span></li>
      <li><span class="iconfont icon-lianxikefu"></span>联系客服 <span class="iconfont icon-iconfontjiantou5 fr" > </span></li>
    </ul>
  </div>
</template>

<script>
import Header from "../../components/header";
import '../../../static/font/font_2114091_s2sat9wr28i/iconfont.css'
export default {
  components: {
    Header,
  },
};
</script>

<style lang='less'>
.fr{float: right;}
.run {
  height: 150/100rem;
  display: flex;
  line-height: 50/100rem;
  border-bottom: 1px solid gainsboro;
  box-sizing: border-box;
  padding-top: 20/100rem;
  span {
    width: 50%;
  }
  .iconfont:before {
    font-size: 70/100rem;
    color: #8ad696;
  }
}
.opt {
  width: 100%;
  li {
    height: 100/100rem;
    border-bottom: 1px solid gainsboro;
    text-align: left;
    line-height: 100/100rem;
    list-style: none;
    .iconfont{
      height: 50/100rem;
    }
    .iconfont:before {
      font-size: 40/100rem;
      color: #8ad696;
      margin: 0 20/100rem;
    }
  }
}
</style>