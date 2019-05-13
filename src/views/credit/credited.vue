<template>
    <div class="credit">
        <common-header title="评估结果" />
        <div class="fenshu">
            <p>综合评分</p>
            <p>95</p>
            <p>小主，您的资质相当可以，没错，我们就是您的专属送财童子，准备借钱喽</p>
        </div>
        <Cell to="/report" title="信用评估报告" is-link />
        <button v-if="paytimes==1" class="btn" @click="$router.push('/loan')">去借钱</button>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import {Cell} from 'mint-ui';
import common from '@/api/common'
export default {
    components:{
        CommonHeader,
        Cell
    },
    data(){
        return {
            paytimes:0
        }
    },
    created(){
     common.getPaytimes().then(res=>{
         if(res.code=='0'){
             this.paytimes=res.data.number;
         }
     })
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.credit{
    @include bkg;
    .btn{
        margin: 20px 10%;
    }
    .fenshu{
        background: #fff;
        padding: 20px;
        text-align: center;
        margin-bottom: 20px;
        p:nth-of-type(1){
            font-size: 14px;
        }
        p:nth-of-type(2){
            font-size: 38px;
            color: $warning;
            line-height: 50px;
        }
        p:nth-of-type(3){

        }
    }

}
</style>


