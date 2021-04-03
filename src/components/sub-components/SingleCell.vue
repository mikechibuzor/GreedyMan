<template>
  <div @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler" class="cell border  border-primary-color flex items-center justify-center cursor-pointer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods:{
      dragoverHandler(event){
          event.dataTransfer.dropEffect = 'move';
      },
      dropHandler(event){
        const child = this.$refs.event.dataTransfer.getData('application/my-app');
        event.target.appendChild(child);
      }
  }
}
</script>

<style scoped>

</style>