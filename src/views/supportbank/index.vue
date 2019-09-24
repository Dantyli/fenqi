<template>
    <div class="support">
        <common-header title="支持银行" />
        <ul class="bank-list">
            <li v-for="(item,index) in list" :key="index">
                <img :src="baseIcon+item.picpath" />
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.edu}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import config from '@/config'
import axios from 'axios'
export default {
    components:{
        CommonHeader
    },
    data(){
        return{
            list:[],
            baseIcon:config.baseIcon
        }
    },
    created(){
        axios.get('https://kuaidaozhang.cn/static/bank.json').then(res=>{
            this.list=res.list
        })
    }  
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
    .support{
       @include bkg;
        .bank-list{
            background: #fff;
            padding: 0 10px;
            li{
                list-style: none;
                 border-bottom: 1px solid #eee;
                 display: flex;
                 padding: 5px 0;
                 img{
                     height: 50px;
                     width: 50px;
                 }
                 div{
                     flex: 1;
                     line-height: 25px;
                     padding-left: 10px;
                     p:nth-of-type(1){
                         font-size: 16px;
                         color: #333;
                     }
                     p:nth-of-type(2){
                         font-size: 13px;
                         color: #999;
                     }
                 }
            }
        }
    }
</style>


