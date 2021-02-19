<template>
    <div>
        <van-field
            :type ='type'
            :placeholder="placeholder"
            :label="lable"
            :rule ='rule'
            v-model="content"
           @input="handleInput"
        />
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:''
        }
    },
    props:['lable','rule','placeholder','type'],
    methods:{
        //判断正则
        handleInput(){
            const rue = new RegExp(this.rule)
            if(rue.test(this.content)){
                //在子组件绑定新的函数,在父组件接受
                this.$emit('inputChange',this.content)
            }
        }
    },
    watch:{
        content(){

        }
    }
}
</script>
<style >
    
</style>