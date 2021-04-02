<template>
  <div class="play-board grid grid-cols-10 border-2 border-primary-color">
      <single-cell v-for="c in 100" :key="c"  > {{ c }} </single-cell>
  </div>
</template>

<script>
import SingleCell from './SingleCell.vue';
export default {
    name: 'PlayBoard',
    components:{
        SingleCell
    },
}
</script>

<style>

</style>