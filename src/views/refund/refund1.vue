<template>
    <div class="refund">
        <CommonHeader title="退款申请" />
        <div class="leave">
             <p>
                 <span class="tuijian">推荐</span>
                 <!-- <img src="../../assets/timg.jpeg" alt=""> -->
                 风险评级报告的费用为78元，根据此报告的信息，

我们在下一步的智能推荐环节，将可为您100%的匹配

到下款平台，甚至有可能为您直接申请到额度！
             </p>
             <button @click="getMoney" class="red">去领钱</button>
        </div>
         <div class="leave">
             <p>
                 <!-- <img src="../../assets/timg.jpeg" alt=""> -->
               没有拿到额度可能只是差一点运气，我们建议您不要直接放弃，送您价值199元最新VIP贷款口子，这些口子是与贷款机构内部深度合作全网最新，下款率高，每周持续推送，继续尝试申请，相信一定能拿到贷款。
                
             </p>
             <button @click="getMoney" class="blue">不退了，每周给我推送最新贷款口子</button>
        </div>
        <div class="leave">
             <p>
              若您仍然要退款，我们为没能服务好您表示非常遗憾，您可以点击下方按钮申请退款。
                
             </p>
             <router-link to="/s/refund" replace tag="button" class="trans">放弃贷款，继续退款</router-link>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import common from '@/api/common'
export default {
    data(){
        return{
            paytimes:1
        }
    },
    components:{
        CommonHeader
    },
    created(){
          common.getPaytimes().then(res=>{
                if(res.code=='0'){
                    this.paytimes=res.data.number;
                }
            })
    },
    methods:{
        getMoney(){
             if(this.paytimes==1){
                 this.$router.replace('/loan')
             }else{
                this.$router.replace('/orderDetail')
             }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.refund{
   @include bkg;
   background: $primary;
   .leave{
       background: #fff;
       margin: 20px 10px 0 10px;
       border-radius: 5px;
       box-sizing: border-box;
       padding: 20px;
       position: relative;
       p{
           img{
               position: absolute;
               top: -10px;
               left: 10px;
               height: 50px;
           }
           .tuijian{
               font-size: 20px;
               font-weight: 600;
               color: #f00;
               border: 5px solid #f00;
               border-radius: 50%;
               display: inline-block;
               width: 50px;
               height: 50px;
               line-height: 50px;
               text-align: center;
               position: absolute;
               left: -10px;
               top: -10px;
               transform:rotate(-35deg);
           }
       }
       button{
           width: 90%;
           height: 40px;
           line-height: 40px;
           border-radius: 20px;
           text-align: center;
           font-size: 18px;
           border: none;
           outline: none;
           margin:20px 5% 0;
       }
       .red{
           background: #f00;
           color: #fff;
       }
       .blue{
           background: $primary;
           color: #fff;
           font-size: 13px;
          
       }
       .trans{
           border: 1px solid #f00;
           background: #fff;
           color: #f00;
           outline: none;
       }
   }
}
</style>


