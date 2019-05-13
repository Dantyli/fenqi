<template>
    <div class="verity">
        <common-header title="增值推荐服务" />
        <div class="lists">
            <img src="../../assets/ic_pay_banner.png" class="banner">
            <p class="title">为您推荐</p>
            <div class="ad">
                <img src="../../assets/daikuan.png" alt="">
                <div>
                    <p>
                        借款{{money}}元/{{month}}个月
                    </p>
                    <p>
                        放款快，周期长，利率低
                    </p>
                    <p>
                        <span>¥199</span><span>¥299</span>
                    </p> 
                </div>
                <img src="../../assets/check.png" class="checked" />
            </div>
        </div>
         <div class="lists">
            <p class="title">您买我们就送</p>
            <div class="ad" @click="selectd=1">
                <img src="../../assets/gift.png" alt="">
                <div>
                    <p>
                        2000元/15天
                    </p>
                    <p>
                        有手机即可贷
                    </p>
                    <p>
                        <span>¥0</span><span>¥99</span>
                    </p>
                </div>
                 <img v-if="selectd==1" src="../../assets/check.png" class="checked" />
                  <img v-else src="../../assets/uncheck.png" class="checked" />
            </div>
            <div class="ad" @click="selectd=2">
                <img src="../../assets/gift.png" alt="">
                <div>
                    <p>
                        5000元/30天
                    </p>
                    <p>
                        无视黑白户
                    </p>
                    <p>
                        <span>¥0</span><span>¥299</span>
                    </p>
                </div>
                 <img v-if="selectd==2" src="../../assets/check.png" class="checked" />
                  <img v-else src="../../assets/uncheck.png" class="checked" />
            </div>
        </div>
       
        <div class="pay">
            <p>
                <span><i>限时</i> ¥199</span>
               <span>原价 ¥299</span>
            </p>
            <p>
                   <span  @click="getMoney">立即拿钱</span>
            </p>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import toast from '@/components/toast'
import config from '@/config'
import common from '@/api/common'
export default {
    components:{
        CommonHeader
    },
    data(){
        return{
            money:localStorage.getItem('amount')||10000,
            month:localStorage.getItem('month')||2,
            selectd:1
        }
        
    },
    methods:{
        getMoney(){
            let param={
                type:2,
                limits:this.money,
                duration:this.month
            }
            common.pay(param).then(res=>{
                if(res.code=='0'){
                    this.$router.replace('/pinggu')
                }else{
                    toast(res.msg)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.verity{
   @include bkg;
   //background: #f08a3b;
   .activity{
       width: 100%;
   }
   .lists{
       background: #fff;
       margin-bottom: 10px;
       .banner{
           width: 100%;
       }
       .title{
           border-bottom: 1px solid #eee;
           padding-left: 10px;
           line-height: 30px;
       }
       .ad{
           padding: 10px;
           display: flex;
           position: relative;
           img{
               width: 60px;
               height: 60px;
           }
           .checked{
               position: absolute;
               top: 50%;
               right: 20px;
               transform: translateY(-50%);
               width: 20px;
               height: 20px;;
           }
           div{
               flex: 1;
               line-height: 20px;
               padding-left: 10px;
               p:nth-of-type(1){
                   font-weight: 500;
               }
               p:nth-of-type(2){
                   font-size: 14px;
                   color: #999;
               }
               p:nth-of-type(3){
                   span:nth-of-type(1){
                       color: #f00;
                   }
                   span:nth-of-type(2){
                       color: #999;
                       text-decoration: line-through;
                       font-size: 13px;
                       margin-left: 5px;
                   }
               }
           }
       }
   }
   .pay{
       position: fixed;
       background:#6822d3;
       height: 50px;
       left: 0;
       bottom: 0;
       display: flex;
       width: 100%;
       p:nth-of-type(1){
           width: 50%;
           text-align: center;
           color: #fff;
           span{
               display: inline-block;
               width: 100%;
               margin-left: 10px;
           }
           span:nth-of-type(1){
               font-size: 16px;
               margin-top: 5px;
               font-weight: 500;
           }
           span:nth-of-type(2){
               font-size: 13px;
               text-decoration: line-through;
               opacity: 0.7;
           }
       }
       p:nth-of-type(2){
           flex: 1;
           display: flex;
           justify-content: flex-end;
           align-items: center;
           span{
               background: $primary;
               color: #fff;
               display: inline-block;
               padding:5px 10px;
               border-radius: 3px;
               margin-right: 20px;
           }
       }
   }
   .tips{
       color: #fff;
       font-size: 12px;
       padding-left: 10px;
   }
}
</style>


