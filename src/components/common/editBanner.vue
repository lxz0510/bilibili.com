<template>
  <div @click="changeinfor">
      <div class="banner">
          <span >{{left}}</span>
          <span ><slot name="right"/></span>
      </div>
  </div>
</template>

<script>
export default {
//父传值的方法
    props:['left','right'],
    methods:{
        changeinfor(){
            this.$emit('changeinfor')
        }
    }
}
</script>

<style>
    .banner{
        background-color: white;
        border-bottom: 1px solid #eee;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
</style>