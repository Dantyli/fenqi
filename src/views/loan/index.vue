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
                        <span>¥{{price}}</span><span>¥399</span>
                    </p> 
                </div>
                <img src="../../assets/check.png" class="checked" />
            </div>
        </div>
         <div class="lists">
            <p class="title">买一送一</p>
            <div class="ad" @click="selectd=1">
                <img src="../../assets/gift.png" alt="">
                <div>
                    <p>
                        2000元/1～12个月
                    </p>
                    <p>
                        社保贷
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
                        5000元/3～24个月
                    </p>
                    <p>
                        信用卡贷
                    </p>
                    <p>
                        <span>¥0</span><span>¥99</span>
                    </p>
                </div>
                 <img v-if="selectd==2" src="../../assets/check.png" class="checked" />
                  <img v-else src="../../assets/uncheck.png" class="checked" />
            </div>
        </div>
        <div class="vip">
            <h4>VIP融资咨询服务介绍</h4>
           <p>1.根据您的资料，优先为您匹配高额持牌贷款平台的产品</p> 
           <p>2.支付成功即可成为VIP会员，享受每周合规贷款平台推送服务</p>
           <p>3.提供一对一融资咨询服务</p>
           <p>4.借款不成功，可申请全额退还本次费用</p>
           <p style="line-height:30px;color:#333;">{{desc}}</p>
      <p class="agre"><span @click="agree=!agree"><img v-if="agree" src="../../assets/check.png" /><img v-else src="../../assets/uncheck.png" /> &nbsp; 我已阅读并同意</span>《<a href="javascript:" @click="show=true">VIP融资咨询服务协议</a>》</p>
       <Popup title="协议"  type='1' @handleClose="close" v-show="show"  />
        </div>
       
        <div class="pay">
            <p>
                <span><i>限时</i> ¥{{price}}</span>
               <span>原价 ¥399</span>
            </p>
            <p @click="getMoney">
                   <span  >立即申请</span>
            </p>
        </div>
        <div class="mask" v-if="hui">

        </div>
        <div class="half" v-if="hui">
             <p class="title">
            <img src="../../assets/quan-left.png" alt="">
             代金券使用说明
             <img src="../../assets/quan-right.png" alt=""></p>
             <ul>
                 <li>
                   <span></span> 可抵扣vip加速服务费用100元现金使用</li>
                 <li><span></span> 本券不能与其他优惠活动同时享用</li>
                 <li><span></span> 每人仅限使用一次</li>
                 <li><span></span> 最终解释权归本平台所有
                        
                 </li>
             </ul>
             <img @click="change" style="width:90px;margin-top:5px;" src="../../assets/button.png" alt="">
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import toast from '@/components/toast'
import config from '@/config'
import common from '@/api/common'
import {Indicator} from 'mint-ui'
import Popup from '@/components/Popup'
export default {
    components:{
        CommonHeader,
        Popup
    },
    created(){
        // common.checkYouHui().then(res=>{
        //      if(res.code=='0'){
        //          this.count=res.discounts
        //          if(res.discounts==1){
        //              this.hui=true
        //          }
        //      }
        // })

        //获取优惠相关
         common.getConfig().then(res=>{
            this.desc=res.pay2.desc
            this.times=res.pay2.times
        })
    },
    data(){
        return{
            money:localStorage.getItem('amount')||10000,
            month:localStorage.getItem('month')||2,
            selectd:1,
            count:0, //优惠券
            hui:false,
            price:199,
            show:true,
            agree:false,
            nums:1,
            desc:'',
            times:1

        }
        
    },
    methods:{
        close(type){
             if(type=='confirm'){
                this.agree=true;
            }
            this.show=false
        },
        change(){
            this.hui=false;
            this.price=99
        },
        checkPay(){
            Indicator.open()
            common.getOrderList().then(res=>{
                Indicator.open()
                if(res.baofuPay=='0'){
                        this.$router.replace('/orderDetail')
                }else if(res.baofuPay=='1'){
                        toast('支付失败')
                        this.$router.replace('/bz?from=loan')
                }else if(res.baofuPay=='2'){
                    if(this.nums<this.times){
                        this.nums++
                        this.getMoney()
                    }else{
                        toast('余额不足')
                    this.$router.replace('/bz?from=loan')
                    }
                       
                }else if(res.baofuPay=='3'){
                      setTimeout(()=>{
                         this.checkPay()
                      },500)  
                }
                else{
                    toast(res.msg)
                }
            })
        },
        getMoney(){
            if(!this.agree){
                toast('请阅读并同意协议！')
                return;
            }
            //this.hui=false
            Indicator.open()
            let param={
                type:2,
                limits:this.money,
                duration:this.month
            }
            common.pay(param).then(res=>{
                Indicator.close()
                if(res.code=='0'){
                    this.$router.replace('/orderDetail')
                }else if(res.code=='105'||res.code=='108'){
                        toast(res.msg)
                        this.$router.replace('/bz?from=loan')
                }else if(res.code=='112'){
                    this.checkPay()
                }
                else{
                    toast(res.msg)
                }
            })
        }
    },
    beforeDestroy(){
        Indicator.close()
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
       //background:#6822d3;
       background: #fff;
       border-top: 1px solid #eee;
       height: 80px;
       left: 0;
       bottom: 0;
       display: flex;
       width: 100%;
       p:nth-of-type(1){
           width: 50%;
           text-align: center;
           color: #333;
           span{
               display: inline-block;
               width: 100%;
               margin-left: 10px;
           }
           span:nth-of-type(1){
               font-size: 18px;
               margin-top: 20px;
               font-weight: 500;
           }
           span:nth-of-type(2){
               font-size: 14px;
               text-decoration: line-through;
               opacity: 0.7;
           }
       }
       p:nth-of-type(2){
           flex: 1;
           display: flex;
           justify-content:center;
           align-items: center;
        //    span{
        //        font-size: 18px;
        //        background: $primary;
        //        color: #fff;
        //        display: inline-block;
        //        padding: 10px;
        //        border-radius: 3px;
        //        margin-right: 20px;
        //    }
           background: #f00;
           color: #fff;
           font-size: 20px;
           font-weight: 500;
       }
   }
   .tips{
       color: #fff;
       font-size: 12px;
       padding-left: 10px;
   }
   .vip{
       margin: 10px;
       padding-bottom: 90px;
       h4{
           line-height: 20px;
           margin: 0;
           color: #999;
           opacity: 0.9;
       }
       p{
           font-size: 14px;
           color: #999;
           opacity: 0.9;
       }
       .agre{
           margin-top: 10px;
           color: #999;
           text-align: center;
       }
   }
   .mask{
       background:rgba(0,0,0,0.5);
       position: fixed;
       left: 0;
       top: 0;
       height: 100%;
       width: 100%;
       z-index: 1000;
   }
   .half{
       background: url(../../assets/quan.png) no-repeat;
       background-size: cover;
       position: absolute;
       top: 50%;
       z-index: 1001;
       height: 380px;
       left: 50%;
       transform: translate(-50%,-50%);
       padding: 10px;
       text-align: center;
       border-radius: 5px;
       width:250px;
       //box-sizing: border-box;
       .title{
           margin-top: 160px;
           line-height: 20px;
           text-align: center;
           font-size: 15px;
           color: #FBD696;
           img{
               vertical-align: middle;
               width:40px;
           }
       }
       ul{
           margin: 5px auto;
           color: #FBD696;
           font-size: 12px;
           text-align: left;
           padding-left: 13px;
           li{
              span{
                  vertical-align: middle;
               height: 3px;
               width: 3px;
               border-radius: 50%;
               background: #FBD696;
               display: inline-block;
           }
           }
          
       }
   }
   .agre{
       text-align: center;
       font-size: 13px;
       color: #999;
       line-height: 30px;
       margin: 10px 0;
       img{
           width: 20px;
           vertical-align: text-bottom;
       }
   }
}
</style>


