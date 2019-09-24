<template>
  <div class="home">
      <Swipe class="swipe" :showIndicators="indica">
        <swipe-item class="swipe-item">
          <img  src="../../assets/banner.png">
          <!-- <div @click="openQQ" class="wrap" v-else>
            <img    src="../../assets/newbanner.png" style="height:100%;width:auto;">
            <p class="accept">接受</p>
            <p class="refuse">拒绝</p>
          </div> -->
        </swipe-item>
      </Swipe>
      <induce-ment />
      <div class="edu">
           <div class="title">申请额度</div>
           <div class="nums"><span>¥</span><span>{{rangeValue}}/{{rangeDay}}</span><span>月</span></div>
      </div>
      <div class="range"> 
          <Range
          v-model="rangeValue"
          :min="1000"
          :max="20000"
          :step="1000"
          :bar-height="6">
        </Range>
        <div class="range-shu">
          <p>1000元</p>
          <p>20000元</p>
        </div>
      </div>
       <div class="range"> 
          <Range
          v-model="rangeDay"
          :min="1"
          :max="12"
          :step="1"
          :bar-height="6">
        </Range>
        <div class="range-shu">
          <p>1月</p>
          <p>12月</p>
        </div>
      </div>
      <div class="opt">
        <button class="btn" @click="apply">申请提现</button>
        <div class="tips">
          <p>不向学生提供服务</p>
          <p>数据加密防护</p>
        </div>
      </div>
      <div class="kefu" >
          <a href="javascript:" @click='$router.push(`/frame`)'><img src="../../assets/kf.jpeg"> 在线客服</a>
          <a :href="`tel:`+kfphone"><img src="../../assets/call.jpeg" alt=""> 电话客服</a>
      </div>
      <img v-if="isios" @click="$router.push('/install')" src="../../assets/download.png" class="install" />
       <p class="hegui" >本平台不直接放贷，仅推荐合规持牌贷款产品</p>
  </div>
</template>

<script>
import {Swipe,SwipeItem,Range} from 'mint-ui'
import InduceMent from '@/components/inducement'
import {mapGetters} from 'vuex'
import common from '@/api/common'
import {MessageBox} from 'mint-ui'
import {openQq} from '@/components/util'
export default {
  name: 'home',
  data(){
    return{
        rangeValue:10000,
        rangeDay:2,
        indica:false,
        isios:false,
        paytime:0,
        kfphone:'075536375410'
    }
  },
  created(){
     if(window.navigator.userAgent.toLowerCase().indexOf('iphone')>-1){
        this.isios=true;
     }
      common.getConfig().then(res=>{
           if(res.kfphone){
                this.kfphone=res.kfphone
           }
        })
     if(localStorage.getItem('token')){
          common.getPaytimes().then(res=>{
              if(res.code=='0'){
                this.paytime=res.data.number;
                 //兼容一步支付用户
                //   common.getOrderList().then(res=>{
                //     if(res.code=='0'){
                //         if(res.data.order.length>0){
                //             let list=res.data.order[0]
                //             if(list.type=='3'){
                //               this.paytime=2;
                //             }
                //         }
                //     }
                // })
              }
          })
     }
      
  },
  components: {
    Swipe,
    SwipeItem,
    Range,
    InduceMent
  },
  methods:{
    apply(){
      localStorage.setItem('amount',this.rangeValue)
      localStorage.setItem('month',this.rangeDay)
      if(localStorage.getItem('token')){
           switch(this.wait){
              case 4:
               this.$router.push('/idcard');
               break;
               case 3:
               this.$router.push('/myinfo');
               break;
                case 2:
               this.$router.push('/zichan');
               break;
               case 1:
                this.$router.push('/bindcard')
                break;
                default:
                if(this.paytime==1){
                    this.$router.push('/orderDetail')
                }
                else{
                    this.$router.push('/credit')
                }
                
           }
      }else{
         this.$router.push('/login')
      }
      
    },
    openQQ(){
      if(navigator.userAgent.toLowerCase().indexOf('micromessenger')>-1) return;
          MessageBox.confirm('QQ已复制是否打开QQ添加信贷专家为好友').then(action => {
            if(action=='confirm'){
                openQq()
            }
         });
    }
  },
  computed:{
    ...mapGetters(['wait'])
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.home{
  height: 100%;
  padding-bottom:170px;
  background: #fff;
  .install{
    width: 50px;
    position: fixed;
    right: 5px;
    bottom: 100px;
    z-index: 11;
    animation: myscale 1s infinite;
  }
  @keyframes myscale{
    0%{
      transform: scale(1);
    }
    25%{
      transform: scale(1)
    }
    50%{
      transform: scale(1.2);
    }
    75%{
      transform: scale(1.2);
    }
    100%{
      transform: scale(1);
    }
  }
  .swipe{
    height: 200px;
    &-item{
      height: 200px;
      overflow: hidden;
      text-align: center;
      background: linear-gradient(left top,#264acf,#759df3);
      .wrap{
        width: 100%;
        height: 100%;
        p{
          height: 40px;
          width: 40px;
          border-radius: 50%;
          line-height: 40px;
          text-align: center;
          color: #fff;
          position: absolute;
          font-size: 13px;
        }
        .accept{
             bottom: 10%;
            right: 30%;
            margin-right:-20px;
            background: #5ac43c;
            animation: myscale 1s infinite;
        }
        .refuse{
            bottom: 10%;
            left: 30%;
            margin-left:-20px;
            background: #cb2b1e;
        }

      }
      img{
        width: 100%;
        min-height: 200px;
      }
    }
}
.edu{
  display:block;
  text-align: center;
  padding-top: 20px;
  .title{
    font-size: 18px;
    font-weight: 500;
  }
  .nums{
    color: $primary;
    padding: 10px 0;
    margin-bottom: 5px;
    font-weight: 500;
    span:nth-of-type(1){
      font-size: 14px;
    }
    span:nth-of-type(2){
      font-size: 30px;
    }
    span:nth-of-type(3){
      font-size: 14px;
    }
  }
}
    .range{
      width: 80%;
      margin-left: 10%;
      &-shu{
        display: flex;
        height: 30px;
        justify-content: space-between;
        align-items: center;
        color:#333;
        p:nth-of-type(1){
          text-align: left
        }
        p:nth-of-type(2){
          text-align: right;
        }
      }
    }
    .opt{
      text-align: center;
      margin-top: 20px;
      .tips{
        display: flex;
        color: #999;
        justify-content: space-between;
        font-size: 14px;
        width: 80%;
        margin-left: 10%;
        padding: 10px 0;
      }
    }
    .kefu{
      display:flex;
      justify-content: space-around;
      font-size: 14px;
      color:#333;
      margin-top: 20px;
      margin-bottom: 30px;
      align-items: center;
      a{
        display: inline-block;
        color:$primary;
        img{
          vertical-align: middle;
          width: 40px;
        }
      }
    }
    .hegui{
        color:#aaa;font-size:12px;text-align:center;
        margin-bottom: 80px;
        background: #fff;
        opacity: 0.5;
    }
}

</style>

