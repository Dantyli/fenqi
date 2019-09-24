import api from './index'
import axios from 'axios'
import config from '../config'
export default{
    //获取操作id
    getOpenid(params={}){
        return api.post('/front/visit/index',params)
    },
    //支付接口
    pay(params={}){
        return api.post('/front/payment/pay',params)
    },
    //生成风险评级报告
    createReport(params={}){
        return api.post('/front/assess/add',params)
    },
    //查询风险评级报告
    getReport(params={}){
        return api.post('/front/assess/select',params)
    },
    //商家列表
    getMerchant(params={}){
        return api.post('/front/merchants/select',params)
    },
    //查询支付次数
    getPaytimes(params={}){
        return api.post('/front/payment/pay/number',params)
    },
    //订单列表
    getOrderList(params){
        return api.post('/front/payment/pay/info',params)
    },
    //商家点击
    logApi(params){
        return api.post('/front/merchants/log',params)
    },
    //七牛token
    getToken(params){
        return api.post('/front/getToken',params)
    },
    //退款商家
    refundMerchant(params){
        return api.post('/front/refundData/select',params)
    },
    //查询优惠券
    checkYouHui(params){
        return api.post('/front/discounts/select',params)
    },
    //上传图片
    uploadImg(formData){
        const instance=axios.create({
            withCredentials: true
           })  
        return instance.post(config.uploadURL+'/front/QNFileController/qnImg',formData,{
           
        }).then(res=>{
            return res.data;
        },err=>{
            //alert(err)
        })
    },
    //攻略
    glue(params){
        return api.post('/front/merchants/info',params)
    },
    //资产
    addZc(params){
        return api.post('/front/property/add',params)
    },
    getZc(params){
        return api.post('/front/property/select',params)
    },
    //获取配置内容
    getConfig(){
        return axios.get(config.baseIcon+'/static/config.json')
    },
    //退款列表
    getRefund(){
        return api.post('/front/apply/list')
    },
    //退款详情
    getRefundDetail(params){
        return api.post('/front/apply/selectId',params);
    }
}