<template>
  <div class="group">
    <Header title="小组">
      <template #left>
        <img
          src="../../assets/images/ic_actionbar_search_icon.png"
          alt=""
          class="leftImg"
        />
      </template>
      <template #right>
        <img
          src="../../assets/images/ic_chat_green.png"
          alt=""
          class="rightImg"
        />
      </template>
    </Header>
    <div>
      <h3 class="heads">{{ msg[0] }}</h3>
      <div v-for="(item, index) in newarr" :key="index" class="main">
        <img class="tou" :src="item.img_url" alt="" />
        <span class="name">{{ item.group_name }}</span>
        <span style="float: right" class="num gray">{{ item.group_member }}</span>
        <p class="content gray">{{ item.topic_title }}</p>
      </div>
        <p class="xiaozu">更多相关小组</p>
    </div>
    <div>
      <h3 class="heads">{{ msg[1] }}</h3>
      <div v-for="(item, index) in arr" :key="index" class="main">
        <img class="tou" :src="item.img_url" alt="" />
        <span class="name">{{ item.group_name }}</span>
        <span style="float: right" class="num gray">{{ item.group_member }}</span>
        <p class="content gray">{{ item.topic_title }}</p>
      </div>
      <p class="xiaozu">更多相关小组</p>
    </div>
    <div>
      <h3 class="heads">{{ msg[2] }}</h3>
      <div v-for="(item, index) in arr2" :key="index" class="main">
        <img class="tou" :src="item.img_url" alt="" />
        <span class="name">{{ item.group_name }}</span>
        <span style="float: right" class="num gray">{{ item.group_member }}</span>
        <p class="content gray">{{ item.topic_title }}</p>
      </div>
      <p class="xiaozu">更多相关小组</p>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      newarr: [],
      arr1: [],
      msg: [],
      arr: [],
      arr2: [],
    };
  },
  mounted() {
    this.$axios.get("../../static/data/groupData.json").then((res) => {
      this.arr1 = res.data.group;
      for (let i = 0; i < this.arr1.length; i++) {
        this.msg.push(this.arr1[i].title);
      }
      console.log(this.arr1);
      console.log(this.msg);
      this.newarr = res.data.group[0].group_list;
      this.arr = res.data.group[1].group_list;
      this.arr2 = res.data.group[2].group_list;
    });
  },
};
</script>

<style lang='less'>
.group {
  text-align: left;
  .heads {
    font-weight: normal;
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    line-height: 90/100rem;
    border-bottom: 1px solid gainsboro;
    padding: 15/100rem 0;
    box-sizing: border-box;
    .name {
      width: 60%;
    }
    .num {
      width: 25%;
    }
    .tou {
      width: 80/100rem;
      height: 80/100rem;
    }
    .content {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
     .gray{
      color: gray;
      }
  }
  .xiaozu{
    height: 100/100rem;
    line-height: 100/100rem;
    text-align: center;
    color: #64c974;
   
}
}
</style>