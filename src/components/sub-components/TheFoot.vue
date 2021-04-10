<template>
    <div class="footer flex items-center justify-between text-xs">
        <p>Maximum moves: {{ maxMoves}}</p>
        <p>Total moves: {{ moves }}</p>
    </div>
</template>

<script>
export default {
    props:['gridnumber'],
    computed:{
        moves(){
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
}
</script>

<style scoped>
    .footer{
        height: 8%;
    }
</style>