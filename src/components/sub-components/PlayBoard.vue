<template>
  <div class="play-board grid border-2 border-primary-color" :class="createGrid">
      <single-cell v-for="c in createTotalCell" :key="c"> {{ c }} </single-cell>
  </div>
</template>

<script>
import SingleCell from './SingleCell.vue';
export default {
    name: 'PlayBoard',
    props:['gridnumber'],
    components:{
        SingleCell,
    },
    computed:{
        createGrid(){
            return `grid-cols-${this.gridnumber}`;
        },
        createTotalCell(){
            return Number(this.gridnumber) * Number(this.gridnumber);
        }
    }
}
</script>

<style scoped>
   .play-board{
        height: 82%;
    }
</style>