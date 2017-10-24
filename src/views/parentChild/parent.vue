<template>
  <div class="hello first">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>父组件:{{num}}</p>
    <Counter v-bind:num="num" v-on:incre="increment" v-on:decre="decrement"></Counter>
    <button @click="prePage">返回上一页</button>
  </div>
</template>

<script>
import Counter from './children'
export default {
  name: 'parentChild',
  data () {
    return {
      num: 0,
      msg: '父子组件传值示例'
    }
  },
  components:{
    Counter
  },
  methods:{
    increment(){
      this.num++;
    },
    decrement(){
      this.num--;
    },
    prePage(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.first >>> .second {
   color: red;
}
</style>
