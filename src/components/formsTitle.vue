<template>
	<header>
		<div class="h1">
			<a class="a1">收入</a>
			<a class="a2">支出</a>
		</div>
		<img src="../assets/img/fromTitle-search.png" alt="">
	</header>
</template>

<script type="text/ecmascript-6">
	export default {
		name:'fromsTitle'
	}
</script>

<style scoped lang="scss">
	header{
	display:flex;
	height:.48rem;
	background:#fed955;
	align-items:center;
	box-sizing:border-box;
	.h1{
		margin-left:.8rem;
		width:2rem;
		height:.3rem;
		border:2px solid #000000;
		border-radius:.025rem;
		display:flex;
		a{
			flex:1;
			display:flex;
			align-items:center;
			justify-content:center;
			font-size:.13rem;
			color:#333333;
		}
		.a2{
			background: #000;
			color: #fed955;
		}
	}
	img{
		margin-left:.35rem;
		width:.25rem;
		height:.25rem;
	}
}
</style>