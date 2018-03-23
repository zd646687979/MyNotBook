<template>
  <div class="In">
      <ul class="goodslistcss">
      <li class="lis" v-for="item in goodslist">
        <span class="sp1">
            <i class="iconfont" :class="item.picname"></i>
        </span>
        <span class="sp2">{{item.goodsname}}</span>
      </li>
      
      <li class="addset">
        <span class="sp1">
            <img src="../assets/img/addset.png"/>
        </span>
        <a href="javascript:;">设置</a>
      </li>
    </ul>
  </div>
    
</template>

<script>
import $ from 'jquery';
// import tools from "../assets/js/tools.js";

export default {
  name: 'recordIn',
  mounted:function(){
       $(".lis .sp1").click(function(){
        $(this).css("background-color","#fed955").closest(".lis").siblings().find(".sp1").css("background-color","#fafafa");
      });
  },

  // mounted(){
  //    tools.changeColor();
  // },
  data () {
    return {
      goodslist: [
        {"picname":"icon-gongzi","goodsid":"01001","goodsname":"工资"},
        {"picname":"icon-qiandai","goodsid":"01002","goodsname":"其他"},
        {"picname":"icon-jianzhi","goodsid":"01003","goodsname":"兼职"},
        {"picname":"icon-licaishouyi","goodsid":"01004","goodsname":"理财"},

        {"picname":"icon-lijin","goodsid":"01005","goodsname":"礼金"},
        {"picname":"icon-jijin","goodsid":"01006","goodsname":"基金"},
        {"picname":"icon-tuikuan","goodsid":"01007","goodsname":"收红包"},
        {"picname":"icon-gupiao","goodsid":"01008","goodsname":"股票"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.In{
  flex:1;
  background: #f5f5f5;
}
.goodslistcss{
  /*flex:1;*/
  width:100%;
  display: flex;
  flex-wrap: wrap;
  background: #f5f5f5;
}
ul{
  display: flex;
}
li{
  width: 25%;
  text-align: center;
  margin-top: 0.1rem;
}
.sp1{
  display: flex;
  width:0.48rem;
  height:0.48rem;
  background: pink;
  border-radius: 50%;
  margin:0 auto;
  align-items: center;
  justify-content: center;
  background: #fafafa;
}
.sp1 img{
  display: block;
  width:0.22rem;
  height:0.22rem;
}
.iconfont{
  display: block;
  font-size: 0.22rem;
}
.sp2,a{
  display: block;
  font-size: 0.09rem;
  line-height: 0.27rem;
  color: #686868;
}
.icon-shezhi-xue{
  color: #fed955;
}

</style>