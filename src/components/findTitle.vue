<template>
	<header>
		<div></div>
		<a class="a1">发现</a>
		<img src="../assets/img/detailTitle-person.png" alt="">
	</header>
</template>

<script type="text/ecmascript-6">
	export default {
		name:'top'
	}
</script>

<style scoped lang="scss">
	header{
	display:flex;
	height:.48rem;
	background:#fed955;
	align-items:center;
	padding:0 .2rem;
	box-sizing:border-box;
	justify-content:space-between;
	a{
		display:inline-block;
		font-weight:600;
		text-align:center;
		box-sizing:border-box;
		font-size:.17rem;
		color:#333333;
	}
	div{
		width:.25rem;
	}
	img{
		width:.25rem;
		height:.25rem;
	}
}
</style>