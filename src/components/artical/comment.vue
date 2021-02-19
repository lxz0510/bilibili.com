<template>
  <div>
    <p class="comment-title">
      <span>评论</span>
      <span>(23123)</span>
    </p>
    <div class="userInput">
      <img :src="myuser.user_img" alt="" v-if="myuser" />
      <img src="../../assets/default_img.jpg" alt="" v-else />
      <input type="text" placeholder="说点什么吧" />
      <button @click="cmmentPublish">发表</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myuser: null,
    };
  },
  methods: {
    async myUserinfo() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.myuser = res.data[0];
    },
    cmmentPublish() {
      if (
        !this.myuser &&
        !localStorage.getItem("token") &&
        !localStorage.getItem("id")
      ) {
        this.$msg.fail("请先登录");
        return;
      }
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.myUserinfo();
    }
  },
};
</script>

<style>
.userInput {
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
}
.userInput img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
.userInput input {
  outline: none;
  width: 600px;
  height: 90px;
  border: 0;
  background-color: #f4f4f4;
  border-radius: 100px;
  margin-left: 10px;
  font-size: 30px;
  text-align: center;
}
.userInput button {
  outline: none;
  border: 0;
  border-radius: 30px;
  height: 90px;
  background: #fb7299;
  color: white;
  font-size: 3.333vw;
  padding: 0 4.167vw;
  line-height: 90px;
}
</style>