<template>
    <div class="myinfo">
        <common-header title="个人资料" />
        <p class="tips">
            完成个人资料，预计可获得<span>3000元</span>额度
        </p>
        <div class="addr">
            <div @click="getArea">
                <Cell is-link title="居住所在地区" >
                    <span class="area">{{myAddressProvince}}-{{myAddressCity}}-{{myAddresscounty}}</span>
                </Cell>
            </div>
            <Cell title="详细地址">
                <input class="detail" type="text" placeholder="街道，楼牌号" v-model="detail" />
            </Cell>
        </div>
        <div class="addr">
            <div @click="getPro">
                <Cell is-link title="职业" :value="proName||'请选择'"></Cell>
            </div>
            <div @click="getSal">
                <Cell is-link title="月收入" :value="salaryAmount||'请选择'"></Cell>
            </div>
            
            <Cell title="芝麻信用分数">
                <input class="detail" type="number" placeholder="请填写" v-model="zhima" />
            </Cell>
        </div>
        <p class="warning">请填写真实有效信息，这将影响您的审核结果！</p>
        <button class="btn" @click="submit">立即提交</button>
        <Actionsheet v-model="pro" :actions="profession"  />
        <Actionsheet v-model="salary" :actions="salaries"  />
        <Popup v-model="area" position="bottom" style="width:100%">
            <p class="opt" @click="area=false"><span>取消</span><span>确定</span></p>
            <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </Popup>

    </div>
</template>
<script>
import CommonHeader from '@/components/header'
import {Cell,Actionsheet,Picker,Popup} from 'mint-ui'
import myaddress from './address3.json'     
import toast from '@/components/toast' 
import userApi from '@/api/userApi'
export default {
    components:{
        CommonHeader,
        Cell,
        Actionsheet,
        'mt-picker':Picker,
        Popup
    },
    data(){
        return{
            pro:false,
            proName:'',
            zhima:'',
            profession:[
                {name:'公司职员',method:()=>this.selectPro(0)},
                {name:'个体户',method:()=>this.selectPro(1)},
                {name:'无业',method:()=>this.selectPro(2)},
                {name:'管理人员',method:()=>this.selectPro(3)},
                {name:'公务员',method:()=>this.selectPro(4)},
                {name:'退休',method:()=>this.selectPro(5)},
            ],
            salary:false,
            salaryAmount:'',
            salaries:[
                {name:'5000以内',method:()=>this.selectSal(0)},
                {name:'5000-10000',method:()=>this.selectSal(1)},
                {name:'10000以上',method:()=>this.selectSal(2)},
            ],
            area:false,
            myAddressSlots: [
                    {
                        flex: 1,
                        defaultIndex: 1,        
                        values: Object.keys(myaddress),    //省份数组
                        className: 'slot1',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'center'
                    },
                    {
                        divider: true,
                        content: '-',
                        className: 'slot4'
                    },
                    {
                        flex: 1,
                        values: [],
                        className: 'slot5',
                        textAlign: 'center'
                    }
                ],
                myAddressProvince:'省',
                myAddressCity:'市',
                myAddresscounty:'区/县',
                detail:''
        }
    },
    methods:{
        selectPro(i){
            this.pro=false;
            this.proName=this.profession[i].name
        },
        getPro(){
            this.pro=true;
        },
        getSal(){
            this.salary=true;
        },
        selectSal(i){
            this.salary=false;
            this.salaryAmount=this.salaries[i].name
        },
        getArea(){
            this.area=true
        },
        onMyAddressChange(picker, values) {
              if(myaddress[values[0]]){    //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
                    picker.setSlotValues(1,Object.keys(myaddress[values[0]])); //  Object.keys()会返回一个数组，当前省的数组
                    picker.setSlotValues(2,myaddress[values[0]][values[1]]); //  区/县数据就是一个数组
                    this.myAddressProvince = values[0];
                    this.myAddressCity = values[1];
                    this.myAddresscounty = values[2];
                }
            },
        submit(){
            if(!this.detail||!this.zhima||this.proName=='请选择'||this.salaryAmount=='请选择'){
                toast('请填写完整信息！')
            }else{
                let params={
                    site:`${this.myAddressProvince}-${this.myAddressCity}-${this.myAddresscounty}`,
                    detailed_site:this.detail,
                    profession:this.proName,
                    income:this.salaryAmount,
                    sesame:this.zhima
                }
                userApi.addUserInfo(params).then(res=>{
                    if(res.code=='0'){
                        this.$store.commit('upverify','data')
                        this.$router.replace('/bindcard')
                    }else{
                        toast(res.msg)
                    }
                })
                
            }
        }
    },
    mounted(){
        this.$nextTick(() => {  //vue里面全部加载好了再执行的函数   （类似于setTimeout）
                this.myAddressSlots[0].defaultIndex = 0        
                // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
            });
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
    .myinfo{
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
        .detail{
            border: none;
            text-align: right;
            outline: none;
            font-size: 14px;
            flex: 1;
        }
        .addr{
            background: #fff;
            margin-bottom: 10px;
        }
        .warning{
            font-size: 13px;
            line-height: 30px;
            color: $primary;
            padding: 10px;
        }
        .btn{
            margin: 10px 10%;
        }
        .area{
            display: inline-block;
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: right;
        }
        .opt{
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            height: 40px;
            align-items: center;
            padding: 0 10px;
            span:nth-of-type(1){
                color: #999;
            }
            span:nth-of-type(2){
                color: $primary;
            }
        }
    }
</style>
