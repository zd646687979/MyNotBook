<template>
  <div>
     <div class="tupian">
        <img src="../assets/img/tupian1.png"/> 
      </div>

      <div class="tupian_last">
        <a href="#"><img src="../assets/img/zuotu1.png"/></a>
        <a href="#"><img src="../assets/img/youtu1.png"/></a>

      </div>
  </div>
</template>

<script>

export default {
  name: 'findTupianTwo',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tupian{
  width: 100%;
  height: 1.13rem;
}
.tupian img{
  display: block;
  width: 100%;
  height: 1.13rem;
}

.tupian_last{
  width: 100%;
  height: 0.86rem;
  background: #ffffff;
  padding-top: 0.07rem;
  padding-bottom: 0.07rem;
  display: flex;
  justify-content: space-between;
}
.tupian_last a{
  display:block;
  width: 1.75rem;
  height: 0.85rem;
  background: red;
}
.tupian_last a img{
  display:block;
  width: 1.75rem;
  height: 0.85rem;
}

</style>