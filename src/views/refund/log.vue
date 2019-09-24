<template>
    <div class="log">
        <common-header title="退款记录" />
        <ul v-if="list.length>0">
            <li v-for="(item,i) in list" :key="i">
                <p>
                    <span>申请退款日期</span>
                    <span>{{item.time|format}}</span>
                </p>
                <p>
                    <span>退款金额（元）</span>
                    <span>{{item.money}}</span>
                </p>
                <p>
                    <span>退款状态</span>
                    <span>{{item.status|formatStatus}}</span>
                </p>
                <p style="justify-content:flex-end;">
                    <span class="detail" @click="$router.push(`/logd?id=${item.id}`)">查看</span>
                </p>
            </li>
        </ul>
        <p v-else style="margin-top:200px;text-align:center">
            您还没有退款订单！
        </p>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import common from '@/api/common'
export default {
    data(){
        return {
            list:[]
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
                status='已通过'
                break;
                case 2:
                status='已拒绝'
                break;
                case 3:
                status='已退款'
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
             if(res.code=='0'){
                 this.list=res.data.applyData
             }
         })
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.log{
    @include bkg;
    height: auto;
    li{
        background: #fff;
        margin-top: 20px;
        padding: 5px;
        box-sizing: border-box;
        p{
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .detail{
              color: $primary;
              border: 1px solid $primary;
              padding:2px 8px;
          }
        }
    }
}
</style>
