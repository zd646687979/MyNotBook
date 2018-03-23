<template>

<div class="month">
          <a class="month_one" href="#">
            <p>
              <span>月度账单</span>
              <img src="../assets/img/youjian.png"/>
            </p>
            
            <div class="div1">
              <div class="div1_left">
                <span>03</span> 
                <span>&nbsp;&nbsp;月</span>
              </div>

              <div class="div1_right">
                  <a class="a1 a11" href="#">
                    <span class="spa1">收入(元)</span>
                    <span class="spa2">20000</span>
                  </a>
                  <a class="a1" href="#">
                    <span class="spa1">收入(元)</span>
                    <span class="spa2">20000</span>
                  </a>
                  <a class="a1 a33" href="#">
                    <span class="spa1">收入(元)</span>
                    <span class="spa2">20000</span>
                  </a>
              </div>

            </div>


          </a>
      </div>
</template>

<script>
    export default {
      name: 'findMonth',
      data () {
        return {

        }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .month{
  width: 100%;
  height: 0.95rem;
  background: #ffffff;
}
.month_one{
  display: block;
  display: flex;
  width: 100%;
  height: 0.95rem;
  flex-direction: column;
}
.month_one p{
  display: flex;
  justify-content: space-between;
  height: 0.48rem;
  align-items: center;
  width: 100%;
}
.month_one p span{
  font-size: 0.13rem;
  color:#373737;
  margin-left: 0.16rem;
}
.month_one p img{
  display: block;
  width: 0.22rem;
  height: 0.22rem;
  margin-right: 0.1rem;
}
.div1{
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
}
.div1_left{
  display: flex;
  width: 0.71rem;
  height: 0.3rem;
  border-right: 1px solid #bababa;
  justify-content: center;
  align-items: center;
}
.div1_left span:nth-child(1){
  font-size: 0.2rem;
  color: #333333;
}
.div1_left span:nth-child(2){
  font-size: 0.1rem;
   color: #333333;
}
.div1_right{
  flex:1;
  height: 100%;
  display: flex;
  justify-content:space-between;
}
.a1{
  display: block;
}
.a1 .spa1{
  font-size: 0.12rem;
  display: block;
  color: #787878;
  margin-top: 0.05rem;
}
.a1 .spa2{
  font-size: 0.14rem;
  display: block;
  color: #3e3e3e;
  margin-top: 0.05rem;
}
.a11{
  margin-left: 0.27rem;
}
.a33{
  margin-right: 0.25rem;
}

</style>