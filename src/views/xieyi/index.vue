<template>
    <div class="xieyi">
        <common-header title="我的协议" />
        <ul>
            <li>
                <Cell title="用户注册服务协议" is-link :to='first' />
            </li>
             <li>
                <Cell title="风险评级报告与代扣协议" is-link :to='second' />
            </li>
              <li>
                <Cell title="隐私政策" is-link to='./privacy.html' />
            </li>
              <!-- <li>
                <Cell title="VIP融资咨询服务协议" is-link to='./vip.html' />
            </li> -->
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

