<template>
    <div class="login">
         <h2>欢迎来到嗨借！</h2>
         <div class="label">
              <input placeholder="请输入手机号码" maxlength="11" type="number" v-model.number="phonenum">
         </div>
         <div class="label">
             <input placeholder="验证码" maxlength="4" type="number" v-model.number="code">
             <button :class="sent?'hasSend':'fresh'" @click="sendCode">
                 {{countdown}}
             </button>
         </div>
         <button class="btn" @click="login">登录</button>
         <p class="xieyi"><span @click="agre=!agre"><img v-if="agre" src="../../assets/check.png"> <img src="../../assets/uncheck.png" v-else /> 我已阅读并同意</span><span @click="show=true">《<a href="javascript:">平台用户注册服务协议和隐私政策</a>》</span></p>
         <Popup title="协议"  type='2' @handleClose="close" v-show="show"  />
    </div>
</template>
<script>
import toast from '@/components/toast'
import userApi from '@/api/userApi'
import config from '@/config'
import Popup from '@/components/Popup'
export default {
    data(){
        return{
            redirect:'',
            phonenum:'',
            code:'',
            countdown:'发送验证码',
            sent:false,
            hrf:`${config.domain}/register.html`,
            agre:false,
            show:true
        }
    },
    components:{
        Popup
    },
    methods:{
         close(type){
             if(type=='confirm'){
                this.agre=true;
            }
            this.show=false
        },
        login(){
            if(/\d{11}/.test(this.phonenum)&&/\d{4}/.test(this.code)){
                if(!this.agre){
                    toast('请先阅读并同意协议后操作')
                    return;
                }
                let param={
                    phone:this.phonenum,
                    code:this.code,
                    type:1
                }
                userApi.login(param).then(res=>{
                    if(res.code=='0'){
                       localStorage.setItem('phone',this.phonenum);
                        this.$store.commit('getdata',res.data)
                        if(this.redirect){
                            this.$router.replace(this.redirect)
                        }else{
                            if(!res.data.authentication){
                                this.$router.replace('/idcard')
                            }else if(!res.data.data){
                                 this.$router.replace('/myinfo')
                            }else if(!res.data.property){
                                 this.$router.replace('/zichan')
                            }else if(!res.data.bankCard){
                                 this.$router.replace('/bindcard')
                            }else{
                                 this.$router.replace('/index/home')
                            }
                            
                        }
                    }else{
                        toast(res.msg)
                    }
                })
                  
            }else{
                toast('请输入11位手机号和4位验证码！')
            }
            
        },
        sendCode(){
            if(this.sent) return;
            if(/\d{11}/.test(this.phonenum)){
                userApi.sendSms({phone:this.phonenum,key:43718,sign:'【嗨借】'}).then(res=>{
                    if(res.code=='0'){
                        toast('验证码发送成功！');
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
                 
            }else{
                toast('请输入正确手机号码',1500)
            }
            
        }
    },
    mounted(){
        this.redirect=this.$route.query.redirect||'';
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.login{
    padding: 10px 10px 70px 10px;
    .label{
        border-bottom: 1px solid #eee;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        input{
            outline: none;
            height: 25px;
            width: 200px;
            border: none;
            font-size: 15px;
        }
        button{
            width: 80px;
            height: 25px;
            border-radius: 12px;
            border: none;
            outline: none;
            background: $primary;
            color: #fff;
        }
        
    }
    .xieyi{
        text-align: center;
        font-size: 14px;
        color: 
        a{
            text-decoration: none;
        }
        img{
            width: 20px;
            vertical-align: bottom;
        }
    }
    .btn{
            margin: 20px 10%;
        }

}
</style>