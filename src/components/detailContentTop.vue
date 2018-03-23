<template>
    <div class="content_top">
        <div class="content_top_left">
            <div class="first">{{title.day}}日</div>
            <div>星期{{title.weekday}}</div>
        </div>
        <div class="content_top_right">
            <div class="first">支出:{{title.income}}</div>
            <div>收入:{{title.outmoney}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detail',
  components:{
      
  },
  props:["title"]
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
     .content_top{
        height: .35rem;
        box-sizing: border-box;
        font-size: .12rem;
        color: #515151;
        padding: 0 .15rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      .content_top_left,.content_top_right{
        width: 1rem;
        display: flex;
        justify-content: space-between
        span {
          display: block
        }
        .first{
          margin-right: .05rem;
        }
      }
      .content_top_right{
        min-width: 1.3rem;
        .first{
           margin-right: .05rem;
        }
      }
      }



</style>