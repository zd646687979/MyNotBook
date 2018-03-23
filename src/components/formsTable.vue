<template>
     <div class="from_table">
         <div class="from_box">
                <div class="table_title">
                    <p class="content_change_botton" v-for="(allWeekData,index) in allWeekDatas" :key="index" @click="clickDt(allWeekData,index)">{{allWeekData.weekname}}</p>
                    <div class="abs"></div>
                </div>
                <div class="table_content">
                    <formTableContentContent v-bind:datas="allDatas"   ref="profile"></formTableContentContent>
                </div>
        </div>
    </div>
</template>


<script >

import $ from "jquery"
import formTableContentContent from "./formTableContentContent"
export default {
  name: '',
  components:{
      formTableContentContent
  }
  ,
  props:["allWeekDatas"]
  ,
  data () {
    return {
        allDatas:[],
        index:0
    }
  },
  beforeMount:function(){
      this.allDatas = this.allWeekDatas[this.allWeekDatas.length-1];
      this.index = this.allWeekDatas.length-1;
  },
  mounted:function(){
      this.inUi(".abs",this.allWeekDatas.length-1);
  },
  methods:{
      inUi:function(className,index){
          $(className).css({left:(index*0.72)+'rem'});
      },
      clickDt:function(a,index){
          this.$refs.profile.greet(a.days);
          this.allDatas = a;
          this.index = index;
          this.inUi(".abs",index);
      }
      ,
      greet:function(data){
          //x轴数组
          this.$refs.profile.greet(data.tableDatas[data.tableDatas.length-1].days);
          //最靠前的数据
          this.allDatas = data.tableDatas[data.tableDatas.length-1];
          
          this.inUi(".abs",data.tableDatas.length-1);
      }
//components:{
// 
//}
}
}
</script>


<style scoped  lang="scss">
    .from_table{
        background: #fff;

    }
    .from_box{
            .table_title{
                display: flex;
                flex-wrap: nowrap;
                flex-shrink: 1;
                height: .36rem;
                border-bottom: 1px solid #f5f5f5;
                position: relative;
                p{
                    width: .72rem;
                    height: .36rem;
                    line-height: .36rem;
                    text-align: center;
                    box-sizing: border-box;
                    font-size:.14rem ;
                    color: #222;
                }
                .abs{
                  width:.72rem;
                  height:3px;
                  background:#fed955;
                  position:absolute;
                  bottom:0;
                }
            }
            .table_content{
                overflow: hidden;
            }
        }

</style>