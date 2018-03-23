<template>
    <div class="form">
        <div class="form_top">
            <div v-for="(data,index) in topDate" :key="index" class="change_box">
                <p>{{data.date}}</p>
            </div>
        </div>
       <formsTable v-bind:allWeekDatas="allDatas[yearIndex]"  ref="son"></formsTable>

    </div>
</template>

<script >
import $ from "jquery"
import formsTable from "./formsTable"
export default {
  name: '',
  components:{
      formsTable
  },
  data () {
    return {
        topDate:[{"date":"周"},{"date":"月"},{"date":"年"}],
        yearIndex:0,
        goodslist:[],
        allDatas:[]
    }
  },
  beforeMount:function(){
      let that = this;
      this.getDatas(this);
  },
  methods:{
    getDatas:function(that){
            $.ajax({ 
                type: "GET", 
                url: "http://localhost:3000/forms", 
                cache:false, 
                async:false, 
                dataType:"json",
                success: function(xmlobj){ 
                    console.log("==================================================");
                    that.allDatas = xmlobj;
                    
                } 

        });
    },
    changeCard:function(bottonClassName,that){
          $("."+bottonClassName).each(function(i){
                $(this).click(function(){
                    $(this).find("p").css({
                        "border-color": "#ddd",
                        "border-bottom-color":"#fff",
                        background: "#fff"
                    }).parent().siblings().find("p").css({
                            "border-color": "transparent",
                            background: "none"
                    })

                that.yearIndex = i ; 
                 that.$refs.son.greet({
                     "tableDatas":that.allDatas[that.yearIndex],
                     "yearIndex":i
                 });
                })
        })
    }
  },
  mounted:function(){
		console.log("----------------------");
        console.log(this.allDatas);

        this.$emit("echangtop","formsTitle");
        this.$emit("echangbottom","bottom");
        let that = this;
        this.changeCard("change_box",that);



  }
}
</script>


<style scoped  lang="scss">
.form{
    overflow-x: hidden;
	flex:1;
 .form_top{
        height: .38rem;
        box-sizing: border-box;
        border-bottom: 1px solid #bababa;
        display: flex;
        background: #f5f5f5;
        .change_box{
            width: 1.2rem;
            height: 100%;
            position: relative;
            p{
                z-index: 10;
                border: 1px solid transparent;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                color: #808080;
                font-size: .12rem;
                text-align: center;
                line-height: .3rem;
                height: .35rem;
                position: absolute;
                width: 100%;
                left: 0;
                bottom: -1px;
            }
        }
        .change_box:first-child{
            background: url(../assets/img/from_top_bg.png) right center no-repeat ;
            background-size:1px .15rem;
            p{
                border-left-color: transparent;
                left:-1px;
                border-color: #ddd;
                border-bottom-color:#fff;
                background: #fff
            }
        }
        .change_box:nth-child(2){
            width: 1.21rem;
            left: -1px;
        }
        .change_box:last-child{
            background: url(../assets/img/from_top_bg.png) left center no-repeat ;
            background-size:1px .15rem;
            p{
                left:-1px;
                border-right-color: transparent;
            }
        }
    }
   
}
</style>