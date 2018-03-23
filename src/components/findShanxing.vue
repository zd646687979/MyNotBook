<template>
    <div id="main">
      
    </div>
</template>

<script>
// import echarts from "../assets/js/echarts.min.js";
// import shanxing from "../assets/js/shanxing.js";

    export default {
      name: 'findShanxing',
      mounted:function(){
        var baifenbi = parseInt((this.logo[1].value/(this.logo[0].value+this.logo[1].value))*1000)/100+"%";

        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,

                   
                    // label: {
                    //     normal: {
                    //         show: false,
                    //         position: 'center'
                    //     },
                    //     emphasis: {
                    //         show: true,
                    //         textStyle: {
                    //             fontSize: '30',
                    //             fontWeight: 'bold'
                    //         }
                    //     }
                    // },

                    label: {
                          normal: {
                              show: true,
                              position: 'center',
                              formatter:function (argument) {
                                  var html;
                                  html='剩 余\r\n'+baifenbi;
                                  return html;
                              },
                         textStyle:{
                                 fontSize: 13,
                                 color:'#666666'
                              }
                            }

                    },

                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:this.logo
                }
            ]
        };
         myChart.setOption(option);
        },
      data () {
          return {
        
          }
      },
      props:['logo']
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
  width: 1rem;
  height: 1rem;
  margin:0rem 0.1rem 0.05rem 0.1rem;
}


</style>