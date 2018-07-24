<template>
    <div class="cards-window">
        <div class="content1">
            <span> Card Type: {{this.cardsData.cardType}} </span>
        </div>
        <div class="content2">
            <span> Card Number: {{this.cardsData.cardNumber}} </span>
        </div>
        <div class="content3">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#paymentSuccessModal">Use this card</button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="paymentSuccessModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <PaymentSuccess url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Blue_check.svg/480px-Blue_check.svg.png"></PaymentSuccess>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Modal -->
    </div>
</template>
<script>
import PaymentSuccess from './PaymentSuccess.vue'

export default {
    props: ['cardsData', 'filteredData'],
    components: {
        PaymentSuccess
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
