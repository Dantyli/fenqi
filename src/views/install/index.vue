<template>
    <div class="install">
       <common-header title="安装流程" />
       <img class="bg" src="../../assets/download_h.png" alt="">
       <button @click="$router.push('/index/home')" class="btn">去借钱</button>
       <img class="top" src="../../assets/logo.png" alt="">
       <!-- <img class="bottom" src="../../assets/logo.png" alt=""> -->
       <p @click="copy" class="copy"></p>
       <input type="text" value="https://kuaiyouqian.net/web_app/dist/index.html" style="opacity:0;position:absolute;" ref="input" />
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import toast from '@/components/toast'
export default {
    components:{
        commonHeader
    },
    methods:{
        copy(){
            let dom=this.$refs.input;
            if(window.navigator.userAgent.toLowerCase().indexOf('iphone')>-1){
                    window.getSelection().removeAllRanges();
               var range = document.createRange();
               range.selectNode(dom);
               window.getSelection().addRange(range);
               // 执行 copy 操作
               setTimeout(()=>{
                    document.execCommand('copy');
                    window.getSelection().removeAllRanges();
                    toast(`复制成功`)
               },0)
               
            }else{
                dom.select();
                document.execCommand('Copy');
                dom.blur()
                toast('复制成功！')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.install{
   @include bkg;
   position: relative;
   height: auto;
   .bg{
       width: 100%;
   }
   .btn{
       position: absolute;
       bottom:15px;
       left:10%;
   }
   .top{
       position: absolute;
       top: 52px;
       left:2%;
       width:60px;
   }
   .bottom{
       position: absolute;
       bottom:17%;
       left:11%;
       width:50px;
   }
   .copy{
       background:rgba(0,0,0,0);
       height: 30px;
       position: absolute;
       top: 35%;
       width: 100%;
   }
   

}
</style>

