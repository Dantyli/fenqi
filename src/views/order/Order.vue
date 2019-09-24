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
        <!-- <ul class="order-list" v-else>
            <p class="warning">点击订单编号可复制</p>
            <li v-for="(item,index) in list" :key="index">
                <p class="title" @click="copy(item.orderNumber)"> 订单编号：{{item.orderNumber}}<span class="refund" v-if="item.status==1" >已退款</span></p>
                <div class="content" @click="goPage(item)" >
                    <img v-if="item.type==1" src="../../assets/bao.jpeg" />
                    <img v-else src="../../assets/mian.jpeg">
                    <div>
                        <p>时间：{{item.time|format}}</p>
                        <p class="blue" v-if="item.type==1">风险评级报告订单</p>
                        <p class="blue" v-else>VIP融资咨询服务订单</p>
                         <button  >详情</button>
                    </div>
                   
                </div>
            </li>
        </ul> -->
        <div class="order-detail" v-else>
            <ul>
                <li>
                    <span>订单号：</span>{{list.orderNumber}}  <span class="copy" @click="copy(list.orderNumber)">复制</span>
                </li>
                <li>
                    <span>订单金额：</span>{{list.money|formatMoney}}元
                </li>
                <li>
                    <span>订单日期：</span>{{list.time|format}}
                </li>
            </ul>
             <div @click="goCredit" style="margin:10px 0">
                <Cell title="我的报告" is-link>
                    
                </Cell>
            </div>
            <div class="botm">
                  <button class="btn" @click="$router.push('/orderDetail')">
                        去借款
                    </button>
            </div>
           <!-- <p class="tui"> <router-link to="/refund">
                        风险评级报告费用有疑问？ 点这里
                    </router-link></p> -->
        </div> 
         <!-- <div class="kefu" onclick="location.href='https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1I2hgps&scene=SCE00004456'">
             <img src="../../assets/kefu.png"><br/>
        </div> -->
        <!-- 真实input进行复制操作 -->
        <input ref="copyReal" v-model="copyOrder" class="refInput"/>
    </div>
</template>
<script>
import toast from '@/components/toast'
import {mapGetters} from 'vuex'
import common from '@/api/common'
import {Cell,Indicator} from 'mint-ui'
export default {
    components:{
        Cell
    },
    data(){
        return{
            order:true,
            copyOrder:'',
            list:{
                time:'--',
                orderNumber:'--',
                money:'00'

            },
            link:false,
            report:false
        }
    },
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
    },
    created(){
        Indicator.open()
        common.getOrderList().then(res=>{
            Indicator.close()
             if(res.code=='0'){
                 if(res.data.order.length>0){
                     this.list=res.data.order[0]
                     sessionStorage.setItem(`C_order1`,res.data.order[0].orderNumber)
                     this.order=false
                     common.getReport().then(res=>{
                            if(res.data.data.data){
                                this.report=true
                            }
                        })
                 }else{
                     this.order=true;
                 }
             }else{
                 toast(res.msg)
             }
        })
        
    },
    beforeDestory(){
        Indicator.close()
    },
    computed:{
        ...mapGetters(['wait'])
    },
    methods:{
        copy(e){
            let dom=this.$refs.copyReal;
            this.copyOrder=e;
            //解决ios复制问题
            if(window.navigator.userAgent.toLowerCase().indexOf('iphone')>-1){
                    window.getSelection().removeAllRanges();//这段代码必须放在前面否则无效
               var range = document.createRange();
               range.selectNode(dom);
               window.getSelection().addRange(range);
               // 执行 copy 操作
               setTimeout(()=>{
                    document.execCommand('copy');
                    window.getSelection().removeAllRanges();
                    toast(`订单号：${e}，复制成功！`)
               },0)
               
            }else{
                 setTimeout(()=>{
                    dom.select();
                        document.execCommand('copy')
                        dom.blur()
                        toast(`订单号：${e}，复制成功！`)
                    },0)
            }
           
            
        },
        noData(){
             if(this.wait>0){
                 this.$router.push('/kyc')
             }else{
                 this.$router.push('/credit')
             }
        },
        goPage(e){
            let path=e.type==1?'/credited':'/orderDetail'
            let type=e.type==1?'1':'2';
            sessionStorage.setItem(`C_order${type}`,e.orderNumber)
            this.$router.push(path);
        },
        goCredit(){
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
    .order{
        background: #f4f4f4;
        height: 100%;
        padding-top: 45px;
        padding-bottom: 80px;
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
        .tui{
            a{
            position: absolute;
            bottom: 90px;
            width: 100%;
            text-align: center;
            font-size: 13px;
            color: #999;
            }
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
        &-detail{
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
                        .blue{
                            color: $primary;
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
        .refund{
            color: #999;
            border: 1px solid #999;
            margin-left: 5px;
            font-size: 13px;
        }
    }
</style>
