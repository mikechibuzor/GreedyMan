<template>
  <div :id="id"  @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler" class="cell border  border-primary-color flex items-center justify-center cursor-pointer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods:{
      dragoverHandler(event){
          event.dataTransfer.dropEffect = 'move';
      },
      dropHandler(event){
        const child = document.getElementById(event.getData('application/my-app'));
        event.target.appendChild(child);
      }
  },
}
</script>

<style scoped>

</style>