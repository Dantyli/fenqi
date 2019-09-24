<template>
    <div class="order">
        <common-header title="订单详情" isback=false />
        <span @click="logd" class="refund-progress" v-if="refund.length>0">退款进度</span>
        <div style="background:#19489D;padding-bottom:20px;position:relative;">
            <img src="../../assets/title.png" class="jian">
            <!-- <p class="tips">通过大数据分析您的资料和风险评级报告<br />为您定制了以下合规贷款平台</p> -->
           <p class="tips">以下资金方是依据您的个人申请信息，经过系统筛选定制，可以最大化提高您的借款成功率，为您推荐的资金方均为合法合规产品，避免您盲目乱申请导致信用花乱。</p>
            <div class="report">
                <p @click="goReport(1)">
                    <img src="../../assets/xinyong.png" alt="" />
                    风险评级报告
                </p>
                <p @click="goReport(2)">
                    <img src="../../assets/heimingdan.png" alt="" />
                    黑名单报告
                </p>
                <p @click="goReport(2)">
                    <img src="../../assets/tonghua.png" alt="" />
                    通话风险报告</p>
            </div>
        </div>
        <ul class="order-list">
            <li v-for="(item,index) in list" :key="index">
                <!-- <div class="merchant">
                    <img :src="baseURL+item.logoUrl" alt=""/>
                    <div>
                        <p>
                           {{item.name}}
                        </p>
                        <p>
                            {{item.des}}
                        </p>
                        <button @click="goAd(item.id)">申请</button>
                        <span @click="goAd(item.id)" class="gl">攻略</span>
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
                </div> -->
                <div class="order-item" @click="goAd(item.id)">
                    <div class="item1">
                        <p>
                            <img :src="item.logoUrl" alt="">
                            {{item.name}}
                        </p>
                        <p>
                            年化利率：{{item.rate}}
                        </p>
                    </div>
                    <div class="item2">
                        <p><img src="../../assets/vip.png" alt=""></p>
                        <p>
                            <span>最高</span> &nbsp;
                            <i>¥</i>{{item.limits|formatCeil}}
                        </p>
                    </div>
                    <div class="item3">
                        <p>查看攻略</p>
                        <p>去提现 ></p>
                    </div>
                </div>
            </li>
        </ul>
        <!-- <p class="tuikuan" onclick="location.href='http://ynd6lpciihnz1yzq.mikecrm.com/oUQeoB9'">点击这里退款</p> -->
       
        <!-- <img src="../../assets/fuwu.png" style="width:100%" alt=""> -->
        <!-- <div class="qq">
            
           <div class="pro">
               <img src="../../assets/pro.png" alt="">
               <div class="div">
                   <p><span>李经理</span> 高级信贷专家</p>
                   <p>擅长资质提升，各种贷款</p>
               </div>
           </div>
           <div class="fake-num">
               <p><span>咨询人数：600</span><span>QQ:1670810737</span></p>
            <p>
                <span>下款人数：566</span>
                <span @click="copy">一键复制</span>
            </p>
           </div>
        </div> -->
             <router-link v-if="refund.length>0&&refund[refund.length-1].status!=2"  tag="p" class="tuikuan" to="/refunds">点击这里退款</router-link>
         <router-link v-else tag="p" class="tuikuan" to="/refund">点击这里退款</router-link>
         <!-- <refund-button /> -->
         <div style="height:20px;"></div>
        <!-- <input  style="opacity:0" type="text" value="1670810737" ref="copy" /> -->
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import common from '@/api/common'
import config from '@/config'
import toast from '@/components/toast'
import refundButton from "@/components/Button"
export default {
    components:{
        commonHeader,
        refundButton
    },
    data(){
        return{
            list:[],
            baseURL:config.baseURL,
            report:false,
            refund:[]
        }
    },
    created(){
        common.getMerchant({merchants:1}).then(res=>{
            if(res.code=='0'){
                  this.list=res.data.data
            }
        })
        common.getReport().then(res=>{
            if(res.data.data.data){
                this.report=true
            }
        })
         common.getRefund().then(res=>{
            if(res.data.applyData.length>0){
                this.refund=res.data.applyData
            }
        })
    },
    methods:{
        logd(){
            this.$router.push('/logd')
        },
        goAd(id){
            // let params={
            //   merchantsId:id
            // }
            // common.logApi(params).then(res=>{
            //    location.href=href;
            // })
            this.$router.push(`/raiders?id=${id}`)
            
        },
        copy(){
           let dom=this.$refs.copy;
           if(window.navigator.userAgent.toLowerCase().indexOf('iphone')>-1){
                    window.getSelection().removeAllRanges();
               var range = document.createRange();
               range.selectNode(dom);
               window.getSelection().addRange(range);
               // 执行 copy 操作
               setTimeout(()=>{
                    document.execCommand('copy');
                    window.getSelection().removeAllRanges();
                    toast(`复制成功`)
               },0)
               
            }else{
                 dom.select();
                document.execCommand('Copy');
                dom.blur();
                toast('复制成功')
            }
           
        },
        goReport(i){
            if(i==1){
                if(!this.report){
                    toast('报告生成失败，请联系客服！')
                    return;
                }
                this.$router.push('/report')
            }else{
                toast('敬请期待！')
            }
        }
    },
    filters:{
        formatCeil(val){
            if(val.indexOf('-')>-1){
                return val.split('-')[1]
            }
            return val
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';
.refund-progress{
    color: #f00;
    position: fixed;
    top:13px;
    right: 10px;
    font-size: 14px;
    z-index: 1111;
}
.order{
    @include bkg;
    height: auto;
    .jian{
        width: 100%;
        min-height: 100px;
    }
    .tips{
        position: absolute;
        top:10%;
        color: #fff;
        width: 90%;
        left: 5%;
        font-size: 14px;
        text-align: center;
    }
    .qq{
        padding: 10px;
        background: #fff;
        //margin-bottom: 20px;
        .tips{
            color: #333;
            line-height: 25px;
        }
        .pro{
            display: flex;
            img{
                height: 100px;
            }
            .div{
                flex: 1;
                padding: 0px 10px;
                box-sizing: border-box;
                p{
                    line-height: 50px;
                }
                p:nth-of-type(1){
                    color: #999;
                    font-size: 14px;
                    span{
                        color: #333;
                        font-size: 20px
                    }
                }
            }
            
        }
    }
    .fake-num{
        margin-top: 5px;
        p{
            line-height: 30px;
            span{
                display: inline-block;
                width: 50%;
            }
        }
        
    }
    .report{
        display: flex;
        p{
            background: linear-gradient(#1584FF,#0699FF);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100px;
            width: 30%;
            border-radius: 5px;
            img{
                height: 36px;
                margin-top: -14px;
                margin-bottom: 5px;
            }
        }
        justify-content: space-around;
        text-align: center;
        
    }
    .need{
        background: #fff;
        margin: 10px 0;
        padding-left: 10px;
        line-height: 30px;
        border-left: 2px solid $warning;
    }
    &-list{
        //padding: 0 10px;
        padding-bottom: 25px;
        li{
            background: #fff;
            border-bottom: 1px solid #eee;
            //padding: 5px 0;
            margin: 10px;
            border-radius: 3px;
            .merchant{
                display: flex;
                img{
                    height: 60px;
                    width: 60px;
                    margin:0 5px;
                }
                div{
                    flex: 1;
                    overflow: hidden;
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
                        //font-size: 16px;
                        width: 20%;
                        margin-right: 10px;
                        float: right;
                        border-radius: 3px;
                        margin-top: -15px;
                        &:active{
                            opacity: 0.7;
                        }
                    }
                    .gl{
                        outline: none;
                        text-decoration: underline;
                        color: #333;
                        height: 30px;
                        width: 20%;
                        margin-right: 0px;
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
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #f00;
        font-size: 14px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
    }
    .order-item{
        border-radius: 3px;
         .item1{
             border-bottom: 1px solid #eee;
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: 5px;
             height: 50px;
             box-sizing: border-box;
             img{
                 height: 30px;
                 width: 30px;
                 vertical-align: middle;
             }
             p:nth-of-type(1){
                 font-size: 18px;
                 font-weight: 500;
                 max-width: 70%;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 white-space: nowrap;
             }
             p:nth-of-type(2){
                 font-size: 13px;
                 color: #999;
             }
         }
         .item2{
             display: flex;
             justify-content: space-between;
             align-items: center;
             margin: 10px 5px;
             img{
                 width: 100px;
             }
             p:nth-of-type(2){
                 font-size: 24px;
                 color: #f00;
                 font-weight: 500;
                 span{
                     color: #999;
                     font-size: 14px;
                     font-weight: 0;
                 }
                 i{
                     font-style: normal;
                     color: #f00;
                     font-weight: 0;
                     font-size: 15px;
                 }
             }
         }
         .item3{
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding:0 5px;
             padding-bottom: 5px;
             p:nth-of-type(1){
                 border: 1px solid $primary;
                 color: $primary;
                 padding: 2px;
                 border-radius: 8px;
             }
         }
    }

}
</style>
