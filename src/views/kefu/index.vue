<template>
    <div class="kefu">
          <common-header title="客服" /> 
          <div class="kefu-btn">
              <img src="../../assets/kefu.png" />
              <p>在线客服</p>
              <button @click="$router.push('/frame')" class="btn">立即访问</button>
          </div>
          <div class="kefu-info">
               <p style="border:none">官方客服电话：</p>
              <p style="font-size:18px;color:#4169E1;">{{kfphone}} <a style="float:right;" :href="`tel:`+kfphone">立即拨打</a></p>
              <p style="border:none">进入在线客服请注明：</p>
              <p>嗨借用户</p>
              <p>工作时间：9:30-18:30 (周一至周六)</p>
          </div>
    </div>    
</template>
<script>
import CommonHeader from '@/components/header'
import common from '@/api/common'
export default {
    components:{
        CommonHeader
    },
    data(){
       return {
           kfphone:'075536375410'
       }
    },
    created(){
        common.getConfig().then(res=>{
            this.kfphone=res.kfphone
        })
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/var.scss';
    .kefu{
        @include bkg;
        &-btn{
            img{
                width: 60px;
            }
            padding: 20px 0;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                line-height: 40px;
            }
            flex-direction: column;
        }
        &-info{
            background: #fff;
            padding: 10px;
            border-top: 1px solid #eee;
            p{
                border-bottom: 1px solid #eee;
                line-height: 38px;
            }
        }
    }
</style>
