<template>
  <div id="parent" ref="parent" class="play-board grid border-2 border-primary-color" :class="createGrid">
      <single-cell v-for="c in createTotalCell.number" :key="c" :id="c"> 
          <template v-if=" createTotalCell.randomPosition.find( pos => pos === c) && c !== createTotalCell.greedyManPos ">
              <the-food></the-food>
          </template>
          <template v-else-if="c === createTotalCell.greedyManPos">
              <greedy-man></greedy-man>
          </template>
          <template v-else>
              <p class="opacity-0">{{ createTotalCell.greedyManPos }}</p>
          </template>
      </single-cell>
  </div>
</template>

<script>

// import Food from '../../Classes/Food.js';
// import GreedyMan from '../../Classes/GreedyMan.js';
import SingleCell from './SingleCell.vue';
import GreedyMan from './GreedyMan.vue';
import TheFood from './TheFood.vue';


export default {
    name: 'PlayBoard',
    props:['gridnumber'],
    components:{
        GreedyMan,
        SingleCell,
        TheFood,
    },
    methods:{
        // appendSingleCells(){
        //     const parent = this.$refs.parent;
        //     const iterateCount = this.createTotalCell;
        //     for(let i = 0; i < iterateCount; i++){
        //         const child = <single-cell></single-cell>;
        //         parent.appendChild(child);
        //     }
        // },
        randomize(num){
            let randomNumbers = [];
            while(randomNumbers.length < num){
                let r = Math.floor( Math.random() * (num * num));
                randomNumbers = [...new Set([...randomNumbers, r])];
            }
            return randomNumbers;
        }
    },
    computed:{
        createGrid(){
            return `grid-cols-${this.gridnumber}`;
        },
        createTotalCell(){
            const number = Number(this.gridnumber) * Number(this.gridnumber);
            const randomPosition = this.randomize(Number(this.gridnumber));
            const greedyManPos = number - randomPosition[Math.floor(Math.random() * (randomPosition.length - 1))];
            return {
                number,
                randomPosition,
                greedyManPos,
            };
        },
    },
    mounted(){
        // this.appendSingleCells();
        // console.log(this.randomize(Number(this.gridnumber)));
        // console.log(this.createTotalCell)
    }
}
</script>

<style scoped>
   .play-board{
        height: 82%;
    }
</style>