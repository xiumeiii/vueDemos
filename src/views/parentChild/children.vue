<template>
    <div>
        <button @click="increment" :class="{ [$style.red]: isRed}">+</button>
        <button v-on:click="decrement" :class="[$style.red, $style.bold]">-</button>
        <p class="second"><span>子组件:{{num}}</span></p>
    </div>
</template>
<style module>
    .red {
    color: red;
    }
    .bold {
    font-weight: bold;
    }
</style>
<style module="a">
    .bigger{
        font-size: 20px;
    }
</style>
<script>
    export default{
      props:["num"],
      data(){
        return{
            isRed : true
        }
      },
      methods:{
        increment(){
            this.$emit("incre");
        },
        decrement(){
            this.$emit("decre");
        }
      }
    }
</script>