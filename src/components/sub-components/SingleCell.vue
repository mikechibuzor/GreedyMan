<template>
<<<<<<< HEAD
  <div :id="id"  @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler" class="cell  transition-all duration-200 ease-linear border pointer-none  border-primary-color flex items-center justify-center">
=======
  <div :id="id"  @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler" class="cell border  border-primary-color flex items-center justify-center">
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
    <slot></slot>
  </div>
</template>

<script>
<<<<<<< HEAD

=======
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
export default {
  props: ['id'],
  methods:{
      dragoverHandler(event){
          event.dataTransfer.dropEffect = 'move';
      },
      dropHandler(event){
        const child = document.getElementById(event.dataTransfer.getData('application/my-app'));
<<<<<<< HEAD
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
=======
        event.currentTarget.append(child);
        console.log(child);
      }  
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
  },
}
</script>

<style scoped>

</style>