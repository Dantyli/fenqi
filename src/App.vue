<template>
  <div id="app">
    <keep-alive>
        <router-view/>
    </keep-alive>
    
  </div>
</template>
<script>
import api from '@/api/common'
import userApi from '@/api/userApi'
import toast from '@/components/toast'
export default {
  created(){
    this.getId();
  },
  mounted(){
     
  },
  methods:{
    //获取操作id
    getId(){
       let obj={type:1}
       api.getOpenid(obj).then(res=>{
           if(res.code=='0'){
              sessionStorage.setItem('openid',res.data.operation_id);
              this.autoLogin()
           }
       })
    },
    //自动登录
    autoLogin(){
      if(localStorage.getItem('token')&&localStorage.getItem('phone')){
           let params={
             phone:localStorage.getItem('phone'),
             token:localStorage.getItem('token'),
             type:1
           }
           userApi.login(params).then(res=>{
             if(res.code=='0'){
                 this.$store.commit('getdata',res.data)
             }else{
               toast('登录失败，请重试！')
             }
              
           })
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background: #fff;
}
</style>
