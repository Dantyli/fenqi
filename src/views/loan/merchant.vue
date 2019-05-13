<template>
    <div class="order">
        <common-header title="订单详情" />
        <img src="../../assets/bg.jpeg" class="jian">
        <ul class="order-list">
            <li v-for="(item,index) in list" :key="index">
                <div class="merchant">
                    <img :src="baseURL+item.logoUrl" alt=""/>
                    <div>
                        <p>
                           {{item.name}}
                        </p>
                        <p>
                            {{item.des}}
                        </p>
                        <button @click="goAd(item.registeredUrl)">提现</button>
                    </div>
                </div>
                <div class="lixi">
                    <p>
                        <span>利息：</span>{{item.rate}}%/日
                    </p>
                    <p>
                        <span>
                            额度：
                        </span>
                       {{item.limits}}元
                    </p>
                </div>
            </li>
        </ul>
        <p class="tuikuan" onclick="location.href='http://ynd6lpciihnz1yzq.mikecrm.com/oUQeoB9'">点击这里退款</p>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import common from '@/api/common'
import config from '@/config'
export default {
    components:{
        commonHeader
    },
    data(){
        return{
            list:[],
            baseURL:config.baseURL
        }
    },
    created(){
        common.getMerchant().then(res=>{
            if(res.code=='0'){
                  this.list=res.data.data
            }
        })
    },
    methods:{
        goAd(href){
            location.href=href;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';
.order{
    @include bkg;
    background:#e57260;
    .jian{
        width: 100%;
    }
    .need{
        background: #fff;
        margin: 10px 0;
        padding-left: 10px;
        line-height: 30px;
        border-left: 2px solid $warning;
    }
    &-list{
        background: #e57260;
        padding: 0 10px;
        li{
            background: #fff;
            border-bottom: 1px solid #eee;
            padding: 5px 0;
            margin: 10px;
            border-radius: 3px;
            .merchant{
                display: flex;
                img{
                    height: 60px;
                    width: 60px;
                    margin-right: 5px;
                }
                div{
                    flex: 1;
                    p{
                        line-height: 30px;
                         width: 70%;
                         display: inline-block;
                         overflow: hidden;
                         text-overflow: ellipsis;
                         white-space: nowrap;
                    }
                    p:nth-of-type(1){
                        font-size: 15px;
                    }
                    p:nth-of-type(2){
                        font-size: 13px;
                        color: #999;
                    }
                    button{
                        outline: none;
                        border: none;
                        background: $primary;
                        color: #fff;
                        height: 30px;
                        width: 20%;
                        margin-right: 10px;
                        float: right;
                        border-radius: 3px;
                        margin-top: -15px;
                        &:active{
                            opacity: 0.7;
                        }
                    }
                }
            }

        }
    }
    .lixi{
        display:flex;

        p{
            margin-left: 10px;
        }
        span{
            color: #999;
            font-size: 13px;
        }
    }
    .tuikuan{
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #f00;
        font-size: 13px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
    }

}
</style>
