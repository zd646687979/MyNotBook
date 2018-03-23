<template>
 <div class="eightPic"> 
        <a href="#">
            <img src="../assets/img/eight1.png"/>
            <span>高额贷款</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight2.png"/>
            <span>光大银行</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight3.png"/>
            <span>兴业银行</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight4.png"/>
            <span>交通银行</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight5.png"/>
            <span>浦发银行</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight6.png"/>
            <span>招商银行</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight7.png"/>
            <span>平安银行</span>
        </a>

        <a href="#">
            <img src="../assets/img/eight8.png"/>
            <span>华夏银行</span>
        </a>
      </div>

</template>

<script>

export default {
  name: 'findEightPic',
  data () {
    return {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .eightPic{
  width: 100%;
  display: flex;
  background: #ffffff;
  flex-wrap: wrap;
  border-bottom:1px solid #eeeeee;
}

.eightPic a{
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top:1px solid #eeeeee;
  border-right:1px solid #eeeeee;
  box-sizing: border-box;
  height: 0.9rem;
}
.eightPic a:nth-child(4),
.eightPic a:nth-child(8)
{
  border-right:none;
}
.eightPic a img{
  display: block;
  width: 0.65rem;
  height: 0.5rem;

}
.eightPic a span{
  display: block;
  font-size: 0.12rem;
  color: #666666;
}

</style>