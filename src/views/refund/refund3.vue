<template>
    <div class="refund">
         <common-header title="退款申请" />
           <div class="type">
             <p>请上传贷款产品失败截图</p>
             <p>限制每张图片4M以内，仅支持jpg，jpeg，png</p>
         </div>
           <ul class="refund-nums">
            <li>
                <label>注册手机号 *</label><br />
                <input type="text" v-model="phone">
            </li>
            <li>
                <label>请填写订单号 *</label><br />
                <!-- <p class="tips">订单列表中点击对应订单号可以轻松复制</p> -->
                <input type="text" v-model="order">
            </li>
        </ul>
       
         <ul>
             <li v-for="(item,i) in list" :key="i">
                 <p><img :src="baseURL+item.icon" />
                 {{item.name}}
                 <a href="javascript:" @click="goOut(item.url)">去贷款平台</a></p>
                   <label>
                 <div class="upload">
                        <img v-if="!imgSrc[i]" src="../../assets/upload.jpeg" alt="" />
                     <img  :src="imgSrc[i]" v-else />
                      {{!imgSrc[i]?'点击上传截图':''}}
                     <input type="file" @change="(e)=>onFileChange(e,i)" accept="image/*" style="display:none">
                 </div>
                  </label>
                
             </li>
         </ul>
         <button @click="submit" class="submit">提交</button>
    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import toast from '@/components/toast'
import common from '@/api/common'
import config from '@/config'
import {Indicator} from 'mint-ui'
import Util from '@/components/util'
import userApi from '@/api/userApi'
export default {
    data(){
        return{
            list:[],
            files:[],
            baseURL:config.baseURL,
            imgSrc:[],
            imgs:[],
            phone:localStorage.getItem('phone'),
            order:sessionStorage.getItem('C_order1')||''
        }
    },
    components:{
        CommonHeader
    },
    methods:{
        goOut(url){
            if(window.plus){
                window.plus.runtime.openURL(url)
            }else{
                location.href=url
            }
        },
        submit(){
          let flag=true;
          for(let i=0;i<this.imgs.length;i++){
                if(typeof(this.imgs[i])!=='string'){
                    flag=false;
                }
          }
            if(!flag||this.imgs.length<this.list.length||this.phone.length<11||this.order.length<8){
              toast('请填写必填信息和所有失败截图！')
              return;
          }
          Indicator.open()
          let formdata=new FormData()
          formdata.append('token',localStorage.getItem('token'))
          formdata.append('phone',this.phone)
          formdata.append('orderNumber',this.order)
           formdata.append('operation_id',sessionStorage.getItem('openid')); 
        //    this.files.forEach(item=>{
        //        formdata.append("file",item)
        //    })
        let imgStr=this.imgs.join(',')
        formdata.append('img',imgStr)
          userApi.refund(formdata).then(res=>{
              Indicator.close()
              if(res.code=='0'){
                  toast('提交成功')
                  this.$router.replace('/success');

              }else{
                  toast(res.msg)
              }
          })
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
      }
    },
    created(){
         common.refundMerchant({type:'1'}).then(res=>{
            if(res.code=='0'){
               this.list=res.data
            }
        })
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.refund{
    @include bkg;
    .type{
        background: #fff;
        padding: 10px;
        p:nth-of-type(1){
            font-size: 18px;
            font-weight: 500;
        }
        p:nth-of-type(2){
            font-size: 14px;
            color: #999;
        }
    }
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
    ul{
        background: #fff;
        margin-top: 10px;
        li{
            padding: 10px;
            margin-bottom: 5px;
            border-bottom: 1px solid #eee;
            .upload{
                 &:active{
                    background: rgba(0,0,0,0.1)
                }
                display: flex;
                align-items: center;
                img{
                   width: 80px;
                   height: 80px;
                   margin: 10px;
                }
                color: #999;
                font-size: 18px;
                
            }
            p{
                font-size: 16px;
                padding: 10px 0;
                border-bottom: 1px solid #eee;
                img{
                    height: 25px;
                    width: 25px;
                    vertical-align: middle;
                }
                a{
                    color: $primary;
                    border: 1px solid $primary;
                    padding: 3px;
                    font-size: 14px;
                    border-radius: 2px;
                }
            }
           
        }
    }
    .submit{
        width: 80%;
        margin-left: 10%;
        height: 40px;
        line-height: 40px;
        background: #f00;
        color: #fff;
        font-size: 16px;
        border-radius: 20px;
        outline: none;
        margin-top: 20px;
        margin-bottom: 20px;
        border: none;
        &:active{
            opacity: 0.7;
        }
    }
}
</style>
