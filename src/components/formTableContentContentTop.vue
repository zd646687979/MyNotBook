<template>
                 <div class="table_numbox">
                    <p class="auto_money">总支出:{{money.allMoney}}元</p>
                    <p class="mean_money">平均每笔消费:{{parseInt(money.allMoney/money.anyone.length*1000)/100}}元</p>
                    <p class="border"></p>
                </div>
</template>


<script >
export default {
  name: '',
  props:["money"],
  components:{
  }
  ,
  data () {
    return {
        
    }
  },
  mounted:function(){

  }
//components:{
//  
//}
}
</script>


<style scoped  lang="scss">
                        .table_numbox{
                height: .6rem;
                box-sizing: border-box;
                padding: .11rem .1rem .1rem;
                .auto_money{
                    font-size:.15rem ;
                    color:#757575;
                    line-height: .21rem;
                }
                .mean_money{
                    font-size:.12rem ;
                    color:#757575;
                    line-height: .18rem;
                }
                .border{
                    background: #bababa; 
                    height: 1px;

                }
            }
      
    

</style>