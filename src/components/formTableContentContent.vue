<template>

            <div class="from_box_content">
                <formTableContentContentTop v-bind:money="datas" ></formTableContentContentTop>

                <formTableContentContentTable v-bind:data="datas.days" ref="profile"></formTableContentContentTable>
               
               <formTableContentContentRank v-bind:datas="datas.anyone" v-bind:allmoney="datas.allMoney"></formTableContentContentRank>
            </div>
</template>


<script >
import formTableContentContentTop from "./formTableContentContentTop"
import formTableContentContentTable from "./formTableContentContentTable"
import formTableContentContentRank from "./formTableContentContentRank"
export default {
  name: '',
  components:{
      formTableContentContentTop,formTableContentContentTable,formTableContentContentRank
  },
  methods:{
      greet:function(a){
          this.$refs.profile.greet(a);
            
        }
    }
  ,
  props:["datas"],
  data () {
    return {

    }
  },
  beforeMount:function(){

  }
  ,
  mounted:function(){
           
  }
//components:{
//  
//}
}

</script>


<style scoped  lang="scss">
        .from_box{

            .table_content{
                height: 1.5rem;
            }
        }
        .from_box:nth-child(2),.from_box:nth-child(3){
            display: none;
        }



</style>