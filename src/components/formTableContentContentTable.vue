<template>
                <div id="main" style="height:3rem"  class="table_content">
                </div>
</template>


<script >
export default {
  name: '',
  props:["data"],
  components:{
  }
  ,
  methods:{
      greet:function(a){
        let myChart;
        let dayArr = [];
        let moneyAarr = [];
        for(let i = 0 ; i<a.length;i++){
            dayArr.push(a[i].day);
            moneyAarr.push(a[i].money);
        }
            myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            let option = {
                tooltip : {
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    top:"10%",
                    left: '5%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : dayArr
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'当天支出',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:moneyAarr
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
  }
  ,
  data () {
    return {
        
    }
  },
  watch:{

  }
  ,
  mounted:function(){
     let myChart;
        let dayArr = [];
        let moneyAarr = [];
        for(let i = 0 ; i<this.data.length;i++){
            dayArr.push(this.data[i].day);
            moneyAarr.push(this.data[i].money);
        }
            myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            let option = {
                tooltip : {
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    top:"10%",
                    left: '5%',
                    right: '5%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : dayArr
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'当天支出',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:moneyAarr
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
       
  }

</script>


<style scoped  lang="scss">
            .table_content{
                box-sizing: border-box;
            }
      
    

</style>