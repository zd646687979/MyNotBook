<template>
    <div>
      <p class="top_right_top">{{name}}(元)</p>
      <p class="money"> {{money}} </p>
    </div>
</template>

<script >
export default {
  name: 'detail',
  props:["name","money"]
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

      .top_right_top{
        font-size: .12rem;
        color: #828282;
        line-height: .17rem;
        height: .17rem;
      }  
      .money{
        font-size: .12rem;
        color:#333;
        line-height: .21rem;
        height: .21rem;
      }
    




</style>