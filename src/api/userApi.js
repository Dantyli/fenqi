import api from './index'
import axios from 'axios'
import config from '@/config'
export default{
    login(params={}){
        return api.post('/front/login',params).then(res=>{
            if(res.code=='100'){
                localStorage.removeItem('token');
            }else if(res.code=='0'){
                localStorage.setItem('token',res.data.token)
            }
            return res;
        })
    },
    sendSms(params={}){
        return api.post('/front/smsCode',params)
    },
    upload(formData){
        //上传图片
        const instance=axios.create({
            withCredentials: true
           })  
        return instance.post(config.baseURL+'/front/upload',formData,{
            
        }).then(res=>{
            return res.data;
        })
    },
    //身份证信息
    addInfo(params={}){
       return api.post('/front/idcard/add',params)
    },
    //详细信息
    addUserInfo(params={}){
        return api.post('/front/userinfo/add',params)
    },
    //绑定银行卡
    bindCard(params={}){
        return api.post('/front/bindbankcard/add',params)
    },
    //查询银行卡列表
    cardList(params={}){
        return api.post('/front/bindbankcard/select',params);
    },
    //查询用户信息
    getUserInfo(params={}){
        return api.post('/front/userinfo/select',params)
    }
}