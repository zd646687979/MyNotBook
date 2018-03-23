<template>
  <div class="Out">
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
  name: 'recordOut',
   mounted:function(){
    this.$emit("echangtop","recordTitle");
     this.$emit("echangbottom","");
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
        {"picname":"icon-leicanyinzhusux","goodsid":"01001","goodsname":"餐饮"},
        {"picname":"icon-50","goodsid":"01002","goodsname":"日常"},
        {"picname":"icon-gouwu","goodsid":"01003","goodsname":"购物"},
        {"picname":"icon-jiaotong","goodsid":"01004","goodsname":"交通"},

        {"picname":"icon-huluobu","goodsid":"01005","goodsname":"果蔬"},
        {"picname":"icon-rolled","goodsid":"01006","goodsname":"日用"},
        {"picname":"icon-maozi","goodsid":"01007","goodsname":"学习"},
        {"picname":"icon-fushi","goodsid":"01008","goodsname":"服饰"},

        {"picname":"icon-tongxun","goodsid":"01009","goodsname":"通讯"},
        {"picname":"icon-huankuan","goodsid":"01010","goodsname":"还款"},
        {"picname":"icon-yiliao","goodsid":"01011","goodsname":"医疗"},
        {"picname":"icon-pijiu","goodsid":"01012","goodsname":"烟酒"},

        {"picname":"icon-yule","goodsid":"01013","goodsname":"娱乐"},
        {"picname":"icon-icon-test","goodsid":"01014","goodsname":"发红包"},
        {"picname":"icon-qiche","goodsid":"01015","goodsname":"汽车"},
        {"picname":"icon-fushi","goodsid":"01016","goodsname":"美容"},

        {"picname":"icon-shuazi","goodsid":"01017","goodsname":"社交"}
       
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Out{
  flex:1;
  background: #f5f5f5;
}
.goodslistcss{
  width:100%;
  display: flex;
  flex-wrap: wrap;
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