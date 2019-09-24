<template>
    <div class="frame">
        <common-header title="" />
        <iframe :src="outUrl"></iframe>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
export default {
    data(){
        return{
            outUrl:'https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1I2hgps&scene=SCE00004456'
        }
    },
    created(){
        
    },
    components:{
        commonHeader
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.frame{
    height: 100%;
   // @include bkg;
    iframe{
        width: 100%;
        height: 100%;
        border: none;
    }

}
</style>

