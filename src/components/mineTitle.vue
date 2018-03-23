<template>
	<header>
		<a class="a1">我的</a>
	</header>
</template>

<script type="text/ecmascript-6">
	export default {
		name:'mineTitle'
	}
</script>

<style scoped lang="scss">
	header{
	display:flex;
	height:.48rem;
	background:#fed955;
	align-items:center;
	justify-content:center;
	a{
		display:inline-block;
		font-weight:600;
		box-sizing:border-box;
		font-size:.17rem;
		color:#333333;
	}
}
</style>