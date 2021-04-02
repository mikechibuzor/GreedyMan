<template>
 <keep-alive >
   <component @start="toggleComponent" :is="showComponent" :gridnumber="gridNum"></component>
 </keep-alive>
</template>

<script>
import GameStart from './components/views/GameStart.vue';
import GamePlay from './components/views/GamePlay.vue';


export default {
  name: 'App',
  components:{
    GameStart,
    GamePlay,
  },
  data(){
    return{
      show: true,
      gridNum: null,
    }
  },
  methods:{
    toggleComponent(num){
      this.show = !this.show;
      this.gridNum = num;
     
    },
  },
  computed:{
    showComponent(){
      return this.show ? 'GameStart': 'GamePlay';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
