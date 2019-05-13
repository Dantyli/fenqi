<template>
    <div class="card">
        <common-header title="已绑定银行卡" />
         <ul class="card-list">
            <li v-for="(item,index) in cardlist" :key="index">
                <img class="logo" :src="require(`../../assets/${item.bankCode||'logo'}.png`)"/>
                <div>
                    <p>{{item.bank}}</p>
                    <p>卡号：{{item.bankCard}}</p>
                </div>
            </li>
        </ul>
        <div class="add">
            <router-link tag="button" to="/bindcard" replace="" class="btn" >添加新卡</router-link>
            <p>国家级数据保护</p>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import userApi from '@/api/userApi'
export default {
    components:{
        CommonHeader,
        
    },
    data(){
        return{
           cardlist:[]
        }
    },
    created(){
        userApi.cardList().then(res=>{
           if(res.code=='0'){
               this.cardlist=res.data.BankCardList
           }
        })
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


