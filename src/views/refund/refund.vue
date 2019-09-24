<template>
<div class="refund">
    <common-header title="退款"  />
    <ul class="refund-nums">
        <li>
            <label>注册手机号 *</label><br />
            <input type="text" v-model="phone">
        </li>
        <!-- <li>
            <label>支付宝账户姓名 </label><br />
            <p class="tips">请填入您的支付宝账户收款人姓名，和绑卡人姓名必须一致！</p>
            <input type="text" v-model="name">
        </li>
        <li>
            <label>支付宝账号 </label><br />
            <p class="tips">用于接收退款的支付宝账号</p>
            <input type="text" v-model="account">
        </li> -->
         <li>
            <label>请填写订单号 *</label><br />
            <!-- <p class="tips">订单列表中点击对应订单号可以轻松复制</p> -->
            <input type="text" v-model="order">
        </li>
        <p style="color:#f00;margin: 0 10px;font-size:13px;">注： 借款失败截图或借款失败短信截图都可以；如果您不想申请该平台的借款，也可以将原因写在纸上或者填写在手机记事本中截图上传，比如原因是： 觉得该平台借款利率高等，这样也是属于借款失败的。</p>
    </ul>
    <ul class="refund-img">
        <li v-for="(item,i) in list" :key="i">
          <p class="title"><img :src="item.icon">  {{item.name}} <a href="javascript:" @click="goOut(item.url)">去贷款平台</a> </p>
          <div class="label">
              
              <div class="demo" @click="preImg(item)">
                 <img v-if="item.tacitlyUrl" :src="item.tacitlyUrl"  alt="">
                 <div v-else ></div>
                 <p v-if="item.tacitlyUrl">示例图片</p>
                 <p v-else>暂无示例</p>
              </div>
              <label>
              <input type="file" accept="image/*" @change="(e)=>onFileChange(e,i)" style="display:none">
              <div v-if="!imgSrc[i]" class="upload">
                  <img class="logo" src="../../assets/upload1.jpeg" />
              </div>
              <img class="uploadimg" :src="imgSrc[i]" v-else />
              </label>
          </div>
        </li>
    </ul>
    <div class="pre" v-if="pre" @click="pre=false">
        <img :src="preImgSrc" />
        <span @click="pre=false" class="close">关闭</span>
    </div>
    <p class="we">请您准确上传未借款成功的图片，我们会在一个工作日内审核</p>
    <button class="btn" @click="submit">提交</button>
   
</div>
    
</template>
<script>
import commonHeader from '@/components/header'
import Util from '@/components/util'
import toast from '@/components/toast'
import {Indicator} from 'mint-ui'
import userApi from '@/api/userApi'
import common from '@/api/common'
import config from '@/config'
export default {
    data(){
        return{
            list:[],
           imgSrc:[],
           phone:localStorage.getItem('phone'),
        //    files:[],
           order:sessionStorage.getItem('C_order1')||'',
           name:'',
           account:'',
           token:'',
           baseURL:config.baseURL,
           imgs:[],
           preImgSrc:'',
           pre:false
        }
    },
    created(){
      //去除七牛云上传
       common.refundMerchant({type:'1'}).then(res=>{
            if(res.code=='0'){
               this.list=res.data
            }else{
                toast(res.msg)
            }
        })
    },
    components:{
      commonHeader
    },
    methods:{
        preImg(e){
            this.pre=true;
            this.preImgSrc=e.tacitlyUrl
        },
         goOut(url){
            if(window.plus){
                window.plus.runtime.openURL(url)
            }else{
                location.href=url
            }
        },
      async onFileChange(e,n){   
       let img=await Util.resize(e.target.files[0]);
       Indicator.open()
       let data=await this.uploadSImg(img)
       Indicator.close()
       if(data.code==0){
           let getUrl=function(blob){
                    return window[window.webkitURL ? 'webkitURL' : 'URL']['createObjectURL'](blob);
                }
            this.$set(this.imgSrc,n,getUrl(e.target.files[0]))
            this.imgs[n]=data.url
       }else{
           toast(data.msg)
       }
      },
      //单文件上传
      uploadSImg(e){
          let formdata=new FormData()
          formdata.append('token',localStorage.getItem('token'))
          formdata.append('file',e)
         return common.uploadImg(formdata)
      },
      submit(){
          let flag=true;
          for(let i=0;i<this.imgs.length;i++){
                if(typeof(this.imgs[i])!=='string'){
                    flag=false;
                }
          }
            //增加内容判断，修复最后一张就可提交问题，以后建议使用对象存储    
          if(!flag||this.imgs.length<this.list.length||this.phone.length<11||this.order.length<8){
              toast('请填写必填信息和所有失败截图！')
              return;
          }
          Indicator.open()
          let formdata=new FormData()
          formdata.append('token',localStorage.getItem('token'))
          formdata.append('phone',this.phone)
          formdata.append('orderNumber',this.order)
          formdata.append('name',this.name)
          formdata.append('zfbAccount',this.account)
           formdata.append('operation_id',sessionStorage.getItem('openid')); 
          let imgStr=this.imgs.join(',')
          formdata.append('img',imgStr)
        //    this.files.forEach(item=>{
        //        formdata.append("file",item)
        //    })
          userApi.refund(formdata).then(res=>{
              Indicator.close()
              if(res.code=='0'){
                  toast('提交成功')
                  this.$router.replace('/success');

              }else{
                  toast(res.msg)
              }
          })
      }
    },
    beforeDestory(){
        Indicator.close()
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.pre{
    z-index: 1111;
    background: #000;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        margin: 0 auto;
    }
    span{
        color: #fff;
        position: fixed;
        top: 20px;
        right: 20px;
        
    }
}
.refund{
    @include bkg;
    height: auto;
    &-nums{
        background: #fff;
        padding-bottom: 10px;
        li{
           margin: 10px;
           font-size: 16px;
           label{
               width: 100%;
                line-height: 40px;
           }
           input{
              width:250px;
              border: 1px solid #999; 
              height: 35px;
              line-height: 35px;
              outline: none;
              padding: 0 5px;
              font-size: 15px;
           }
           .tips{
               font-size: 13px;
               color: #999;
           }
        }
    }
    &-img{
        background: #fff;
        padding: 10px;
        margin-top: 10px;
        li{
            p:nth-of-type(1){
                line-height: 60px;
                font-size: 16px;
                img{
                    width: 25px;
                    height: 25px;
                    vertical-align: middle;
                }
                a{
                    color: $primary;
                    border: 1px solid $primary;
                    font-size: 14px;
                    text-decoration: none;
                    &:active{
                        text-decoration: none;
                    }
                }
            }
            p:nth-of-type(2){
                line-height: 30px;
            }
            .label{
               // height: 150px;
                display: block;
                .upload{
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction:column;
                    display: inline-block;
                }
            }
            .logo{
               // width: 60px;
                height: 60px;
            }
            .uploadimg{
                height: 60px;
                
            }
            .demo{
                height: 60px;
                width: 60px;
                margin-right:10px; 
                position: relative;
                display: inline-block;
                img{
                    width: 100%;
                    height: 100%;
                }
                p{
                    background: rgba(0,0,0,0.5);
                    color: #fff;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    width: 100%;
                    font-size: 13px;
                }
            }
        }
    }
    .btn{
        margin: 20px 10%;
        margin-bottom: 50px;
    }
    .we{
        margin: 10px;
        color: #999;
    }
}
</style>

