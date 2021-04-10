<template>
<<<<<<< HEAD

   <component @start="toggleComponent" :is="showComponent" :gridnumber="gridNum"></component>

=======
 <keep-alive >
   <component @start="toggleComponent" :is="showComponent" :gridnumber="gridNum"></component>
 </keep-alive>
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
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
<<<<<<< HEAD
    },
    dispatchMessageActionHandler(text){
      this.$store.dispatch({
         type: 'messageUpdate',
         value: text,
       });
    },
    dispatchButtonTextActionHandler(text){
       this.$store.dispatch({
         type: 'startButtonTextUpdate',
         value: text,
       });
    },
    dispatchEndMovesTextActionHandler(text){
       this.$store.dispatch({
            type: 'endMovesUpdate',
            value:text
        });
    },
    resetMoves(){
      this.$store.dispatch('resetMoves');
    },
    resetFoodEaten(){
      this.$store.dispatch('foodEatenReset');
    },
    resetWin(arg){
      console.log(`reset ${arg}`);
      this.$store.dispatch({
        type: 'winUpdate',
        value: arg,
      });
    }
=======
     
    },
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
  },
  computed:{
    showComponent(){
      return this.show ? 'GameStart': 'GamePlay';
<<<<<<< HEAD
    },
    moves(){
      return this.$store.getters['getMoves'];
    },
    maxMoves(){
      return this.$store.getters['getMaxMoves'];
    },
    gameOverEndMovesText(){
      return `Total Food: ${this.moves} / ${this.maxMoves}`;
    },
    foodEaten(){
      return this.$store.getters['getFoodEaten'];
    },
  },
 watch:{
  //  gameover
   moves(nv){
     if(nv === this.$store.getters['getMaxMoves']){
       this.dispatchMessageActionHandler('Game Over');
       this.dispatchButtonTextActionHandler('Start again');
       this.resetMoves();
       this.resetFoodEaten();
       this.dispatchEndMovesTextActionHandler(this.gameOverEndMovesText);    
       this.resetWin(false);
       this.show = !this.show;
     }
   },

  //  win
   foodEaten(nv){
     if( nv === this.$store.getters['getNumberOfFood']){
       this.dispatchMessageActionHandler('Bravo');
       this.dispatchButtonTextActionHandler('Start again');
       this.resetMoves();
       this.resetFoodEaten();
       this.dispatchEndMovesTextActionHandler(''); 
       this.resetWin(true);
       this.show = !this.show;
     }
   }
 }
=======
    }
  }
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
