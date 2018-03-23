<template>
    <div id="detail">
      <detailTop @changeMonth="changeDatas"></detailTop>
      <div class="content">
        <div v-for="(data,index) in datas" :key="index">
            <detailContentTop :title="data.title"></detailContentTop>
            <detailContentContent v-for="(contents,index) in data.content" :key="index"  :contents="contents"></detailContentContent>
        </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import $ from "jquery"
import Vue from "vue"
import detailTop from "./detailTop.vue"
import detailContentTop from "./detailContentTop"
import detailContentContent from "./detailContentContent"

export default {
  name: 'detail',
  methods:{
      changeDatas:function(index){
          this.getDatas(this,index)
      }
      ,
      getDatas:function(that,month){
        $.ajax({ 
          type: "GET", 
          url: "http://localhost:3000/detail?month="+month, 
          cache:false, 
          async:false, 
          dataType:"json",
          success: function(xmlobj){ 
              console.log("==================================================");
              if(xmlobj){
                that.datas = xmlobj;  
              }else{

                that.datas = [];
              }
              console.log(xmlobj);
              console.log(that.datas)
          }
        }) 
      }
  },
  beforeMount:function(){
    let month = new Date().getMonth();
    // 
    this.getDatas(this,month);

  },
  mounted:function(){
    this.$emit("echangtop","detailTitle");
    this.$emit("echangbottom","bottom");
  },
  components:{
    detailTop,
    detailContentTop,
    detailContentContent
  }
  ,
  data () {
    return {
      datas:null
    }
  }
}
</script>


<style scoped  lang="scss">
#detail {
 display: -webkit-flex;
 flex:1;
 flex-direction: column;
 justify-content: space-between;
 height: 100%;
  }
  .content{
      height: 100%;
      overflow-y: auto;
      margin-bottom:.2rem;
    }
</style>
