import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      userInfo:{
        authentication:0, //身份证
        data:0, //个人信息
        bankCard:0, //银行卡
        property:0 //资产
      }
  },
  mutations: {
      //认证状态
      getdata(state,info){
        state.userInfo=info
      },
      //更新认证等级
      upverify(state,n){
        state.userInfo[n]=1;
      }
  },
  actions: {

  },
  getters:{
    //wait 待认证项目数
    wait(state){
      if(!state.userInfo.authentication){
          return 4
      }else if(!state.userInfo.data){
            return 3
      }else if(!state.userInfo.property){
            return 2
      }else if(!state.userInfo.bankCard){
        return 1
      }
      else{
           return 0
      }
    }
  }
})
