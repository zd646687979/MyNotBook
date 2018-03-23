<template>
	<header>
		<div class="h1">
			<a href="#/detail"><img src="../assets/img/record-jt.png" alt=""></a>
			<span>记一笔</span>
		</div>
		<div class="h2">
			<div class="a">
				<a href="#/recordIn" class="aa a1">收入</a>
				<a href="#/recordOut" class="aa a2">支出</a>
			</div>
		</div>

	</header>
</template>

<script type="text/ecmascript-6">
	import $ from "jquery"
	export default {
		name:'fromsTitle',
		mounted:function(){
			 $(".a .aa").click(function(){
          $(this).css({"background-color":"#000000","color":"#f8d453"}).siblings().css({"background-color":"#fed955","color":"#333333"});
        });
		}
	}
</script>

<style scoped lang="scss">
	header{
		display:flex;
		height:.8rem;
		flex-direction:column;
		background:#fed955;
		// align-items:center;
		// box-sizing:border-box;
		.h1{
			display:flex;
			align-items:center;
			height:.32rem;
			img{
				margin-left:.12rem;
				width:.14rem;
				height:.24rem;
			}
			span{
				margin-left:1.25rem;
				font-size:.15rem;
				font-weight:600;
			}
		}
		.h2{
			height:.48rem;
			display:flex;
			align-items:center;
			justify-content:center;
			.a{
				width:2.6rem;
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

				}
				.a1{
					color:#333333;
				}
				.a2{
					background-color:#000000;
					color:#f8d453;
				}
			}
		}
	}
</style>
