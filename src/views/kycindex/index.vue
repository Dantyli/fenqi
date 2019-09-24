<template>
    <div class="kyc">
        <common-header title="我的资料" />
        <div class="step">
            <svg-bar :value="hasDone" type="circle" :options="svgOption" />
            <p v-show="wait>0" class="warning">请您完善个人资料和绑定银行卡，以便通过审核</p>
            <p v-show="wait==0&&paytime!=2" class="warning">恭喜您填写完成，马上去借款吧！</p>
            <p v-show="wait==0&&paytime==2" class="warning">非常棒！信息很完整</p>
        </div>
        <div>
            <Cell title="身份实名" :to="wait<3?'/cardinfo':'/idcard'" is-link>
                <span v-if="wait<4">已认证</span>
                <span class="warning" v-else>未认证</span>
            </Cell>
            <div @click="goPage(1)">
                 <Cell   title="个人资料" is-link>
                    <span v-if="wait<3">已填写</span>
                    <span class="warning" v-else>未填写</span>
                </Cell>
            </div>
             <div @click="goPage(3)">
                 <Cell   title="资产信息" is-link>
                    <span v-if="wait<2">已填写</span>
                    <span class="warning" v-else>未填写</span>
                </Cell>
            </div>
           <div @click="goPage(2)">
                <Cell  title="银行卡认证" is-link>
                    <span v-if="wait<1">已认证</span>
                    <span class="warning" v-else>未认证</span>
                </Cell>
           </div>
            
        </div>
        <button v-if="paytime<1" class="btn" @click="change">下一步</button>
        <button v-if="paytime==1" class="btn" @click="change">去借钱</button>
        <div class="info">
            <p>1.请您如实填写信息，虚假信息会直接影响您的借款申请</p>
            <p>2.部分信息提交后将不能修改</p>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import {Cell} from 'mint-ui'
import svgBar from 'svg-progress-bar'
import {mapGetters} from 'vuex'
import toast from '@/components/toast'
import common from '@/api/common'
export default {
    data(){
        return{
            svgOption:{
                radius: 45,
                circleWidth:5,
                pathColors:['#6495ED','#4169E1'],
                text: function (value) {
                    return this.htmlifyNumber(value)+ '<span style="font-size: 0.45em;">%</span>';
                    },
                textColor: '#4169E1'
            },
            paytime:0
        }
    },
    components:{
        CommonHeader,
        Cell,
        svgBar
    },
    created(){
        common.getPaytimes().then(res=>{
            if(res.code=='0'){
               this.paytime=res.data.number;
               //兼容一步支付用户
                //   common.getOrderList().then(res=>{
                //     if(res.code=='0'){
                //         if(res.data.order.length>0){
                //             let list=res.data.order[0]
                //             if(list.type=='3'){
                //               this.paytime=2;
                //             }
                //         }
                //     }
                // })
            }
        })
    },
    methods:{
       change(){
          if(this.wait>0){
              toast('请先完成认证信息！')
          }else if(this.paytime==0){
              this.$router.push('/credit')
          }else if(this.paytime==1){
               //this.$router.push('/loan')
               this.$router.push('/orderDetail')
          }
       },
       goPage(ind){
           if(ind==1){
               this.wait<3?this.$router.push('/myinfoed'):this.wait==3?this.$router.push('/myinfo'):toast('请按顺序认证')
           }else if(ind==2){
               this.wait<1?this.$router.push('cardlist'):this.wait==1?this.$router.push('/bindcard'):toast('请按顺序认证')
               
           }else{
               this.wait<2?this.$router.push('/dengji'):this.wait==2?this.$router.push('/zichan'):toast('请按顺序认证')
           }
       }

    },
    computed:{
        ...mapGetters(['wait']),
        hasDone(){
            switch(this.wait){
                case 4:
                return 0;
                break;
                case 3:
                return 25;
                break;
                case 2:
                return 50;
                break;
                case 1:
                return 75;
                break;
                case 0:
                return 100;
                break;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
    .kyc{
        @include bkg;
        .step{
            background: #fff;
            padding: 10px;
            text-align: center;
            margin-bottom: 10px;
            .warning{
                font-size: 13px;
                color: $primary;
            }
        }
        .fresh{
            color:$primary;
        }
        .btn{
            margin:10px 10%;
        }
        .info{
            position:absolute;
            font-size:13px;
            color:#aaa;
            padding:10px;
            bottom:20px;
        }
        .warning{
            color: $warning;
        }
    }
</style>

