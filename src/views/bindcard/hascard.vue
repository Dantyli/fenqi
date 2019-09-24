<template>
    <div class="card">
        <common-header title="已绑定银行卡" />
         <ul class="card-list">
            <li @click="goBack(item.id,index)" v-for="(item,index) in cardlist" :key="index">
                <img class="logo" :src="baseIcon+`/static/img/`+item.bankCode+`.png`"/>
                <div>
                    <p>{{item.bank}}</p>
                    <p>卡号：{{item.bankCard}}</p>
                </div>
                <span v-if="index==0" class="default">默认卡</span>
            </li>
        </ul>
        <div class="add">
            <router-link tag="button" :to="`/bindcard?from=${direct}`" replace class="btn" >添加新卡</router-link>
            <p>国家级数据保护</p>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import userApi from '@/api/userApi'
import config from '@/config'
export default {
    components:{
        CommonHeader,
        
    },
    data(){
        return{
           cardlist:[],
           direct:'',
           baseIcon:config.baseIcon
        }
    },
    created(){
        userApi.cardList().then(res=>{
           if(res.code=='0'){
               this.cardlist=res.data.BankCardList
           }
        })
        this.direct=this.$route.query.from||'default'
    },
    methods:{
        goBack(id,index){
            if(index!=0){
                let param={
                    id:id
                }
                userApi.getPayCard(param).then(res=>{
                    if(res.code=='0'){
                    //    if(this.direct!='default'){
                    //         this.$router.replace(`/${this.direct}`)
                    //     }else{
                    //         this.$router.replace('/kyc')
                    //     }
                     userApi.cardList().then(res=>{
                        if(res.code=='0'){
                            this.cardlist=res.data.BankCardList
                        }
                        })
                    }
                })
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.card{
   @include bkg;
    &-list{
        margin: 10px 0 20px 0;
        padding: 10px;
        background: #fff;
        li{
            position: relative;
            display: flex;
            justify-content: flex-start;
            border-bottom: 1px solid #eee;
            padding: 5px 0;
            .logo{
                height: 50px;
                width: 50px;
                margin: 0 10px;
            }
            div{
                flex: 1;
                line-height: 25px;
                p:nth-of-type(1){
                    font-size: 16px;
                    color: #333;
                }
                p:nth-of-type(2){
                    font-size: 13px;
                    color: #999;
                }
            }
            .default{
                position: absolute;
                top: 10px;
                right: 10px;
                border: 1px solid #999;
                color: #999;
                font-size: 14px;
                padding: 0 3px;
                border-radius: 3px;
            }
        }
    }
    .add{
        text-align: center;
        p{
            font-size: 12px;
            color: #aaa;
            line-height: 38px;
        }
    }
}
</style>


