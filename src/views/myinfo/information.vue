<template>
    <div class="info">
        <common-header title="个人信息" />
        <ul>
            <li>
                <span>居住所在地区：</span>
                {{userinfo.site}}
            </li>
            <li>
                <span>详细地址：</span>
                {{userinfo.detailedSite}}
            </li>
            <li><span>职业：</span>{{userinfo.profession}}</li>
            <li>
                <span>月收入：</span> {{userinfo.income}}
            </li>
             <li>
                <span>芝麻分数：</span> {{userinfo.sesame}}
            </li>
        </ul>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import userApi from '@/api/userApi'
export default {
    data(){
        return{
            userinfo:{
                site:'--',
                detailedSite:'--',
                income:'--',
                profession:'--',
                sesame:'--'
            }
        }
    },
    components:{
        commonHeader
    },
    created(){
        userApi.getUserInfo().then(res=>{
            this.userinfo=res.data.data
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

