<template>
  <div id="app">
    <component :is="currentView"></component>
    <router-view v-on:echangtop="changetop" v-on:echangbottom="changebottom"></router-view>
    <component :is="currentView1"></component>
  </div>
</template>

<script>
import detailTitle from './components/detailTitle';
import formsTitle from './components/formsTitle';
import findTitle from './components/findTitle';
import mineTitle from './components/mineTitle';
import recordTitle from './components/recordTitle';
import bottom from './components/bottom';
export default {
  name: 'App',
  components:{
    detailTitle,
    findTitle,
    mineTitle,
    formsTitle,
    recordTitle,
    bottom
  },
  data (){
    return {
      currentView:'detailTitle',
      currentView1:"bottom"
    }
  },
  methods:{
    changetop:function(currtop){
      this.currentView = currtop;
    },
    changebottom:function(currbottom){
      this.currentView1 = currbottom;
    }
  }
}
</script>

<style></style>
