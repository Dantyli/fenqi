<template>
    <div class="log">
        <common-header title="退款进度" />
        <div class="detail">
            <p>
                <span>退款申请提交成功</span>
                <span>{{data.time|format}}</span>
            </p>
            <div v-if="data.status==0">
                <p >
                    <span style="color:#aaa;">审核通过</span>
                </p>
                <p>
                    <span style="color:#aaa;">退款操作成功</span>
                </p>
            </div>
            <p v-if="data.status==1">
                <span>审核通过</span>
                <span>{{data.time|format}}</span>
            </p>
             <p v-if="data.status==2">
                <span>{{data.status|formatStatus}}</span>
                <span>{{data.update_Time|format}}</span>
            </p>
            <div v-if="data.status==1||data.status==2">
                <p>
                    <span style="color:#aaa;">退款操作成功</span>
                </p>
            </div>
             <p v-if="data.status==3">
                <span>审核通过</span>
                <span>{{data.update_Time|format}}</span>
            </p>
             <p v-if="data.status==3">
                <span>退款操作成功</span>
                <span>{{data.update_Time|format}}</span>
            </p>
             <p v-if="data.status==3">
                <span class="yellow">原路退回至原支付银行卡（1-3个工作日内到账）</span>
            </p>
        </div>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import common from '@/api/common'
export default {
    data(){
        return{
            data:{}
        }
    },
    filters:{
        format(val){
            return val.split(' ')[0]
        },
        formatStatus(val){
            let status=''
            switch(val){
                case 0:
                status='待审核'
                break;
                case 1:
                status='审核通过'
                break;
                case 2:
                status='联系客服查询最新审核进度'
                break;
                case 3:
                status='退款操作成功'
                break;
            }
            return status;
        }
    },
    components:{
        commonHeader
    },
    created(){
        common.getRefund().then(res=>{
            this.data=res.data.applyData[res.data.applyData.length-1]
        })
    }

}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.log{
    @include bkg;
    .detail{
        background: #fff;
        p{
            margin: 0 10px;
            display: flex;
            height: 40px;
            justify-content: space-between;
            align-items: center;
            span:nth-of-type(2){
                //color: #999;
                font-size: 13px;

            }
        }
    }
    .yellow{
        color: #dfb683;
    }
}
</style>

