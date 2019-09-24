<template>
    <div class="credit">
        <common-header title="评级订单" isback="false" />
        <!-- <div class="fenshu">
            <p>综合评分</p>
            <p>70</p>
           <p>快去领钱吧！</p>
        </div>
        <div @click="toReport">
             <Cell  title="查看风险评级报告" is-link />
        </div>
       
        <button v-if="paytimes==1" class="btn" @click="$router.push('/loan')">去借钱</button>
        <router-link v-if="paytimes>0" tag="p" class="question" to="/f/refund">风险评级报告有疑问？点这里</router-link> -->
        <div class="order-detail">
            <ul>
                <li>
                    <span>订单号：</span>{{list.orderNumber}} 
                </li>
                <li>
                    <span>订单金额：</span>{{list.money|formatMoney}}元
                </li>
                <li>
                    <span>订单日期：</span>{{list.time|format}}
                </li>
            </ul>
             <div @click="toReport" style="margin:10px 0">
                <Cell title="我的报告" is-link>
                    
                </Cell>
            </div>
              <button v-if="paytimes>0" class="btn" @click="$router.push('/orderDetail')">去借钱</button>
        <router-link v-if="paytimes>0" tag="p" class="question" to="/refund">风险评级报告有疑问？点这里</router-link>
        </div>
        <!-- <refund-button /> -->
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import {Cell} from 'mint-ui';
import common from '@/api/common'
import toast from '@/components/toast'
import refundButton from '@/components/Button'
export default {
    components:{
        CommonHeader,
        Cell,
        refundButton
    },
    data(){
        return {
            paytimes:0,
            report:false,
            list:[]
        }
    }
    ,
    filters:{
        format(val){
            if(val.indexOf('.')>-1){
                return val.split('.')[0]
            }
            return val;
        },
        formatMoney(val){
            return (val/100).toFixed(2)
        }
    }
    ,
    created(){
     common.getPaytimes().then(res=>{
         if(res.code=='0'){
             this.paytimes=res.data.number;
         }
     })
     common.getReport().then(res=>{
         if(res.data.data.data){
             this.report=true
         }
     })
    common.getOrderList().then(res=>{
            if(res.code=='0'){
                if(res.data.order.length>0){
                    this.list=res.data.order[0]
                }else{
                    
                }
            }else{
                toast(res.msg)
            }
    })
    },
    methods:{
        toReport(){
            if(this.report){
                this.$router.push('/report')
            }else{
                toast('风险评级报告生成失败，请联系客服！')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.credit{
    @include bkg;
    .btn{
        margin: 20px 10%;
    }
    .fenshu{
        background: #fff;
        padding: 20px;
        text-align: center;
        margin-bottom: 20px;
        p:nth-of-type(1){
            font-size: 14px;
        }
        p:nth-of-type(2){
            font-size: 38px;
            color: $warning;
            line-height: 50px;
        }
        p:nth-of-type(3){

        }
    }
    .question{
        text-align: center;
        color: $primary;
        position: fixed;
        bottom: 30px;
        width: 100%;
        font-size: 13px;
    }
    .order-detail{
             ul{
                 background: #fff;
                 padding: 30px 0;
                 li{
                     line-height: 40px;
                     margin-left: 10px;
                     .copy{
                         color: $primary;
                         text-decoration: underline;
                         
                     }
                 }
             }
        }
        .botm{
            text-align: center;
            background: #fff;
            padding: 0 0 0px 0;
            .btn{
                margin: 20px 0;
            }
            a{
                margin: 10px 0;
                color: #999;
                font-size: 12px;
            }
        }

}
</style>


