<template>
    <div class="findCss">
        <!-- 月度账单 -->
        <findMonth></findMonth>
        <!-- 预算部分 -->
        <findYusuan></findYusuan>
        <!-- 专项服务 -->
        <findZhuanxiang></findZhuanxiang>
        <!-- 八张图部分 -->
        <findEightPic></findEightPic>
        <!-- 轮播图 -->
        <findLunbotu></findLunbotu>
        <!-- 玖富 -->
        <findJiufu></findJiufu>
        <!-- 最后两部分图片 -->
        <findTupianTwo></findTupianTwo>
    </div>
</template>

<script>
// import $ from 'jquery';
// import tools from "../assets/js/tools.js";
import findLunbotu from './findLunbotu.vue';
import findMonth from './findMonth.vue';
import findYusuan from './findYusuan.vue';
import findZhuanxiang from './findZhuanxiang.vue';
import findEightPic from './findEightPic.vue';
import findJiufu from './findJiufu.vue';
import findTupianTwo from './findTupianTwo.vue';

export default {
  name: 'find',
  components:{
    findLunbotu,
    findMonth,
    findYusuan,
    findZhuanxiang,
    findEightPic,
    findJiufu,
    findTupianTwo
  },
  mounted(){
    this.$emit("echangtop","findTitle");
    this.$emit("echangbottom","bottom");
     
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.findCss{
  background: #f7f7f7;
  flex: 1;
  overflow-y:auto;
  overflow-x: hidden;
}
</style>