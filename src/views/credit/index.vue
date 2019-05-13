<template>
    <div class="verity">
        <common-header title="信用评估" />
        <img class="activity" src="../../assets/verify.png"/>
        <p class="tips">申请即同意<a :href="xieyiUrl">《信用检测评估服务协议》</a></p>
       
        <div class="pay">
            <p>
                <span><i>限时</i> ¥88</span>
               <span>原价 ¥168</span>
            </p>
            <p>
                   <span @click="pinggu">立即评估</span>
            </p>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import config from '@/config'
import common from '@/api/common'
import toast from '@/components/toast'
import {Indicator} from 'mint-ui'
export default {
    components:{
        CommonHeader
    },
    data(){
        return{
            xieyiUrl:`./service.html`
        }
        
    },
    methods:{
        pinggu(){
            Indicator.open()
            let param={
                type:1,
                limits:localStorage.getItem('amount')||10000,
                duration:localStorage.getItem('month')||2
            }
           common.pay(param).then(res=>{
                if(res.code=='0'){
                    common.createReport().then(res=>{
                        if(res.code=='0'){
                            Indicator.close()
                            this.$router.replace('/credited')
                        }else{
                            Indicator.close()
                            toast('信用评估失败，请联系客服！')
                        }
                    })
                }else{
                    Indicator.close()
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
   background: #f08a3b;
   .activity{
       width: 100%;
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


