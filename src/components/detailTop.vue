<template>
    <div class="top">
      <div class="top_left">
        <p class="year" id="year">{{value.getFullYear()}}</p>
        <p class="month_box"><span id="month">{{value.getMonth()+1}}</span>月</p>

        <div class="block">
          <!-- <span class="demonstration"></span> -->
          <el-date-picker
            v-model="value"
            type="month"
            placeholder="选择月"
            style="opacity:0;position:fixed;left:0;top:60px;width: .75rem;height:.44rem;">
          </el-date-picker>
        </div>
      </div>


      <div class="top_right">
        <detailTopMoney v-for="(key,val,index) in moneys"  :name="key" :key="index" :money="val"></detailTopMoney>     
      </div>
    </div>
</template>


<script >
import detailTopMoney from "./detailTopMoney"
export default {
  name: 'detail',
  components:{
      detailTopMoney
  }
  ,
  data () {
    return {

        value:new Date(),
        moneys:{"收入":2000,"支出":1000,"结余":1000}

    }
  },
  methods:{

  },
  updated:function(){
    console.log(this.value);
    let month = this.value.getMonth();
    this.$emit("changeMonth",month);
  },
  mounted:function(){
           
  }
}
</script>


<style scoped  lang="scss">
  .top {
    background: #fff;
    height: .75rem;
    box-sizing: border-box;
    border-top: 1px solid #a5a8b2;
    border-bottom: 1px solid #a5a8b2;
    display:-webkit-flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem 0;

    .top_right{
      height: 70%;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 .25rem;
      border-left: 1px solid #666;
     
    }
  }

    .top_left{
      box-sizing: border-box;
      padding: 0 .15rem;
      height: 100%;
      width: .75rem;
      font-size: .12rem;
      display: -webkit-flex;
      flex-direction: column;
      align-items: flex-start;
      #year{
        color: #797979;
        margin-bottom: .1rem;
      }
      .month_box{
        color: #3b3b3b;
        width: .4rem;
        background: url(../assets/img/month_down.png) right center no-repeat;
        background-size:.1rem .1rem;
        #month{
          color: #2b2b2b;
          font-size: .16rem;
        }
      }
    }



</style>