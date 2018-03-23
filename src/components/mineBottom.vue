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
		name:'mineBottom',
		data (){
			return {
				msg:[
					{"pic":"../static/img/mine-4.png","text":"推荐预记智能账本给好友","pic1":"../static/img/mine-jt.png"},
					{"pic":"../static/img/mine-5.png","text":"去应用市场给预记智能账本评分","pic1":"../static/img/mine-jt.png"},
					{"pic":"../static/img/mine-6.png","text":"黄盒子有奖意见箱","pic1":"../static/img/mine-jt.png"},
					{"pic":"../static/img/mine-7.png","text":"关于预记智能账本","pic1":"../static/img/mine-jt.png"},
					{"pic":"../static/img/mine-8.png","text":"Q0群(一键进群)592818414","pic1":"../static/img/mine-jt.png"}
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
		margin-bottom:.58rem;
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