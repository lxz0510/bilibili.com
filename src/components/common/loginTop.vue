<template>
    <div>
       <div class="LoginTop">
           <div></div>
           <div>{{topMassage}}</div>
           <div>
               <slot name="right" />
           </div>
       </div>
    </div>
</template>
<script>
export default {
    props:['topMassage']
}
</script>

<style >
    .LoginTop{
        height: 12.5vw;
        background-color: white;
        display: flex;
    }
    div{
        justify-content: space-between;
        line-height: 12.5vw;
        font-size: 4.44vw;
    }
</style>