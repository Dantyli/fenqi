<template >
  <div class="">
    <div class="banner">
        <div class="process-item">
            <img class="process" src="../../assets/process.png" />
            <img class="process-center" src="../../assets/9_1.png">
        </div>
        <div class="process-text">信息推送至金融机构...</div>
    </div>
    <div class="empty-row"></div>
    <div class="empty-row" style="background-color:white;height: 15px;"></div>
    <div class="line-row">
        <img   v-bind:src="index>0?success:line" class="line-left" />
        <div class="line-right">
            <div class="line-title" v-bind:class="{success:index>0}">同步信誉评分</div>
            <div class="line-desc">正在同步信誉评分！</div>
        </div>
    </div>
    <div class="line-row">
         <img   v-bind:src="index>1?success:line" class="line-left" />
        <div class="line-right">
            <div class="line-title" v-bind:class="{success:index>1}">传输风险评级数据</div>
            <div class="line-desc">正在传输风险评级数据！</div>
        </div>
    </div>
    <div class="line-row">
        <img   v-bind:src="index>2?success:line" class="line-left" />
        <div class="line-right">
            <div class="line-title" v-bind:class="{success:index>2}">验证风险评级信息</div>
            <div class="line-desc">正在验证风险评级信息！</div>
        </div>
    </div>
    <div class="line-row">
         <img   v-bind:src="index>3?success:line" class="line-left" />
        <div class="line-right">
            <div class="line-title" v-bind:class="{success:index>3}">生成验证码信息</div>
            <div class="line-desc">正在生成验证码信息！</div>
        </div>
    </div>
    <div class="line-row">
         <img   v-bind:src="index>4?success:line" class="line-left" />
        <div class="line-right">
            <div class="line-title" v-bind:class="{success:index>4}">接收验证码</div>
            <div class="line-desc">正在接收验证码！</div>
        </div>
    </div>
    <div class="line-row">
         <img   v-bind:src="index>5?success:line" class="line-left" />
        <div class="line-right">
            <div class="line-title" v-bind:class="{success:index>5}">生成订单</div>
            <div class="line-desc">正在生成订单！</div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Lazyload, Range, Swipe, SwipeItem } from "mint-ui";

Vue.use(Lazyload);
Vue.component(Range.name, Range);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      index:0,
      success:require('../../assets/line_left_success.png'),
      line:require('../../assets/line_left.png')
    };
  },
  created() {},
  mounted() {
    this.execTimeout(0)
  },
  components: {},
  methods: {
    goAuth() {
      this.$router.replace({
        path: "orderDetail"
      });
    },
    execTimeout(index) {
      this.index = index;
      // $api.addCls($api.byId(index.toString()), "success");
      if (index === 7) {
        // tool.ajax(
        //   "/update_auth_info",
        //   {
        //     is_bank: true
        //   },
        //   function() {
        //     tool.openFrame({ url: "./auth6.html" });
        //   }
        // );
        return this.goAuth();
      }
      index++;
      setTimeout(() => {
        this.execTimeout(index);
      }, 1500);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';
.mui-content,
body,
html {
  height: 100% !important;
  background-color: white;
}
.banner{
  width:100%;
}
 .process{
        position: absolute;
        left: 0px;
        top:0px;
        width: 100%;
        height:100%;
        border-radius: 50%;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 2s linear infinite;
    -moz-animation: rotate 2s linear infinite;
    -o-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;}
    @-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
        to{-webkit-transform: rotate(360deg)}
    }
    @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
        to{-moz-transform: rotate(359deg)}
    }
    @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
        to{-o-transform: rotate(359deg)}
    }
    @keyframes rotate{from{transform: rotate(0deg)}
        to{transform: rotate(359deg)}
    }

    .banner{
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .process-item{
        margin-top: 30px;
        position: relative;
        width:100px;
        height:100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .process-center{
        position: relative;
        width:60px;
        z-index: 10;
    }

    .process-text{
        text-align: center;
        line-height: 50px;
        color:#999;
    }

    .line-row{
        padding:0px 15px;
        display: flex;
        align-items: flex-start;
        background-color: #ffffff;
        flex-direction: row;
    }

    .line-left{
        margin-right: 15px;
        width:20px;
        max-height: 60px;
        height:auto;
    }

    .line-right{

    }
    .line-title{
        color:#999;
        font-weight: bold;
    }
    .line-title.success{
        color:black;
    }
    .line-desc{
        color:#999;
        font-size: 12px;
    }
</style>
