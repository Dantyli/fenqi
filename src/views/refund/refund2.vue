<template>
    <div class="refund">
         <common-header title="退款申请" />
         <p class="tips">
             我们为您优选了以下极易下款的平台，请速去这些贷款平台申请借款！
         </p>
         <ul class="plat">
             <li v-for="(item,i) in list" :key="i">
                <img :src="baseURL+item.icon" alt="">
                <div class="content">
                    <p>{{item.name}}</p>
                    <p>{{item.des}}</p>
                </div>
                <a href="javascript:" @click="goOut(item.url)"   >去申请</a>
             </li>
         </ul>
         <p class="tips" style="margin-top:10px;">
             若您在以上贷款平台均未申请到借款，请上传贷款申请失败的截图，审核通过后即可进行退款。
             <router-link to="/t/refund" replace  tag="button" >
                 上传贷款失败截图
             </router-link>
         </p>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import common from '@/api/common'
import config from '@/config'
export default {
    data(){
        return{
            list:[],
            baseURL:config.baseURL
        }
    },
    components:{
        CommonHeader
    },
    created(){
        common.refundMerchant({type:'1'}).then(res=>{
            if(res.code=='0'){
               this.list=res.data
            }
        })
    },
    methods:{
        goOut(url){
            if(window.plus){
                window.plus.runtime.openURL(url)
            }else{
                location.href=url
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.refund{
    @include bkg;
    .tips{
        color: #999;
        padding: 15px;
        background: #fff;
        font-size: 15px;
        button{
            border: 1px solid #f00;
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            outline: none;
            color: #f00;
            text-align: center;
            background: #fff;
            width: 90%;
            margin: 10px 5%;
            font-size: 16px;
        }
    }
    .plat{
        background: #fff;
        li{
            display: flex;
            border-top: 1px solid #eee;
            padding: 10px;
            img{
                width: 40px;
                height: 40px;
                margin: 10px;
            }
            .content{
                flex: 1;
                line-height: 30px;
                font-weight: 500;
                p:nth-of-type(1){
                    font-size: 18px;
                }
                p:nth-of-type(2){
                    font-size: 14px;
                }
            }
            a{
                    color: $primary;
                    float: right;
                    margin-top:20px;
                    font-size: 16px;
                }
        }
    }
}
</style>
