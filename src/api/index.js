import axios from 'axios';
import QS from 'qs';
import toast from '@/components/toast';
import config from '@/config'
const baseURL=config.baseURL;
const NO_LOGIN_CODE='100'
/**
 * 
 * 返回错误统一处理，只传递正确状态的数据
 *  */
axios.interceptors.response.use(rep=>{
    if(rep.data.code==NO_LOGIN_CODE){
        toast('登录失效，请重新登录！',2000);
        localStorage.removeItem('token');
        setTimeout(()=>{
            location.reload()
        },2000)
    }else{
        return rep.data;
    }
},err=>{
    toast('网络错误！');
    return false;
})
/** 
 * 请求中添加openid和token
*/
axios.interceptors.request.use((request) => {
    let REQUEST_DATA = request.data
    if(sessionStorage.getItem('openid')){
        REQUEST_DATA={...REQUEST_DATA,'operation_id':sessionStorage.getItem('openid')}
    }else{
        REQUEST_DATA={...REQUEST_DATA,'operation_id':''}
    }
    if(localStorage.getItem('token')){
        REQUEST_DATA={...REQUEST_DATA,'token':localStorage.getItem('token')}
    }
    request.data = QS.stringify(REQUEST_DATA)
    return request;
   
  }, function (error) {
    // Do something with request error
    return false;
  });
  
export default{
    get(url,params={},notUseBaseURL=false){
        return axios.get(url,{
            baseURL:notUseBaseURL?'':baseURL,
            params
        })
    },
    post(url,params={},notUseBaseURL=false){
        return axios.post(url,params,{
            baseURL:notUseBaseURL?'':baseURL
        })
    },
    file(url,params={},notUseBaseURL=false){
        return axios.post(url,params,{
            baseURL:notUseBaseURL?'':baseURL,
            //headers:{'Content-Type':'multipart/form-data'}
        })
    },
}
