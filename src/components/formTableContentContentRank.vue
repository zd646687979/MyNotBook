<template>
        <div class="from_rank">
            <div class="rank_title">支出排行榜</div>
            <ul class="rank_content">
                <li v-for="data in datas" :key="data.name">
                    <div class="img"><i class="iconfont" :class="data.iconname"></i></div>
                    <div class="rank_right">
                        <div class="rank_right_top">
                            <div><span class="rank_right_top_left">{{data.name}}</span><span>{{parseInt(data.money/allmoney*10000)/100}}%</span></div>
                            <div class="money">{{data.money}}</div>
                        </div>
                        <div class="rank_right_bottom"><p :style="{width:parseInt(data.money/allmoney*10000)/100+'%'}"></p></div>
                    </div>
                </li>
            </ul>
        </div> 
</template>


<script >
export default {
  name: '',
  props:["datas","allmoney"],
  components:{
  }
  ,
  data () {
    return {
        
    }
  },
  created:function(){

  }
//components:{
//  
//}
}
</script>


<style scoped  lang="scss">

.from_rank{
        .rank_title{
            height: .29rem;
            line-height:.29rem;
            box-sizing: border-box;
            border-top:1px solid #bababa ;
            border-bottom:1px solid #bababa ;
            padding-left: .15rem;
            font-size:.12rem;
            color:#707070;
        }
        .rank_content{
            background: #fff;
            box-sizing: border-box;
            font-size:.12rem;
            color:#666;
            li{
                height: .5rem;
                box-sizing: border-box;
                padding-left:.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .img{
                    line-height:.3rem;
                    height: .3rem;
                    width: .3rem;
                    background: #fed955;
                    border-radius: 50%;
                    text-align: center;
                    margin-right: .1rem;
                }
                .rank_right{
                    flex:1;
                    height: 100%;
                    box-sizing: border-box;
                    border-bottom: 1px solid #787878;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .rank_right_top{
                        line-height: .21rem;
                        height: .21rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .rank_right_top_left{
                            margin-right:.1rem;
                        }
                        .money{
                            margin-right: .15rem
                        }
                    }
                    .rank_right_bottom{
                        height: .09rem;
                        box-sizing: border-box;
                        padding:2px 0;
                        width: 100%;
                        p{
                            border-radius: 5px;
                            background: #fed955;
                            width:86.81%; 
                            height: .05rem;
                        }
                    }
                }
            }
        }
    }

</style>