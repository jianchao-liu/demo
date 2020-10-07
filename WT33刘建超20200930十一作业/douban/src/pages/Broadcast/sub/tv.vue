<template>
  <div>
    <p class="filmTitle">图书</p>
    <div class="subScroll">
      <Sublist
        v-for="(item, index) in readArr"
        :key="index"
        :title="item.title"
        :cover_url="item.cover"
      >
        <span
          >评分：{{ item.rate
          }}</span>
      </Sublist>
    </div>
  </div>
</template>

<script>
import Sublist from "../../../components/sublist";
export default {
  components: {
    Sublist,
  },
  data() {
    return {
      readArr: [],
    };
  },
  mounted() {
    this.$axios.get("../../../static/data/tv.json").then((res) => {
      this.readArr = res.data.subjects;
      console.log(res);
      console.log(this.readArr);
    });
  },
};
</script>

<style lang='less'>
.filmTitle {
  text-align: left;
}
.subScroll {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  height: 400/100rem;
  border: 1px solid gainsboro;
  box-sizing: border-box;
  font-size: 20/100rem;
}
</style>