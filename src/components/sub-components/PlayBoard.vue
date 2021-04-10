<template>
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
          </template>
      </single-cell>
  </div>
</template>

<script>

// imports of all components used in this component
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
        randomize(num){
            let randomNumbers = [];
            while(randomNumbers.length < num){
                let r = Math.floor( Math.random() * (num * num));
                randomNumbers = [...new Set([...randomNumbers, r])];
            }
            return randomNumbers;
        },
        updateFoodEaten(){
            const foodNumber = Number(this.gridnumber);
            this.$store.dispatch({
                type: 'updateFoodNumber',
                value: foodNumber,
            });
        }
    },
    computed:{
        createGrid(){
            return `grid-cols-${this.gridnumber}`;
        },
        createTotalCell(){
            const number = Number(this.gridnumber) * Number(this.gridnumber);
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
    }
}
</script>

<style scoped>
   .play-board{
        height: 82%;
    }
</style>