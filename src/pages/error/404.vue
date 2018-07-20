<template>
	<base-layout>
		<div slot="body">
			<div class="four04">
				<h1 class="h1-404">404</h1>
				<p>This is a missing page <br>look like.</p>
				<p><router-link class="btn backbtn" :to="{ name: 'home' }">Go back home</router-link></p>
			</div>
		</div>
	</base-layout>
</template>

<script>
import BaseLayout from '../../layouts/BaseLayout.vue';

export default {
	components: {
		BaseLayout
	}
}
</script>

<style scoped>
.four04 {
	background: url('/static/img/404bg.png');
	background-size: cover;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	color: #fff;
	text-align: center;
}

.h1-404 {
    font-size: 160px;
		margin-top: 100px;
		font-weight: bolder;
}

.backbtn {
    background-color: #f1c27d;
    padding: 10px;
    COLOR: #61523c;
    border-radius: 10px;
}
</style>
