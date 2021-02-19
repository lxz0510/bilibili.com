<template>
  <div class="userinformation">
      <div class="header">
        <div class="topinfor">
                <div class="userimg">
                    <img  :src="userInfo.user_img" alt="" v-if="userInfo.user_img">
                    <img src="../../assets/default_img.jpg" alt="" v-else>
                    
                    </div>
        </div>
        <div class="user_edit">
            <div class="detailFun">
                <p>
                    <span>0</span>
                    <span class="userfun">粉丝</span>
                </p>
                <!-- | -->
                <p>
                    <span>54</span>
                    <span class="userfun">关注</span>
                </p>
                <!-- | -->
                <p>
                    <span>0</span>
                    <span class="userfun">获赞</span>

                </p>
            </div>
            <div class="writeinfor"  @click="$router.push('/edit')">
                <div class="write">编辑资料</div>
            </div>
        </div>

      </div>

      <div class="user">
          <h2>{{userInfo.name}}</h2>
          <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
          <p class="myselfwrite" v-else>这个人很神秘，什么都没有写</p>
      </div>
  </div>
</template>

<script>
export default {
    props:['userInfo'],
    methods:{
        
    }
}
</script>

<style>
    .userinformation{
        position: relative;
        background-color:white;
        padding:0 12px;
    }
    .userimg img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .header{
        display: flex;
    }
    .user_edit{
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .detailFun{
        display: flex;
        
    }
    .detailFun p{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-right: 1px solid #ccc;;
    }
     .detailFun p span{
         height: 50px;
         font-size: 40px;
     }
    .write{
        border: 1px solid #fb7a9f;
        text-align: center;
        width: 600px;
        height: 80px;
        border-radius: 10px;
        line-height: 80px;
        color: #fb7a9f;
        
    }
    .userfun{
        color: #aaa;
    }
    .writeinfor{
        display: flex;
        justify-content: center;
    }
    h2{
        margin: 0;
        padding: 0;
    }
    .myselfwrite{
        padding: 0;
        margin: 2.7vw 0;
        color: #555;
        font-size: 32px;
        
    }
    .user{
        display: flex;
    }
</style>