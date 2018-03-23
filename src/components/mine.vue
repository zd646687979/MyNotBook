<template>
	<div>
		<mineTop></mineTop>
		<mineCenter></mineCenter>
		<mineBottom></mineBottom>
	</div>
</template>

<script type="text/ecmascript-6">
	import mineTop from "./mineTop.vue";
	import mineCenter from "./mineCenter.vue";
	import mineBottom from "./mineBottom.vue";
	export default {
		name:'mine',
		mounted:function(){
			this.$emit("echangtop","mineTitle");
			this.$emit("echangbottom","bottom");
		},
		components:{
			mineTop,
			mineCenter,
			mineBottom
		}
	}
</script>

<style scoped lang="scss">
	div{
		flex:1;
		background:#f7f7f7;
		overflow-y:auto;
	}
</style>