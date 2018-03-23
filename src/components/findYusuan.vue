<template>
 <div class="yusuan">
        <p class="yusuan_p">
          <span>3月份预算</span>
          <a href="#">编辑预算</a>
        </p>

        <div class="yusuanTwo">
            <div class="shanxing">
              

            </div>

            <div class="shanxing_right">
              <p class="pp1">
                <span>剩余预算</span>
                <span>25744</span>
              </p>

              <p class="pp1 pp11">
                <span class="spp1">本月预算</span>
                <span class="spp2">30000</span>
              </p>

              <p class="pp1 pp11">
                <span class="spp1">本月支出</span>
                <span class="spp2">4256</span>
              </p>

            </div>

        </div>
      </div>

</template>

<script>

export default {
  name: 'findYusuan',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .yusuan{
  width: 100%;
  height: 1.31rem;
  background: #ffffff;
  margin-top:0.05rem;
  display: flex;
  flex-direction: column;
}
.yusuan_p{
  height: 0.38rem;
  line-height: 0.38rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.yusuan_p span{
  display: block;
  font-size: 0.12rem;
  color: #4a4a4a;
  margin-left: 0.16rem;
}
.yusuan_p a{
  display: block;
  font-size: 0.12rem;
  color: #999999;
  margin-right: 0.16rem;
}

.yusuanTwo{
  display: flex;
  flex: 1;
}

.shanxing{
  width: 1.4rem;
  background: red;









}

.shanxing_right{
  width: 1.93rem;
  display: flex;
  flex-direction: column;
}
.pp1 .spp1{
  color: #a0a0a0;
}
.pp1 .spp2{
  color: #a0a0a0;
}
.pp1{
  width: 100%;
  display: flex;
  line-height: 0.32rem;
  height: 0.32rem;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
}

.pp11{
  line-height: 0.25rem;
  height: 0.25rem;
  border-bottom: none;
}
.pp1 span{
  display: block;
  font-size: 0.12rem;
  color: #4a4a4a;
}

</style>