<template>
    <div class="verity">
        <common-header title="风险评级" />
        <div class="top">
            <img class="activity" src="../../assets/top.png"/>
            <p class="tip">{{desc}}</p>
        </div>
        
       <!-- <div class="price">
           <span>原价556</span>
           <span>现价</span>
           <span>¥88</span>
       </div>
       <div class="countdown">
           <p class="time">
               <span>{{minute}}</span>
               :
               <span>{{second}}</span></p>  
       </div> -->
       <div class="fake">
            <div >
                <p class="fake-money"><i class="s">¥</i><span>99</span>  <i class="orgp">¥198</i></p>
               <p>今日已有{{haspay}}人支付</p>
            </div>
            <div class="fake-down">
                <p>限时优惠</p>
                <p>距结束仅剩</p>
                <p>
                    <span>{{minute}}</span>
                    :
                    <span>{{second}}</span>
                </p>
            </div>
       </div>
       <img class="promise" style="width:94%;margin-left:3%;margin-top:10px;" src="../../assets/promise.png" alt="" />
         <p class="orgprice">倒计时结束恢复原价¥198</p>
       <p class="pay" @click="pinggu">立即支付</p>
       <p class="agre" ><span @click="agree=!agree"><img v-if="agree" src="../../assets/check.png" /><img v-else src="../../assets/uncheck.png" /> &nbsp; 我已阅读并同意</span>《<a href="javascript:" @click="show=true">风险评级报告与代扣协议</a>》</p>
       <div class="desc">
           <p class="title">
               <img src="../../assets/left.png">
               风险评级报告介绍
               <img src="../../assets/right.png" alt="">
           </p>
           <ul>
              
              <li> 1. 结合三方大数据对用户授权的资料进行评级 </li>
              <li> 2. 评级过程会查询用户相关资信 </li>
              <li> 3. 生成风险评级报告</li>
                       
           </ul>
       </div>
       <Popup title="协议" :userInfo="user" type='0' @handleClose="close" v-show="show"  />
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import config from '@/config'
import common from '@/api/common'
import userApi from '@/api/userApi'
import toast from '@/components/toast'
import {Indicator} from 'mint-ui'
import Popup from '@/components/Popup'
export default {
    components:{
        CommonHeader,
        Popup
    },
    data(){
        return{
            xieyiUrl:`./service.html`,
            minute:'--',
            second:'--',
            count:600,
            haspay:2578,
            agree:false,
            show:true,
            user:{
                name:'--',
                cardNo:'--',
                time:'--'
            },
            nums:1,
            desc:'每天随机赠送限量5折支付特权，先到先得！',
            times:2
        }
    },
    created(){
        this.timer=setInterval(()=>{
            this.count--
        },1000)
         userApi.getUserInfo().then(res=>{
             let user={}
             user.name=res.data.authentication.name
             user.cardNo=res.data.authentication.identity
             user.time=res.data.authentication.time
             this.user=user
        })
        common.getConfig().then(res=>{
            if(res.pay1){
                 this.desc=res.pay1.desc
                 this.times=res.pay1.times
            }
            
        })

    },
    watch:{
        count:function(val){
             this.minute=this.format(Math.floor(val/60))
             this.second=this.format(Math.floor(val%60))
             if(this.count%3==0){
                 this.haspay+=Math.ceil(Math.random()*6)
             }
             if(val==0){
                 this.count=600;
             }
        }
    },
    methods:{
        close(type){
            if(type=='confirm'){
                this.agree=true;
            }
            this.show=false
        },
        format(num){
            return num>9?num:'0'+num;
        },
        checkPay(){
            Indicator.open()
            common.getOrderList().then(res=>{
                Indicator.open()
                if(res.baofuPay=='0'){
                    common.createReport().then(res=>{
                            this.$router.replace('/index/orders')
                    })
                }else if(res.baofuPay=='1'){
                        toast('支付失败')
                        this.$router.replace('/bz?from=credit')
                }else if(res.baofuPay=='2'){
                    if(this.nums<this.times){
                        this.nums++
                        this.pinggu()
                    }else{
                        toast('余额不足')
                    this.$router.replace('/bz?from=credit')
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
        pinggu(){
            if(!this.agree){
               toast('请阅读并同意协议！')
               return
            }
            Indicator.open()
            let param={
                type:1,
                limits:localStorage.getItem('amount')||10000,
                duration:localStorage.getItem('month')||2
            }
           common.pay(param).then(res=>{
                Indicator.close()
                if(res.code=='0'){
                    common.createReport().then(res=>{
                            this.$router.replace('/index/orders')
                    })
                }else if(res.code=='105'||res.code=='108'){
                    toast(res.msg)
                    this.$router.replace('/bz?from=credit')
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
        clearInterval(this.timer)
        Indicator.close()
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.verity{
   @include bkg;
   background: #fff;
   .top{
       position: relative;
       .tip{
           position: absolute;
           bottom: 33%;
           width: 100%;
           text-align: center;
           color: #333;
           font-size: 13px;
       }
   }
   .activity{
       width: 100%;
   }
   .price{
       text-align: center;
       margin-top: 20px;
       span{
           margin-left: 3px;
       }
       span:nth-of-type(1){
           text-decoration: line-through;
           color: #999;
           font-size: 16px;
       }
       span:nth-fo-type(2){
           font-size: 20px;
       }
       span:nth-of-type(3){
           color: $warning;
           font-size: 28px;
           font-weight: 600;
       }
   }
   .fake{
       display: flex;
       justify-content: center;
       div{
           width: 50%;
           text-align: center;
       }
       &-money{
           padding: 10px 0;
           i{
               font-style: normal;
               font-size: 16px;
           }
           .s{
               color: #333;
           }
           span{
               font-size: 22px;
            //    font-weight: 600;
            //    color: $warning;
            color: #333;
           }
           .orgp{
               color: #333;
               text-decoration: line-through;
               margin-left: 5px;
           }
       }
       &-down{
           p:nth-of-type(1){
               font-size:20px;
           }
           p:nth-of-type(2){
               font-size: 14px;
               margin: 5px 0;
           }
           span{
               background: $warning;
               padding:1px 2px;
               color: #fff;
               border-radius: 2px;
           }
       }
   }
   .countdown{
       margin: 0 auto;
       background-position: center;
       width: 300px;
       background: url('../../assets/hui.png') no-repeat;
       background-size: cover;
       text-align: center;
       height: 129px;
       padding-top: 70px;
       box-sizing: border-box;
       p{
           line-height: 30px;
           width: 100%;
       }
       .time{
           color: $warning;
           font-size: 20px;
           font-weight: 500;
           span{
               background: $warning;
               padding: 2px;
               color: #fff;
               border-radius: 2px;
           }
       }
       
   }
   .orgprice{
           text-align: center;
           font-size: 16px;
           margin: 5px 0;
       }
   .pay{
       height: 50px;
       border-radius: 25px;
       line-height: 50px;
       background:linear-gradient(-90deg,rgba(202,15,9,1) 0%,rgba(255,87,90,1) 100%);;
       font-size: 18px;
       font-weight: 500px;
       width: 86%;
       margin: 0 auto;
       color: #fff;
       text-align: center;
       margin-top: 10px;
   }
   .wait{
       height: 50px;
       border-radius: 25px;
       line-height: 50px;
       background:#999;
       font-size: 18px;
       font-weight: 500px;
       width: 86%;
       margin: 0 auto;
       color: #fff;
       text-align: center;
       margin-top: 10px;
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
   .desc{
       margin-top: 20px;
       .title{
           display: flex;
           justify-content: space-evenly;
           font-size: 16px;
           font-weight: 400px;
           img{
               width: 100px;
           }
       }
       ul{
           margin-top: 10px;
           margin-left: 30px;
           margin-bottom: 30px;
           color: #999;
           opacity: 0.7;
       }
   }
}
</style>


