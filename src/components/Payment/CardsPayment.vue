<template>
    <div class="cards-window">
        <div class="content1">
            <span> Card Type: {{this.cardsData.cardType}} </span>
        </div>
        <div class="content2">
            <span> Card Number: {{this.cardsData.cardNumber}} </span>
        </div>
        <div class="content3">
            <b-btn @click="showModal"> Use this card </b-btn>
        </div>
    </div>
</template>
<script>

export default {
    props: ['cardsData', 'filteredData'],
    methods: {
        showModal() {
            this.$emit('showModal');
        }
    }
}
</script>
<style>
    .cards-window {  
        display: flex;
        flex-direction: column;
        height: auto;
        flex-wrap: nowrap;
        margin-top: 20px;
    }
    .content1 {
        display: flex;
        justify-content: flex-start;
    }
    .content2 {
        display: flex;
        justify-content: flex-start;
    }
    .content3 {
        display: flex;
        justify-content: flex-end;
    }
    .modal-content {
        border: 0 !important;
    }
</style>
