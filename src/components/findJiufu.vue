<template>
      <div class="jiufu">
        <div class="jiufu_left">
          <a class="aa1" href="#"><img src="../assets/img/jiufu.png"></a>
          <a href="#" class="aa2">
            <span>玖富理财</span>
            <span>国家 AA级信用平台！</span>
          </a>
        </div>

        <a class="jiufu_right" href="">
          <span>年化收益&nbsp;</span>
          <span>12</span>
          <span>&nbsp;%</span>
        </a>
      </div>

</template>

<script>

export default {
  name: 'findJiufu',
  data () {
    return {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .jiufu{
  height: 0.8rem;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  display: flex;
  background: #ffffff;
}

.jiufu_left{
  width: 60%;
  display: flex;
  align-items: center;
} 
.aa1{
  display: block;
  width: 0.71rem;
  
}
.aa1 img{
  width:0.6rem;
  height:0.6rem;
  margin-left: 0.07rem;
}
.aa2{
  display: flex;
  flex-direction: column;
}
.aa2 span{
  display: block;
}
.aa2 span:nth-child(1){
  display: block;
  font-size:0.12rem;
  color: #333333;
  line-height: 0.27rem;
}
.aa2 span:nth-child(2){
  display: block;
  font-size:0.1rem;
  color: #6d6d6d;
}

.jiufu_right{
  display: flex;
  flex: 1;
  align-items: center;
}
.jiufu_right span:nth-child(1){
  display: block;
   font-size: 0.11rem;
   margin-left: 0.42rem;
   color: #6d6d6d;
}
.jiufu_right span:nth-child(2){
  display: block;
  font-size: 0.2rem;
  color:#ff9c00;
}
.jiufu_right span:nth-child(3){
  display: block;
  font-size: 0.11rem;
  color:#ff9c00;
}
</style>