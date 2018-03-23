<template>
     <div class="zhuanxiang">
        <p>专享服务</p>
        <div class="xiamian">
          <a href="#">
            <img src="../assets/img/jisuanqi1.png"/>
            <span>房贷计算器</span>
          </a>
          <a href="#">
            <img src="../assets/img/jisuanqi2.png"/>
            <span>车贷计算器</span>
          </a>
          <a href="#">
            <img src="../assets/img/jisuanqi3.png"/>
            <span>理财计算器</span>
          </a>

        </div>
      </div>


</template>

<script>

export default {
  name: 'findZhuanxiang',
  data () {
    return {

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zhuanxiang{
    width: 100%;
    height: 0.97rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
     margin-top: 0.05rem
  }
  .zhuanxiang p{
    font-size:0.12rem;
    margin-left:0.16rem;
    height: 0.27rem;
    line-height: 0.27rem;
  }
  .xiamian{
    flex: 1;
    background: #ffffff;
    align-items: center;
    display: flex;
  }
  .xiamian a{
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .xiamian a img{
    display: block;
    width: 0.3rem;
    height: 0.31rem;
  }
  .xiamian a span{
    display: block;
    font-size: 0.12rem;
    color: #666666;
  }
</style>