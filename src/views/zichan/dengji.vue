<template>
    <div class="info">
        <common-header title="资产信息" />
        <ul>
            <li>
                <span>信用卡：</span>
                {{userinfo.credit}}
            </li>
            <li>
                <span>名下房产：</span>
                {{userinfo.house}}
            </li>
            <li><span>名下汽车：</span>{{userinfo.automobile}}</li>
            <li>
                <span>微粒贷：</span> {{userinfo.small}}
            </li>
             <li>
                <span>蚂蚁借呗：</span> {{userinfo.borrow}}
            </li>
             <li>
                <span>借贷情况：</span> {{userinfo.debit}}
            </li>
        </ul>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import common from '@/api/common'
export default {
    data(){
        return{
            userinfo:{
                credit:'--',
                house:'--',
                small:'--',
                borrow:'--',
                debit:'--',
                automobile:'--'
            }
        }
    },
    components:{
        commonHeader
    },
    created(){
        common.getZc().then(res=>{
            this.userinfo=res.data.property
        })
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.info{
    @include bkg;
    ul{
        margin-top: 10px;
    }
    li{
        background: #fff;
        border-bottom: 1px solid #eee;
        line-height: 45px;
        padding: 0 10px;
        span{
            color: #333;
        }
        color: #999;
    }
}
</style>

