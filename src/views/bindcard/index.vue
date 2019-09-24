<template>
    <div class="bindcard">
        <common-header title="绑定银行卡" />
         <p class="tips">
           完成绑卡，预计可获得<span>6000元</span>额度
         </p>
         <div class="card">
             <p>
                 <label>银行卡：</label>
                 <input type="number" v-model="cardno" @blur="checkCode" placeholder="请输入银行卡号" />
                 <label>
                     <input type="file" accept="image/*" @change="onFileChange" style="display:none" />
                     <img class="camera"  src="../../assets/camera.png" />
                 </label>
             </p>
         </div>
         <div class="support">
             <p v-if="!bank" class="warning" style="color:#f00;font-size:13px;">请正确填写本人借记卡信息</p>
            <p v-else>{{bank}}</p>
             <router-link to="/supportbank" tag="p">查看支持银行</router-link>
         </div>
         <div class="card">
             <p>
                 <label>持卡人：</label>
                 <input  v-model="name" />
             </p>
              <p>
                 <label>身份证：</label>
                 <input  v-model="identity" />
             </p>
              <p>
                 <label>手机号：</label>
                 <input type="number" placeholder="请输入银行卡预留手机号" v-model="phone" />
             </p>
             <p>
                 <label>验证码：</label>
                 <input type="number" placeholder="请输入短信验证码" v-model="code" />
                 <span @click="sendCode">{{countdown}}</span>
             </p>
         </div>
         <p class="warning notice">若长时间未收到验证码，请核实银行卡号和银行预留手机号</p>
         <button class="btn" @click="bindcard">立即绑卡</button>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import toast from '@/components/toast'
import {Indicator} from 'mint-ui'
import Util from '@/components/util'
import userApi from '@/api/userApi'
import axios from 'axios';
let bankList={}
export default {
    components:{
        CommonHeader
    },
    data(){
        return{
            cardno:'',
            phone:'',
             code:'',
            countdown:'获取验证码',
            sent:false,
            name:'--',
            identity:'--',
            bank:'',
            bankCode:'',
            redirect:''
        }
    },
    methods:{
        sendCode(){
            if(this.sent) return;
            if(!/\d{1,38}/.test(this.cardno)||!/\d{11}/.test(this.phone)){
                 toast('银行卡信息填写有误！')
            }else{
                let params={
                    identity:this.identity,
                    name:this.name,
                    bank_card:this.cardno,
                    phone:this.phone,
                    type:1,
                    bank:this.bank,
                    bankCode:this.bankCode,
                    list:bankList
                }
                Indicator.open()
                  userApi.bindCard(params).then(res=>{
                      Indicator.close()
                      if(res.code=='0'){
                          toast('验证码已发送');
                            this.sent=true;
                            this.countdown=60
                            this.sent=true
                            this._timer=setInterval(()=>{
                                this.countdown--
                                if(this.countdown==0){
                                    this.countdown='发送验证码'
                                    clearInterval(this._timer);
                                    this.sent=false
                                } 
                            },1000) 
                      }else{
                          toast(res.msg)
                      }
                  })
                
            }
        },
        bindcard(){
             if(!/\d{1,38}/.test(this.cardno)||!/\d{11}/.test(this.phone)||!/\d{1,10}/.test(this.code)){
                 toast('银行卡信息填写有误！')
            }else{
                let params={
                    identity:this.identity,
                    name:this.name,
                    bank_card:this.cardno,
                    phone:this.phone,
                    type:1,
                    bank:this.bank,
                    bankCode:this.bankCode,
                    list:bankList,
                    validatecode:this.code
                }
                Indicator.open()
                  userApi.bindCard(params).then(res=>{
                      Indicator.close()
                      if(res.code=='0'){
                          if(this.redirect=='default'){
                               this.$store.commit('upverify','bankCard')
                                this.$router.replace('/kyc')
                          }else{
                               this.$router.replace(`/${this.redirect}`)
                          }
                      }else{
                          toast(res.msg);
                      }
                  })
            }
            
        },
        onFileChange(e){
            Indicator.open()
            let formData = new FormData();  
            formData.append('type',2);  //银行卡图片
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
            //console.log(formData)
            userApi.upload(formData).then(res=>{
                if(res.code==0){
                    this.cardno=res.data.number
                    this.checkCode()
                    Indicator.close()
                }else{
                    toast('识别失败，请重新上传');
                    Indicator.close()
                }
            })
        },
        checkBank(val,type=1){
            for(var i=0;i<bankList.list.length;i++){
                for(var j=0;j<bankList.list[i].reg.length;j++){
                    if(bankList.list[i].reg[j].test(val)){
                        this.bank=bankList.list[i].name;
                        this.bankCode=bankList.list[i].code
                    }
                }
            }
        },
        //更换为支付宝接口校验...
        checkCode(){
            if(this.cardno.length<6) return;
           axios.get(`https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=${this.cardno}&cardBinCheck=true`).then(res=>{
               let sup=true
                for(var i=0;i<bankList.list.length;i++){
                        if(bankList.list[i].code==res.bank){
                            this.bank=bankList.list[i].name;
                            this.bankCode=res.bank
                            sup=false
                        }
                    }  
                if(sup){
                    toast('您的银行不在支持银行中，请更换银行卡尝试！',2000)
                    this.bank=''
                    this.bankCode=''
                }
           })
        }
    },
    created(){
        userApi.getUserInfo().then(res=>{
            if(res.code=='0'){
                this.identity=res.data.authentication.identity
                this.name=res.data.authentication.name
            }else{
                toast('获取用户信息失败，请重试！')
            }
        })
        axios.get('https://kuaidaozhang.cn/static/bank.json').then(res=>{
            bankList=res;
        })
        this.redirect=this.$route.query.from||'default'
    },
    beforeDestroy(){
        Indicator.close()
    },
    watch:{
        cardno:function(val,oldVal){
            // if(val.length==6){
            //     this.checkBank(val)
            // }else if(val.length<6){
            //     this.bank=''
            //     this.bankCode=''
            // }else if(val.length>10&&!this.bank){
            //      this.bank=''
            //     this.bankCode=''
            //      toast('您的银行不在支持银行中，请更换银行卡尝试！')
            // }
            if(val.length<6){
                this.bank=''
                this.bankCode=''
            }
        },
        deep:true
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/var.scss';
    .bindcard{
       @include bkg;
        .tips{
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 13px;
            span{
                color: $primary
            }
        }
        .card{
            background: #fff;
            padding: 0 10px;
            font-size: 16px;
            p{
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                input{
                    border: none;
                    width: 180px;
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
        .notice{
            padding: 10px;
        }
        .btn{
            margin: 10px 10%;
        }
        .support{
            display: flex;
            justify-content: space-between;
            padding: 10px;
            color: $primary;
        }
        .warning{
            color: $warning;
            font-size: 12px;
        }
    }
</style>
