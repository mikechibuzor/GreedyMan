<template>
  <div :id="id"  @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler" class="cell  transition-all duration-200 ease-linear border pointer-none  border-primary-color flex items-center justify-center">
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
        const child = document.getElementById(event.dataTransfer.getData('application/my-app'));
        const parent = event.currentTarget;        
        [...parent.childNodes].forEach( node => {
          if(node.nodeName === "P"){
            this.$store.dispatch('foodEatenIncrease');
            node.classList.add('hidden');
          }
        });   
        parent.append(child);
        this.$store.dispatch('movesCount');
      },
  },
}
</script>

<style scoped>

</style>