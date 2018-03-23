<template>

        <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/img/lun1.png"></div>
          <div class="swiper-slide"><img src="../assets/img/lun2.png"></div>
          <div class="swiper-slide"><img src="../assets/img/lun3.png"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div> 
    </div>

</template>

<script>
import Swiper from 'swiper';
import "../assets/css/swiper-4.1.6.min.css";
export default {
  name: 'findLunbotu',
  data () {
    return {

    }
  },
  mounted:function(){
      var swiper = new Swiper('.swiper-container', {
      direction:'horizontal',
      speed:3000,
      loop:true,
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
     
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 3.6rem;
    /*height: 1.43rem;*/
    height: 1.43rem;
    margin-top:0.1rem;
    margin-bottom:0.1rem;
  }  
</style>