<template>
    <div class="zichan">
       <common-header title="资产信息" />
         <p class="tips">
           完成资产信息，预计可获得<span>5000元</span>额度
         </p>
          <div class="addr">
            <div @click="getAction('card')">
                <Cell is-link title="信用卡" :value="card||'请选择'"></Cell>
            </div>
            <div @click="getAction('fang')">
                <Cell is-link title="名下房产" :value="fang||'请选择'"></Cell>
            </div>
            <div @click="getAction('car')">
                <Cell is-link title="名下汽车" :value="car||'请选择'"></Cell>
            </div>
            <div @click="getAction('wei')">
                <Cell is-link title="微粒贷" :value="wei||'请选择'"></Cell>
            </div>
            <div @click="getAction('ant')">
                <Cell is-link title="蚂蚁借呗" :value="ant||'请选择'"></Cell>
            </div>
            <div @click="getAction('jie')">
                <Cell is-link title="借贷情况" :value="jie||'请选择'"></Cell>
            </div>
            
            
        </div>
        <button @click="submit" class="btn">提交</button>
         <Actionsheet v-model="action" :actions="actionData"  />
    </div>
    
</template>
<script>
import CommonHeader from '@/components/header'
import {Cell,Actionsheet,Picker,Popup} from 'mint-ui'
import common from '@/api/common'
import toast from '@/components/toast'
export default {
    components:{
        CommonHeader,
        Cell,Actionsheet,
        Picker,
        Popup
    },
    data(){
        return{
            action:false,
            actionData:[],
            allData:{
                card:[{name:'无',method:()=>this.selectItem(0)},{name:"有一张",method:()=>this.selectItem(1)},{name:'有多张',method:()=>this.selectItem(2)}],
                fang:[{name:'无',method:()=>this.selectItem(0)},{name:"有，按揭房",method:()=>this.selectItem(1)},{name:'有，全款房',method:()=>this.selectItem(2)}],
                car:[{name:'无',method:()=>this.selectItem(0)},{name:"有，按揭车",method:()=>this.selectItem(1)},{name:'有，全款车',method:()=>this.selectItem(2)}],
                wei:[{name:'无',method:()=>this.selectItem(0)},{name:'有',method:()=>this.selectItem(1)}],
                ant:[{name:'无',method:()=>this.selectItem(0)},{name:'有',method:()=>this.selectItem(1)}],
                jie:[{name:'无信用卡或贷款',method:()=>this.selectItem(0)},{name:'信用良好无逾期',method:()=>this.selectItem(1)},{name:'一年内逾期少于3次且小于90天',method:()=>this.selectItem(2)},{name:'一年内逾期多于3次且小于90天',method:()=>this.selectItem(3)}]
            },
            card:'',
            fang:'',
            car:'',
            wei:'',
            jie:'',
            ant:'',
            type:''
        }
    },
    methods:{
        getAction(type){
            this.actionData=this.allData[type];
            this.type=type
            this.action=true
        },
        selectItem(i){
            let nameSpace=this.type;
            this[nameSpace]=this.actionData[i].name;
            this.action=false;
        },
        submit(){
             if(!this.card||!this.fang||!this.car||!this.wei||!this.jie||!this.ant){
                 toast('信息不完整')
                 return
             }
             let params={
                 credit:this.card,
                 house:this.fang,
                 automobile:this.car,
                 small:this.wei,
                 borrow:this.ant,
                 debit:this.jie
             }
             common.addZc(params).then(res=>{
                 if(res.code=='0'){
                      this.$store.commit('upverify','property')
                     this.$router.replace('/bindcard')
                 }else{
                     toast(res.msg)
                 }
             })
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.zichan{
    @include bkg;
    .tips{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 13px;
        span{
            color: $primary
        }
    }
     .addr{
            //background: #fff;
            margin-bottom: 10px;
            div{
                margin: 5px 0;
            }

        }
        .btn{
            margin: 10px 10%;
        }
   
}
</style>

