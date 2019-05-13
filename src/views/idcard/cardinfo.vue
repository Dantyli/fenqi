<template>
    <div class="info">
        <common-header title="身份实名" />
        <div class="info-status">
            您的身份认证已通过
        </div>
        <div class="info-msg">
            <Cell title="姓名" :value="auth.name"></Cell>
            <!-- <Cell title="性别" value="男"></Cell> -->
        </div>
         <div class="info-msg">
            <Cell title="证件类型" value="身份证"></Cell>
            <Cell title="证件号码" :value="auth.identity"></Cell>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import userApi from '@/api/userApi'
import {Cell} from 'mint-ui'
export default {
    data(){
        return{
            auth:{
            name:'--',
            identity:'--'
            }
        }
    },
    components:{
        CommonHeader,
        Cell
    },
    created(){
        userApi.getUserInfo().then(res=>{
            if(res.code=='0'){
                this.auth=res.data.authentication
            }
        })
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.info{
    @include bkg;
    &-status{
        color: #aaa;
        text-align: center;
        padding: 20px;
        background: #fff;
    }
    &-msg{
        margin-top: 10px;
    }
}
</style>

