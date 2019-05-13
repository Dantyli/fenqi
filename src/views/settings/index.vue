<template>
    <div class="setting">
       <common-header title="设置" />
       <div class="logout" @click="logout">
            <Cell title="退出登录" is-link></Cell>
       </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import {Cell,MessageBox} from 'mint-ui'
export default {
    components:{
        CommonHeader,
        Cell
    },
    methods:{
        logout(){
            MessageBox.confirm('确定执行此操作?').then(action => {
                if(action=='confirm'){
                    localStorage.removeItem('token');
                    localStorage.removeItem('phone');
                    this.$router.replace('/');
                }
});
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.setting{
   @include bkg;
    .logout{
        margin-top: 10px;
    }
}
</style>
