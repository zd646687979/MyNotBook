<template>
	<footer>
		<a href="#/detail" class="far">
			<div class="rad rad1"><i class="iconfont icon-dayinzhangdan"></i></div>
			<span class="span1">明细</span>
		</a>
		<a href="#/forms" class="far">
			<div class="rad"><i class="iconfont icon-web-icon-"></i></div>
			<span class="span2">报表</span>
		</a>
		<a href="#/recordOut" class="far f2">
			<div class="d">
				<div class="d1"></div>
				<div class="d2"><span class="jia">+</span></div>
			</div>
			<span class="span3">记一笔</span>
		</a>
		<a href="#/find" class="far f3">
			<div class="rad"><i class="iconfont icon-faxian"></i></div>
			<span class="span4">发现</span>
		</a>
		<a href="#/mine" class="far">
			<div class="rad"><i class="iconfont icon-wode"></i></div>
			<span class="span5">我的</span>
		</a>
	</footer>
</template>

<script type="text/ecmascript-6">
import $ from "jquery";
	export default{
		name:'bottom',
		mounted:function(){
			  $(".far .rad").click(function(){
		        $(this).css("background-color","#fed955").closest(".far").siblings().find(".rad").css("background-color","#fafafa");
		      });

		}
	}
</script>

<style scoped lang="scss">
	footer{
		width: 100%;
		height: .5rem;
		display:flex;
		align-items:center;
		border-top:1px solid #bababa;
		box-sizing:border-box;
	}
.f2{
	
	.d{
		position:relative;
		top:-30px;
		left:-30px;
		z-index: 9999999999999999999999999999999;
		.d1{
			position:absolute;
			top:0;
			left:0;
			width:.5rem;
			height:.5rem;
			border-radius:50%;
			border-top:1px solid #c5c5c5;
		}
		.d2{
			position:absolute;
			top:8px;
			left:4px;
			display:flex;
			align-items:center;
			justify-content:center;
			width:.43rem;
			height:.43rem;
			border-radius:50%;
			background:#fed955;
			color:#333333;
			.jia{
				display:block;
				font-size:.4rem;
				font-weight:500;
			}
		}
	}
	.span3{
			display: block;
			font-size: .12rem;
			padding-top:25px;
		}
}
footer a .iconfont{
	display: block;
	font-size: 0.2rem;
	width:.23rem;
	height:.23rem;
}
footer a{
	-webkit-flex:1;
	color: #777777;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	height:.5rem;
	.rad{
		width:.23rem;
		height:.23rem;
		border-radius:50%;
		line-height:.23rem;
		text-align:center;
	}
	.rad1{
		background:#fed955;
	}
}
footer a .span1,.span2,.span4,.span5{
	display: block;
	font-size: .12rem;
	padding-top:5px;
}
</style>