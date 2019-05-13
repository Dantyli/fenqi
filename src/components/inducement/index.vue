<template>
    <div class="news" ref="inducementBox">
        <img src="../../assets/inform_icon.png">
        <ul ref="inducementList">
            <li v-for="(item,index) in inducement" :key="index">
                <p>{{item.phone}}成功借款<span>{{item.money}}</span>元</p>
                 <p class="grey">{{item.time}}分钟前</p>
            </li>
        </ul>
        
      </div>
</template>
<script>
export default {
    data(){
        return{
            inducement:[
                {'phone':'156*****900',money:'6000',time:'4'},
                {'phone':'138*****230',money:'9000',time:'4'},
                {'phone':'156*****167',money:'15000',time:'6'},
                {'phone':'176*****984',money:'8000',time:'6'},
                {'phone':'139*****520',money:'6000',time:'3'},
                {'phone':'135*****698',money:'8000',time:'5'},
                {'phone':'166*****900',money:'12000',time:'8'},
                {'phone':'135*****994',money:'9000',time:'5'},
            ]
        }
    },
    methods:{
        poster(){
            let _self=this;
            let inducementBoxH=window.getComputedStyle(this.$refs.inducementBox).height;
            this._timeOut=setInterval(function () {
                _self.$refs.inducementList.style.transition='all 1s';
                _self.$refs.inducementList.style.transform=`translate(0,-${inducementBoxH})`;
                setTimeout(()=>{
                    _self.inducement.push(_self.inducement[0]);
                    _self.inducement.splice(0,1);
                    _self.$refs.inducementList.style.transition='all 0s';
                _self.$refs.inducementList.style.transform='translate(0,0)';
                },1000);
            }, 3000)
        }
    },
    mounted(){
        this.poster()
    },
    beforeDestroy(){
        clearInterval(this._timeOut)
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.news{
    position: relative;
  height: 35px;
  overflow: hidden;
  img{
      height: 20px;
      position: absolute;
      top: 7px;
      left: 10px;
  }
  border-bottom: 1px solid #eee;
  .grey{
    color: #aaa;
  }
  span{
    color: $primary;
  }
  ul{
      padding-left: 30px;
      li{
          height: 35px;
          display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #333;
            padding:0 10px;
            align-items: center;
      }
  }
}
</style>

