<template>
    <div class="success-window">
        <img :src="url"/>
        <h2> Payment Successful! </h2>
        <b-btn @click="closeModal">Done</b-btn>
    </div>
</template>
<script>
export default {
    props: ['url'],  //Temporary 
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
}
</script>
<style>
    .success-window {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .success-window img {
        height: 50px;
        width: 50px;
    }
    .success-window h2 {
        margin-top: 10px;
    }
</style>

