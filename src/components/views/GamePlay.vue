<template>
  <div class="content w-full h-screen flex items-center justify-center">
      <div class="game-board bg-white w-2/5 h-4/5 rounded-lg px-12 py-4">
        <the-head :gridnumber="gridnumber"></the-head>
        <play-board :gridnumber="gridnumber"></play-board>
        <the-foot :gridnumber="gridnumber"></the-foot>
      </div>
  </div>
</template>

<script>
import PlayBoard from '../sub-components/PlayBoard.vue';
import TheFoot from '../sub-components/TheFoot.vue';
import TheHead from '../sub-components/TheHead.vue';
export default {
    name: 'GamePlay',
    components:{
        PlayBoard,
        TheFoot,
        TheHead,
    },
    props:['gridnumber'],
}
</script>

<style scoped>
    .content{
        background-image: url('../../assets/Images/1847 1.jpg');
        background-position: center;
        background-size: cover;
    }
    .game-board{
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .15),
                    -2px -2px 2px rgba(0, 0, 0, .05);
    } 

</style>

