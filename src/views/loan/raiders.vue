<template>
    <div class="raiders">
        <common-header title="借款攻略" />
        <p class="title">{{data.name}} 信用攻略</p>
        <div v-html="data.content" class="richtext">

        </div>
        <p class="btn" @click="goRegister">知道了，去借款</p>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import config from '@/config'
import common from '@/api/common'
export default {
    data(){
        return{
            data:{}
        }
    },
    components:{
        CommonHeader
    },
    created(){
         let params={
             merchantsId:this.$route.query.id
         }
         common.glue(params).then(res=>{
            if(res.code=='0'){
                  this.data=res.data.data
            }
        })
    },
    methods:{
        goRegister(){
            let params={
              merchantsId:this.$route.query.id
            }
            common.logApi(params).then(res=>{
                if(window.plus){
                    window.plus.runtime.openURL(this.data.registeredUrl)
                }else{
                    location.href=this.data.registeredUrl
                }
               //this.$router.push(`/frame?src=${this.data.registeredUrl}`);
            })
            
        }
    }

}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.raiders{
     @include bkg;
     background: #fff;
    .title{
        font-size: 18px;
        text-align: center;
        margin: 20px;
    }
    .richtext{
        margin: 20px;
        margin-bottom: 100px;
        padding: 10px;
    }
    .btn{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 0;
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
}
</style>


