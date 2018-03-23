<template>
	<header>
		<a class="a1">预计智能账本</a>
		<img src="../assets/img/2.png" alt="" class="img1">
		<img src="../assets/img/detailTitle-person.png" alt="" class="img2">
	</header>
</template>

<script type="text/ecmascript-6">
	export default {
		name:'detailTitle'
	}
</script>

<style scoped lang="scss">
	header{
	display:flex;
	height:.48rem;
	background:#fed955;
	align-items:center;
	padding-left:1.17rem;
	box-sizing:border-box;
	// justify-content:center;
	a{
		display:inline-block;
		// width:.68rem;
		// line-height:.5rem;
		font-weight:600;
		text-align:center;
		box-sizing:border-box;
		// margin-left:1.34rem;
		font-size:.17rem;
		color:#333333;
	}
	.img1{
		width:.15rem;
		height:.1rem;
	}
	.img2{
		margin-left:.75rem;
		// margin-left:.13rem;
		width:.25rem;
		height:.25rem;
	}
}
</style>