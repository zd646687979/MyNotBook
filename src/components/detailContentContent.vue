<template>
   <ul class="content_content">
      <li class="content_content_box">
          <div class="content_box_left_img">
              <i class="iconfont" :class="contents.iconname"></i>
          </div>
          <div class="content_box" >
              <div class="content_box_left">
                  <div class="time">{{contents.outtime}}</div>
                  <div class="name">{{contents.outname}}</div>
              </div>
              <div class="content_box_right">{{contents.outmoney.toString()+".00"}}</div>
          </div>
      </li>
  </ul>
</template>


<script >
export default {
  name: 'detail',
  props:["contents"],
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
        .content_content{
      background: #fff;
      .content_content_box{
        width: 100%;
        height: .6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .15rem;
        font-size: .12rem;
        color: #797979;
        box-sizing: border-box;
        .content_box_left_img{
          width: .3rem;
          height: .3rem;
          background: #fed955;
          line-height: .3rem;
          text-align: center;
          border-radius: 50%;
          margin-right:.1rem;

          i{
            display: block;
          }
        }
        .content_box{
          height: 100%;
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
          border-bottom:1px solid #bababa;
          
        }
      }
    }


</style>