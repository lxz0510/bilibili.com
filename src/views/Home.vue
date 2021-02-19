<template>
  <div>
    <user-top ></user-top>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item, index) in data" :title="item.title" :key="index">
        <van-list
          v-model="item.loading"
          :immediate-check="false"
          :finished="item.finished"
          finished-text="我也是有底线的"
          @load="onLoad"
        >
          <div class="detailparent">
            <detail
              class="detailitem"
              :detaillist="detailitem"
              v-for="(detailitem, detailindex) in item.list"
              :key="detailindex"
            ></detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
    <detail></detail>
  </div>
</template>
<script>
import userTop from "../components/common/userTop.vue";
import detail from "./Detail";
export default {
  components: { userTop, detail },
  data() {
    return {
      data: [],
      active: 0,
    };
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get("/category");
      //数据改造，并且将改造后的数据重新传给data
      this.changedata(res.data);
      this.selectArtical();
    },
    //数据改造函数
    changedata(chdata) {
      const newdata = chdata.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        item.finished = false;
        item.loading = false;
        return item;
      });
      this.data = newdata;
      this.selectArtical();
    },

    // 获得本页面的 id
    categoryItem() {
      const cateItem = this.data[this.active];
      return cateItem;
    },
    //通过页面id向后端发送请求得到详细的页面数据
    async selectArtical() {
      const userindex = this.categoryItem();
      const res = await this.$http.get("/detail/" + userindex._id, {
        params: {
          page: userindex.page,
          pagesize: userindex.pagesize,
        },
      });
      userindex.list.push(...res.data)
      userindex.loading = false
            if (res.data.length < userindex.pagesize) {
        userindex.finished = true;
      }
    },
    onLoad() {
      const categoryitem = this.categoryItem();
      setTimeout(() => {
        categoryitem.page += 1;
        this.selectArtical();
      }, 1000);
    },
  },
  //通过监控active的变化来重新发送ajax请求
  watch: {
    active() {
      this.selectArtical();
    },
  },
  created() {
    this.selectCategory();
  },
};
</script>
<style >
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;
}
.detailitem {
  margin: 1.389vw 0;
  width: 45%;
}
</style>