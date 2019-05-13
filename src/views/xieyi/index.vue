<template>
    <div class="xieyi">
        <common-header title="我的协议" />
        <ul>
            <li>
                <Cell title="用户注册协议" is-link :to='first' />
            </li>
             <li>
                <Cell title="信用检测评估服务协议" is-link :to='second' />
            </li>
        </ul>
    </div>    
</template>
<script>
import CommonHeader from '@/components/header'
import config from '@/config'
import {Cell} from 'mint-ui'
export default {
    components:{
         CommonHeader,
         Cell
    },
    data(){
        return{
            first:`${config.domain}/register.html`,
            second:`./service.html`
        }
    }    
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.xieyi{
    @include bkg;
    li{
        margin-top: 10px;
    }
}
</style>

