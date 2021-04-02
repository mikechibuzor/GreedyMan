<template>
 <keep-alive >
   <component @start="toggleComponent" :is="showComponent"></component>
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
      show: false,
    }
  },
  methods:{
    toggleComponent(){
      this.show = !this.show;
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
