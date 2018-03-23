<template>
	<div class="s1">
		<a href="#/login">
			<div class="d-top" >
				<div class="top">
					<a href=""><img src="../assets/img/mine-p.png" alt="" class="img1"></a>
					<span>亲,您还没登录呢！</span>
				</div>
				<img src="../assets/img/mine-jt.png" alt="" class="img2">
			</div>
		</a>
		
		<div class="d-bottom">
			<span class="span1">记账总天数0</span>
			<span class="span2">记账总笔数0</span>
			<span class="span3">已连续记账天数3</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'mineTop'

	}
</script>

<style scoped lang="scss">
	.s1{
			margin-top:.13rem;
			padding:.09rem 0 0;
			box-sizing:border-box;
			width:100%;
			background:white;
			display:flex;
			flex-direction:column;
			.d-top{
				background:white;
				padding:0 .13rem;
				box-sizing:border-box;
				display:flex;
				justify-content:space-between;
				align-items:center;
				.top{
					display:flex;
					font-size:.12rem;
					color:#4a4a4a;
					height:.44rem;
					background:white;
					align-items:center;
					a{
						width:.44rem;
						height:.44rem;
						margin-right:.09rem;
					}
					.img1{
						width:.44rem;
						height:.44rem;
						
					}
				}
				.img2{
					width:.1rem;
					height:.13rem;
				}
			}
			.d-bottom{
				background:white;
				padding:.11rem 0;
				display:flex;
				.span1{
					border-right:1px solid #b9b9b9;
					padding-left:.12rem;
				}
				.span3{
					padding-left:.13rem;
				}
				.span1,.span3{
					
					box-sizing:border-box;
					width:1.2rem;
				}
				.span2{
					flex:1;
					text-align:center;
					border-right:1px solid #b9b9b9;
				}
				span{
					font-size:.09rem;
					color:#8b8b8b;
				}
			}
		}
</style>