<template>
    <div class="order">
        <div class="order-header">
            我的订单
        </div>
        <div class="nodata" v-if="order">
            <h3>
                您还没有订单！
            </h3>
            <button @click="noData" class="btn">立即申请</button>
        </div>
        <ul class="order-list" v-else>
            <p class="warning">点击订单编号可复制</p>
            <li v-for="(item,index) in list" :key="index">
                <p class="title" @click="copy(item.orderNumber)"> 订单编号：{{item.orderNumber}}</p>
                <div class="content">
                    <img v-if="item.type==1" src="../../assets/bao.jpeg" />
                    <img v-else src="../../assets/mian.jpeg">
                    <div>
                        <p>时间：{{item.time|format}}</p>
                        <p v-if="item.type==1">信用报告</p>
                        <p v-else>{{item.limits}}元/{{item.duration}}月</p>
                         <router-link  :to="item.type==2?'/orderDetail':'/credited'" tag="button">详情</router-link>
                    </div>
                   
                </div>
            </li>
        </ul>
         <div class="kefu" onclick="location.href='https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1I2hgps&scene=SCE00004456'">
             <img src="../../assets/kefu.png"><br/>
        </div>
        <!-- 真实input进行复制操作 -->
        <input ref="copyReal" v-model="copyOrder" class="refInput"/>
    </div>
</template>
<script>
import toast from '@/components/toast'
import {mapGetters} from 'vuex'
import common from '@/api/common'
export default {
    data(){
        return{
            order:false,
            copyOrder:'',
            list:[],
            link:false
        }
    },
    filters:{
        format(val){
            if(val.indexOf('.')>-1){
                return val.split('.')[0]
            }
            return val;
        }
    },
    created(){
        common.getOrderList().then(res=>{
             if(res.code=='0'){
                 this.list=res.data.order
                 if(res.data.order.length>0){
                     this.order=false
                 }else{
                     this.order=true;
                 }
             }else{
                 toast(res.msg)
             }
        })
    },
    computed:{
        ...mapGetters(['wait'])
    },
    methods:{
        copy(e){
            let dom=this.$refs.copyReal;
            this.copyOrder=e;
            dom.select();
            document.execCommand('copy')
            dom.blur()
            toast(`订单号：${e}，复制成功！`)
        },
        noData(){
             if(this.wait>0){
                 this.$router.push('/kyc')
             }else{
                 this.$router.push('/credit')
             }
        }
    }
}
</script>
<style lang="scss" scoped>
    .order{
        background: #f4f4f4;
        height: 100%;
        padding-top: 45px;
        &-header{
            background: #fff;
            height: 45px;
            line-height:45px;
            text-align: center;
            color: #333;
            font-size: 16px;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            border-bottom: 1px solid #eee;
        }
        .nodata{
            margin-top:40%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            h3{
                line-height: 40px;
                color: #999;
            }
        }
        &-list{
            .warning{
                font-size: 13px;
                color: #f00;
                text-align: center;
                line-height: 20px;
                margin-top: 5px;
            }
            li{
                padding:0 10px;
                background: #fff;
                margin-top: 10px;
                .title{
                    font-size: 16px;
                    color: #000;
                    font-weight: 500;
                    border-bottom: 1px solid #eee;
                    line-height: 40px;
                }
                .content{
                    display: flex;
                    padding: 10px 0;
                    img{
                        height: 50px;
                    }
                    div{
                        flex: 1;
                        padding-left: 10px;
                        p{
                            line-height: 25px;
                            color: #999;
                            font-size: 13px;
                            width: 60%;
                            display: inline-block;
                        }
                        button{
                            height: 30px;
                            //vertical-align: middle;
                            margin-top: -15px;
                            border:1px solid #999;
                            color: #999;
                            border-radius: 15px;
                            line-height: 30px;
                            font-size: 16px;
                            text-align: center;padding: 0 10px;
                            float: right;
                            background: #fff;
                            outline: none;
                        }
                    }
                }
            }
        }
        .refInput{
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 1;
        }
        .kefu{
            position: fixed;
            right: 0;
            bottom: 200px;
            img{
                width: 50px;
            }
        }
    }
</style>
