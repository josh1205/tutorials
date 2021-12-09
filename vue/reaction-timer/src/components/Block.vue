<template>
    <div class="block" @click.self="closeBlock">
        <slot></slot>
    </div>
</template>

<script>

export default {
    methods: {
        closeBlock() {
            this.$emit('close')
        },
        mounted() {
            console.log('mounted')
        },
        updated() {
            console.log('component updated')
        }
    }
}
</script>


<style>
    .block {
        width: 300px;
        height: 300px;
        padding: 10px;
        margin: 50px auto;
        background: white;
        border-radius: 10px;
        background-color: green;
    }

    h3 {
        color: white;
    }

</style>