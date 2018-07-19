<template>
    <div class="success-window">
        <img :src="url"/>
        <h2> Payment Successful! </h2>
        <button type="button" data-dismiss="modal" class="btn btn-primary">Done</button>
    </div>
</template>
<script>
export default {
    props: ['url']  //Temporary 
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
    .success-window button[type=button] {
        margin-top: 10px;
    }
</style>

