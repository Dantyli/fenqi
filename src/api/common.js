import api from './index'
export default{
    //获取操作id
    getOpenid(params={}){
        return api.post('/front/visit/index',params)
    },
    //支付接口
    pay(params={}){
        return api.post('/front/payment/pay',params)
    },
    //生成信用报告
    createReport(params={}){
        return api.post('/front/assess/add',params)
    },
    //查询信用报告
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
    }
}