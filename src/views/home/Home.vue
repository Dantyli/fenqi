<template>
  <div class="home">
      <Swipe class="swipe" :showIndicators="indica">
        <swipe-item class="swipe-item"><img src="../../assets/banner.png"></swipe-item>
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
      <div class="kefu" onclick="location.href='https://cschat-ccs.aliyun.com/index.htm?tntInstId=_1I2hgps&scene=SCE00004456'">
          <img src="../../assets/kefu.png"><br/>
      </div>
  </div>
</template>

<script>
import {Swipe,SwipeItem,Range} from 'mint-ui'
import InduceMent from '@/components/inducement'
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  data(){
    return{
        rangeValue:10000,
        rangeDay:2,
        indica:false
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
              case 3:
               this.$router.push('/idcard');
               break;
               case 2:
               this.$router.push('/myinfo');
               break;
               case 1:
                this.$router.push('/bindcard')
                break;
                default:
                this.$router.push('/kyc')
           }
      }else{
         this.$router.push('/login')
      }
      
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
  padding-bottom:70px;
  .swipe{
    height: 200px;
    &-item{
      height: 200px;
      overflow: hidden;
      text-align: center;
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
      display:block;
      text-align: center;
      font-size: 14px;
      color:#333;
      margin-top: 20px;
      img{
        width: 50px;
      }
    }
}

</style>

