<template>
<<<<<<< HEAD
  <div id="parent" ref="parent" class="play-board grid border-4 border-primary-color" :class="createGrid">
     <!-- using the for loop range to display single-cell component -->
      <single-cell v-for="c in createTotalCell.number" :key="c" :id="c"> 
          <!-- if the loop index is equal to any of the randomFoodPosition, append the-food component -->
          <template v-if=" createTotalCell.randomFoodPosition.find( pos => pos === c) && c !== createTotalCell.greedyManPos ">
              <the-food></the-food>
          </template>
          <!-- append greedy man when the index equals that of the randomlyGenerated greedy man position -->
          <template v-else-if="c === createTotalCell.greedyManPos">
              <greedy-man @movesCount="movesCount"></greedy-man>
          </template>
          <!-- the template below is to add structure, so the singlecell boxes have same size -->
          <template v-else>
              <h6 class="opacity-0">{{ createTotalCell.greedyManPos }}</h6>
=======
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
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
          </template>
      </single-cell>
  </div>
</template>

<script>

<<<<<<< HEAD
// imports of all components used in this component
=======
// import Food from '../../Classes/Food.js';
// import GreedyMan from '../../Classes/GreedyMan.js';
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
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
<<<<<<< HEAD
    data(){
        return{
            moves: 0,
        }
    },
    methods:{
        movesCount(){
            this.moves += 1;
            this.$emit('movesCount', this.moves);
        },
=======
    methods:{
        // appendSingleCells(){
        //     const parent = this.$refs.parent;
        //     const iterateCount = this.createTotalCell;
        //     for(let i = 0; i < iterateCount; i++){
        //         const child = <single-cell></single-cell>;
        //         parent.appendChild(child);
        //     }
        // },
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
        randomize(num){
            let randomNumbers = [];
            while(randomNumbers.length < num){
                let r = Math.floor( Math.random() * (num * num));
                randomNumbers = [...new Set([...randomNumbers, r])];
            }
            return randomNumbers;
<<<<<<< HEAD
        },
        updateFoodEaten(){
            const foodNumber = Number(this.gridnumber);
            this.$store.dispatch({
                type: 'updateFoodNumber',
                value: foodNumber,
            });
=======
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
        }
    },
    computed:{
        createGrid(){
            return `grid-cols-${this.gridnumber}`;
        },
        createTotalCell(){
            const number = Number(this.gridnumber) * Number(this.gridnumber);
<<<<<<< HEAD
            const randomFoodPosition = this.randomize(Number(this.gridnumber));
            // let greedyManPos = number - randomFoodPosition[Math.floor(Math.random() * (randomFoodPosition.length - 1))];
            const greedyManPos = (function(){
                return randomFoodPosition.pop();
            })(randomFoodPosition);
            return {
                number,
                randomFoodPosition,
                greedyManPos,
            };
        },
        returnMoves(){
            return this.moves;
        }
    },
    mounted(){
        this.updateFoodEaten();
=======
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
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
    }
}
</script>

<style scoped>
   .play-board{
        height: 82%;
    }
</style>