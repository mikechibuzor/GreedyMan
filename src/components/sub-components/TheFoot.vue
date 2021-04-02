<template>
    <div class="footer flex items-center justify-between text-xs">
        <p>Maximum moves: {{ moves}}</p>
        <p>Total moves: 12</p>
    </div>
</template>

<script>
export default {
    props:['gridnumber'],
    computed:{
        moves(){
            return Math.round((Number(this.gridnumber) * Number(this.gridnumber)) / 2);
        }
    }
}
</script>

<style scoped>
    .footer{
        height: 8%;
    }
</style>