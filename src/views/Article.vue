<template>
  <div v-if="model" style="background-color: white;">
    <user-top></user-top>
    <div class="detailinfo">
      <video controls="controls"></video>
      <div class="detailinfoText">
        <span style="color: #fb7299; font-size: 38px">{{
          model.category.title
        }}</span>
        <span style="color: black; font-size: 43px">{{ model.name }}</span>
        <div class="detialData">
          <span style="color: black; font-size: 43px">{{
            model.userinfo.name
          }}</span>
          <span>146.4万次观看</span>
          <span>5281弹幕</span>
          <span>{{ model.date }}</span>
        </div>
        <div class="detailImg">
          <p>
            <van-icon name="good-job" />
            <span>点赞</span>
          </p>
          <p>
            <van-icon name="star" />
            <span>收藏</span>
          </p>

          <p>
            <van-icon name="share" />
            <span>转发</span>
          </p>
        </div>
        <div class="detailparent">
          <detail
            class="detailitem"
            v-for="(item, index) in commendList"
            :key="index"
            :detaillist="item"
          ></detail>
        </div>
      </div>
    </div>
    <comment></comment>
    <commenttitle></commenttitle>
  </div>
</template>

<script>
import Comment from "../components/artical/comment.vue";
import Commenttitle from '../components/artical/commenttitle.vue';
import userTop from "../components/common/userTop.vue";
import Detail from "./Detail.vue";

export default {
  components: { userTop, Detail, Comment, Commenttitle },
  data() {
    return {
      model: null,
      commendList: null,
    };
  },
  methods: {
    async articleitemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      this.model = res.data[0];
    },
    async commendData() {
      const res = await this.$http.get("/commend");
      this.commendList = res.data;
    },
  },
  created() {
    this.articleitemData();
    this.commendData();
  },
  watch: {
    $route() {
      this.articleitemData();
      this.commendData();
    },
  },
};

//获取文章id ，创建完成页面之后去请求后端数据。需要时异步的请求
</script>

<style>
video {
  width: 100%;
}
.detailinfoText span {
  margin: 0 5 5 10;
  color: #aaa;
  font-size: 35px;
}
.detailImg {
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
}
.detailImg p {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
</style>