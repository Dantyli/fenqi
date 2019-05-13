<template>
    <div class="my">
        <div class="my-title">
            <img src="../../assets/logo.png" />
            {{phone}}
        </div>
        <div class="my-list">
            <Cell to="/kyc" title="我的资料" is-link>
                <span v-if="wait>0" class="addedit">完善资料<span class="addnums">{{wait}}</span></span>
                 <img slot="icon" src="../../assets/my_service.png" width="22" height="22">
            </Cell>
            <div @click="toReport">
            <Cell title="我的报告" is-link>
                <img slot="icon" src="../../assets/my_report.png" width="22" height="22">
            </Cell>
            </div>
            <Cell to="/xieyi" title="我的协议" is-link>
                <img slot="icon" src="../../assets/my_xieyi.png" width="22" height="22">
            </Cell>
        </div>
        <div class="my-list">
            <Cell to="/kefu" title="客服" is-link>
                <img slot="icon" src="../../assets/kefu1.png" width="22" height="22">
            </Cell>
            <Cell to="/setting" title="设置" is-link>
                <img slot="icon" src="../../assets/setting.png" width="22" height="22">
            </Cell>
        </div>
    </div>
</template>
<script>
import {Cell} from 'mint-ui'
import {mapGetters} from 'vuex'
import toast from '@/components/toast'
export default {
    components:{
        Cell
    },
    computed:{
         ...mapGetters(['wait']),
       phone(){
           return localStorage.getItem('phone').replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
       }
    },
    methods:{
        toReport(){
            if(this.wait==0){
               this.$router.push('/report')
            }else{
                toast('您还没有信用评估报告！')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.my{
    height: 100%;
    background: #f4f4f4;
    &-title{
        height:120px;
        background: $primary;
        display: flex;
        align-items: center;
        padding: 0 10px;
        color: #fff;
        font-size: 16px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin:0 10px;
        }
    }
    &-list{
        margin-top: 10px;
        background: #fff;
        .addedit{
            color: $warning;
            span{
                color: #fff;
                background: $warning;
                border-radius:7px;
                padding:0 5px;
            }
        }
    }
}
</style>

