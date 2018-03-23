<template>
	<div class="center">
		<div class="s">
			<p class="c-1">待君登录</p>
			<p class="c-2">从此告别你的所有糊涂账~</p>
			<input type="text" v-model="username" autofocus="autofocus" @blur="user" placeholder="请输入用户名" class="i-1">
      <p class="p" v-if="isShow">{{msg}}</p>
			<input type="password" v-model="pass" @blur="psw" placeholder="请输入密码" class="i-2">
      <p class="p" v-if="isShow1">{{msg1}}</p>
			<div class="d">
				<input type="checkbox" class="i-3">
				<span>我已阅读,并同意用户协议</span>
			</div>
			<input type="submit" value="登录" class="i-4">
			<div class="d1">
				<div class="f-1">
					<a href=""><img src="../assets/img/login-2.png" alt=""></a>
					<span>微信登录</span>
				</div>
				<div class="f-2">
					<a href="#/detail"><img src="../assets/img/login-3.png" alt=""></a>
					<span>先用再说</span>
				</div>
			</div>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		name:'login',
    data(){
		    return {
		        username:"",
            pass:"",
            isShow:false,
            isShow1:false,
            msg:"",
            msg1:""

        }
    },
		mounted:function(){
			this.$emit("echangtop","");
			this.$emit("echangbottom","");
		},
    methods:{
        user:function(){
          var regu = /^[a-zA-Z_]\w{5,14}$/;
          if(!regu.test(this.username)){
            this.isShow=true;
            this.msg="用户名输入有误"
          }else{
            this.isShow=false
          }
        },
        psw:function(){
          var regp = /^([A-Z]|[a-z]|[0-9]){6,20}$/;
          if(!regp.test(this.pass)){
            this.isShow1=true;
            this.msg1="您输入的密码格式有误"
          }else{
            this.isShow1=false
          }
        }
    }
	}
</script>

<style scoped lang="scss">
	.center{
		flex:1;
		padding:0 .28rem;
		.s{
			display:flex;
			flex-direction:column;
			.c-1{
				margin-top:.58rem;
				font-size:.28rem;
				color:#3b3b3b;
				font-weight:400;
			}
			.c-2{
				margin-top:.26rem;
				font-size:.11rem;
				color:#616161;
			}
			.i-1{
				width:100%;
				margin-top:.41rem;
				/*margin-bottom:.15rem;*/
				height:.4rem;
				border:none;
				padding-left:.1rem;
				border-bottom:2px solid #fcd949;
			}
			.i-2{
				width:100%;
				height:.4rem;
				border:none;
				padding-left:.1rem;
				border-bottom:2px solid #fcd949;
			}
      .p{
        padding-left:.1rem;
        line-height:.3rem;
        height:.3rem;
        font-size:.16rem;
        color:red;
      }
			.d{
				margin-top:.24rem;
				display:flex;
				.i-3{
					width:.18rem;
					height:.18rem;
					color:#ffd94d;
				}
				span{
					margin-left:.06rem;
					font-size:.11rem;
					color:#767676;
					text-decoration:underline;
				}
			}
			.i-4{
				margin-top:.4rem;
				background:#fed955;
				border:none;
				border-radius:4px;
				height:.4rem;
				width:100%;
				display:flex;
				align-items:center;
				justify-content:center;
			}
			.d1{
				display:flex;
				margin-top:.68rem;
				.f-1,.f-2{
					flex:1;
					display:flex;
					justify-content:center;
					align-items:center;
					flex-direction:column;
					img{
						width:.53rem;
						height:.53rem;
					}
					span{
						font-size:.13rem;
						color:#5d5d5d;
					}
				}
				.f-1{

				}
			}
		}

	}
</style>
