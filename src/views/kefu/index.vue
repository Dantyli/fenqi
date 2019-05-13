<template>
    <div class="kefu">
          <common-header title="客服" /> 
          <div class="kefu-btn">
              <img src="../../assets/kefu.png" />
              <p>在线客服</p>
              <button onclick="location.href='https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1I2hgps&scene=SCE00004456'" class="btn">立即访问</button>
          </div>
          <div class="kefu-info">
              <p style="border:none">进入在线客服请注明：</p>
              <p>蓝莓分期用户</p>
              <p>工作时间：9:00-21:00</p>
          </div>
    </div>    
</template>
<script>
import CommonHeader from '@/components/header'
export default {
    components:{
        CommonHeader
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
