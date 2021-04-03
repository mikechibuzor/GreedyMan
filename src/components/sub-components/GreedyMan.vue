<template>
  <p ref="greedyman" draggable="true" @dragstart="dragstartHandler"></p>
</template>

<script>
export default {
    methods:{
        dragstartHandler(event){
            event.dataTransfer.setData('application/my-app', event.target.ref);
            event.dataTransfer.effectAllowed = 'move';
        },
        dragoverHandler(event){
            event.dataTransfer.dropEffect = 'move';
        },
    }
}
</script>

<style>

</style>