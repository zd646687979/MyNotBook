<template>
	<div class="s3">
			<div class="d1" v-for="i in msg">
				<div class="d2">
					<img v-bind:src="i.pic" class="img1">
					<span class="span1">{{i.text}}</span>
				</div>
				<img v-bind:src="i.pic1" class="img2">
			</div>
		</div>
</template>

<script>
	export default {
		name:'mineCenter',
		data () {
			return {
				msg:[
					{"pic":"../static/img/mine-1.png","text":"密码设置","pic1":"../static/img/mine-jt.png"},
					{"pic":"../static/img/mine-2.png","text":"类别管理","pic1":"../static/img/mine-jt.png"},
					{"pic":"../static/img/mine-3.png","text":"高级功能","pic1":"../static/img/mine-jt.png"}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.s3{
		margin-top:.13rem;
		display:flex;
		flex-direction:column;
		background:white;
		.d1{
			margin:0 .12rem;
			display:flex;
			justify-content:space-between;
			height:.5rem;
			align-items:center;
			border-bottom:1px solid #efefef;
			box-sizing:border-box;
			.d2{
				display:flex;
				.img1{
					margin-left:.05rem;
					width:.17rem;
					height:.17rem;
				}
				.span1{
					font-size:.13rem;
					color:#313431;
					margin-left:.05rem;  
				}
			}
			.img2{
				display:block;
				width:.1rem;
				height:.13rem;
			}
		}
	}
</style>