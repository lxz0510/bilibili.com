<template>
  <div class="commentParent">
    <div v-for="(item, index) in commentList" :key="index">
      <div class="commentItem">
        <div class="userImg">
          <img
            :src="item.userinfo.user_img"
            alt=""
            v-if="item.userinfo.user_img"
          />
          <img src="../../assets/default_img.jpg" alt="" v-else />
        </div>

        <div class="commentContent">
          <p>
            <span v-if="item.userinfo">{{ item.userinfo.name }}</span>
            <span v-else>此用户无姓名</span>
            <span>{{ item.comment_date }}</span>
          </p>
          <div class="commentartical">
            {{ item.comment_content }}
            <span class="publishs" @click="publishClick(item.comment_id)"
              >回复</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentList: null,
    };
  },
  methods: {
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      this.commentList = this.changeCommentData(res.data);
      console.log(this.commentList);
    },
    //改造数据
    changeCommentData(data) {
      function fn(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1;
      }
      return fn(null);
    },
  },
  created() {
    this.commentData();
  },
};
</script>

<style>
.commentParent {
  padding: 2.778vw 2.778vw;
}
.commentItem {
  display: flex;
  font-size: 30px;
  margin: 2.778vw 0;
  justify-content: flex-start;
}
.commentContent {
  flex: 1;
}
.commentContent p{
    display: flex;
    
}
.commentItem img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
.publishs {
  position: absolute;
  right: 0;
  color: red;
}
.commentartical{
    font-size: 30px;
}
</style>