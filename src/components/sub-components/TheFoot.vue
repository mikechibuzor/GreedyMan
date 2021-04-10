<template>
    <div class="footer flex items-center justify-between text-xs">
<<<<<<< HEAD
        <p>Maximum moves: {{ maxMoves}}</p>
        <p>Total moves: {{ moves }}</p>
=======
        <p>Maximum moves: {{ moves}}</p>
        <p>Total moves: 12</p>
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
    </div>
</template>

<script>
export default {
    props:['gridnumber'],
    computed:{
        moves(){
<<<<<<< HEAD
            return this.$store.getters['getMoves'];
        },
        maxMoves(){
            const maxMoves = Math.round((Number(this.gridnumber) * Number(this.gridnumber)) / 2);
            this.$store.dispatch({
                type: "updateMaximumMoves",
                value: maxMoves,
            });
            return maxMoves;
        },
    },
=======
            return Math.round((Number(this.gridnumber) * Number(this.gridnumber)) / 2);
        }
    }
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
}
</script>

<style scoped>
    .footer{
        height: 8%;
    }
</style>