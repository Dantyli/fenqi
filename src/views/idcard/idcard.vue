<template>
    <div class="idcard">
       <common-header title="身份实名" />
       <p class="tips">
           完成身份认证，预计可获得<span>3000元</span>额度
       </p>
       <div class="card">
           <p>
            <label>姓名：</label>
            <input type="text" v-model="name" placeholder="请输入姓名" />
            
        </p>
         <p>
            <label>身份证：</label>
            <input type="text" v-model="cardno" placeholder="请输入身份证号" />
            <label>
                <input type="file" accept="image/*" @change="onFileChange" style="display:none" />
                <img class="camera"  src="../../assets/camera.png" />
            </label>
        </p>
       </div>
       <p class="tip">注：请认真核对本人信息，提交后无法修改</p>
       <button class="btn" @click="submit">提交</button>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import toast from '@/components/toast'
import userApi from '@/api/userApi'
import Util from '@/components/util'
import {Indicator} from 'mint-ui'
export default {
    components:{
        CommonHeader
    },
    data(){
        return{
            vertify:false,
            cardno:'',
            name:''
        }
    },
    methods:{
        submit(){
            console.log(this.cardno.length,this.name.length)
            if(this.cardno.length<16||this.name.length==0){
                 toast('请填写正确信息！')
            }else{
                this.goStep()
            }
            
        },
        onFileChange(e){
            Indicator.open()
            let formData = new FormData();  
            formData.append('type',1);  
            formData.append('token',localStorage.getItem('token'));  
            formData.append('operation_id',sessionStorage.getItem('openid')); 
            if(e.target.files[0].size>1024*1024*2){
                Util.resize(e.target.files[0]).then(res=>{
                     formData.append('file',res,'1.png')
                     this.upload(formData);
                })   
            }else{
                   formData.append('file',e.target.files[0]);
                   this.upload(formData);
            }
        },
        upload(formData){
            userApi.upload(formData).then(res=>{
                if(res.code==0){
                    this.cardno=res.data.id_card_number
                    this.name=res.data.name
                    Indicator.close()
                }else{
                    toast('请上传身份证清晰正面照');
                    Indicator.close()
                }
            },err=>{
                Indicator.close();
            })
        },
        goStep(){
            let params={
                authentication:1,
                identity:this.cardno,
                name:this.name
            }
            userApi.addInfo(params).then(res=>{
                if(res.code=='0'){
                    this.$store.commit('upverify','authentication')
                    this.$router.replace('/myinfo')
                }else{
                    toast(res.msg)
                }
            })
        }
    },
    beforeDestroy(){
         Indicator.close();
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/var.scss';
    .idcard{
        @include bkg;
        text-align: center;
        .card{
            background: #fff;
            padding: 0 10px;
            font-size: 16px;
            p{
                text-align: left;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                input{
                    border: none;
                    width: 200px;
                    outline: none;
                    height: 30px;
                    font-size: 16px;
                }
                span{
                    color: $primary;
                    float: right;
                    margin-top: 5px;
                }
                .camera{
                    height: 20px;
                    float: right;
                    margin-top: 5px;
                }
            }
        }
        .tip{
            color: $warning;
            font-size: 13px;
            text-align: center;
            line-height: 40px;

        }
    }
    .tips{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 13px;
        span{
            color: $primary
        }
    }
    .confirmInfo{
        text-align: center;
        width: 300px;
        position: fixed;
        top: 20%;
        left: 50%;
       transform: translateX(-50%);
        z-index: 1000;
        background: #fff;
        border-radius: 3px;
        padding: 20px;
        p{
            span{
                width: 30%;
                display: inline-block;
            }
            input{
                border: 1px solid #eee;
                outline: none;
                height: 30px;
                padding-left:3px; 
                width: 60%;
                font-size: 14px;
                margin-top: 5px;
            }
            padding: 5px;
        }
        i{
            font-size: 13px;
            color: $warning;
            margin: 15px 0;
            display: inline-block;
        }
    }
    .mask{
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0,0,0,0.5);
        z-index: 999;
    }
</style>


