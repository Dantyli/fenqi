<template>
    <div class="bz">
      <h2>抱歉，您的余额不足</h2>
      <!-- <img src="../../assets/noenu.png" alt="" /> -->
      <p class="opt">
          <router-link :to="`/bindcard?from=${from}`" replace tag="button">添加新卡</router-link>
          <router-link :to="`/${from}`" replace tag="button">去充值，重新支付</router-link>
      </p>
      <!-- <div class="tips">
          <p>注：本平台不提供充值</p>
          <p>请到银行app、支付宝或者微信进行充值</p>
      </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            from:''
        }
    },
    created(){
        this.from=this.$route.query.from;
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';
.bz{
    @include bkg;
    //padding-top: 0;
    text-align: center;
    img{
        width: 100%;
       // margin-top: 30px;
    }
    h2{
        text-align: center;
        line-height: 40px;
        padding-top: 30%;
    }
    .tips{
        color: #f00;
        font-size: 12px;
        margin-top: 50px;
    }
    .opt{
        margin: 50px 0;
        //margin-top: 100px;
        button{
            height: 45px;
            line-height: 45px;
            font-size: 14px;
            margin: 10px;
            border-radius: 5px;
            outline: none;
        }
        button:nth-of-type(1){
            width: 90px;
            background: #fff;
        }
        button:nth-of-type(2){
            width: 150px;
            border: none;
            background: #4169E1;
            color: #fff;
        }
    }
}
</style>


