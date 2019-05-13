<template>
    <div class="report">
       <common-header title="信用评估报告" />
       <h3>用户基本信息</h3>
       <table class="user">
           <tr>
               <td>姓名</td>
               <td>身份证号</td>
               <td>手机号</td>
            <tr>
            <tr>
                <td>
                    {{user.name}}
                </td>
                <td>
                    {{user.identity}}
                </td>
                <td>
                    {{user.phone}}
                </td>
            </tr>
       </table>
       <h3>
           风险检测结果
       </h3>
       <table class="info">
           <tr>
              <td>检查项</td> 
               <td>
               命中详情
               </td>
           </tr>
           <tr>
              <td>是否覆盖运营商数据</td> 
               <td>
               {{info['mobile_info']['has_carrier_data']?'覆盖':'未覆盖'}}
               </td>
           </tr>
           <tr>
              <td>是否命中多头数据</td> 
               <td>
               {{info['duotou_info']['has_duotou_data']?'覆盖':'未覆盖'}}
               </td>
           </tr>
           <tr>
              <td>注册机构数</td> 
               <td>
               {{info['duotou_info']['org_count']=='-99999'?'0':info['duotou_info']['org_count']}}
               </td>
           </tr>
           <tr>
              <td>授权注册机构数</td> 
               <td>
               {{info['duotou_info']['auth_org_count']=='-99999'?'0':info['duotou_info']['auth_org_count']}}
               </td>
           </tr>
           <tr>
              <td>运营商授权注册数</td> 
               <td>
               {{info['duotou_info']['auth_carrier_org_count']=='-99999'?'0':info['duotou_info']['auth_carrier_org_count']}}
               </td>
           </tr>
           <tr>
              <td>电商授权注册数</td> 
               <td>
               {{info['duotou_info']['auth_taobao_org_count']=='-99999'?'0':info['duotou_info']['auth_taobao_org_count']}}
               </td>
           </tr>
           <tr>
              <td>网银授权注册数</td> 
               <td>
                {{info['duotou_info']['auth_onlinebank_org_count']=='-99999'?'0':info['duotou_info']['auth_onlinebank_org_count']}}
               </td>
           </tr>
           <tr>
              <td>网贷近90天申请次数</td> 
               <td>
                {{info['duotou_info']['cash_loan_90d']=='-99999'?'0':info['duotou_info']['cash_loan_90d']}}
               </td>
           </tr>
           <tr>
              <td>身份证和姓名是否在关注名单(Ⅱ类)中</td> 
               <td>
               {{info['attention_info']['idcard_name_in_attentionlist2']?'在':'不在'}}
               </td>
           </tr>
           <tr>
              <td>手机号和姓名是否在关注名单(Ⅱ类)中</td> 
               <td>
               {{info['attention_info']['mobile_name_in_attentionlist2']?'在':'不在'}}
               </td>
           </tr>
           <tr>
              <td>关注名单(Ⅱ类)最大逾期天数</td> 
               <td>
              {{info['attention_info'].attentionlist2_record_overdue_count=='-99999'?'0':info['attention_info'].attentionlist2_record_overdue_count}}
               </td>
           </tr>
           <tr>
              <td>关注名单(Ⅱ类)最大逾期金额</td> 
               <td>
               {{info['attention_info']['attentionlist2_record_overdue_amount']=='-99999'?'0':info['attention_info']['attentionlist2_record_overdue_amount']}}
               </td>
           </tr>
            <tr>
              <td>身份证和姓名是否在关注名单(I类)中</td> 
               <td>
               {{info['attention_info']['idcard_name_in_attentionlist1']?'在':'不在'}}
               </td>
           </tr>
           <tr>
              <td>手机号和姓名是否在关注名单(I类)中</td> 
               <td>
                {{info['attention_info']['mobile_name_in_attentionlist1']?'在':'不在'}}
               </td>
           </tr>
           <tr>
              <td>关注名单(I类)累计逾期天数</td> 
               <td>
               {{info['attention_info']['attentionlist1_record_overdue_count']=='-99999'?'0':info['attention_info']['attentionlist1_record_overdue_count']}}
               </td>
           </tr>
           <tr>
              <td>关注名单(I类)最大逾期金额</td> 
               <td>
                {{info['attention_info']['attentionlist1_record_overdue_amount']=='-99999'?'0':info['attention_info']['attentionlist1_record_overdue_amount']}}
               </td>
           </tr>
           <tr>
              <td>是否覆盖芝麻信用</td> 
               <td>
               {{info['zmscore_info']['has_zmscore_data']?'覆盖':'未覆盖'}}
               </td>
           </tr>
           <tr>
              <td>芝麻信用分数</td> 
               <td>
               {{info['zmscore_info']['zmscore']=='-99999'?'无':info['zmscore_info']['zmscore']}}
               </td>
           </tr>
           <tr>
              <td>是否覆盖淘宝</td> 
               <td>
               {{info['taobao_info']['has_taobao_data']?'覆盖':'未覆盖'}}
               </td>
           </tr>
           <tr>
              <td>近三月消费金额</td> 
               <td>
               {{info['taobao_info']['consume_money_3m']=='-99999'?'0':info['taobao_info']['consume_money_3m']}}
               </td>
           </tr>
           <tr>
              <td>近3月虚拟物品消费金额</td> 
               <td>
               {{info['taobao_info']['virtual_money_3m']=='-99999'?'0':info['taobao_info']['virtual_money_3m']}}
               </td>
           </tr>
           <tr>
              <td>近3月虚拟物品消费占消费金额比</td> 
               <td>
               {{info['taobao_info']['virtual_money_ratio_3m']=='-99999'?'0':info['taobao_info']['virtual_money_ratio_3m']}}
               </td>
           </tr>
       </table>
    </div>
</template>
<script>
import commonHeader from '@/components/header'
import common from '@/api/common'
export default {
    components:{
        commonHeader
    },
    data(){
        return{
            user:{},
            info:{}
        }
        
    },
    created(){
        common.getReport().then(res=>{
            if(res.code=='0'){
                  this.user=res.data.user
                  this.info=res.data.data.data
            }
        })
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/var.scss';
.report{
    @include bkg;
    h3{
        color: #fff;
        background: $primary;
        line-height: 40px;
        text-align: center;
        margin: 0;
    }
    .user{
        width: 100%;
        tr{
            text-align: center;
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            td{
                font-size: 12px;
                width: 33%;
                border: 1px solid #eee;
                line-height: 30px;
                background: #fff;
                overflow-y:scroll; 
            }
        }
    }
    .info{
         width: 100%;
        tr{
            text-align: center;
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            td{
                font-size: 12px;
                width: 50%;
                border: 1px solid #eee;
                line-height: 30px;
                background: #fff;
                overflow-y:scroll; 
            }
        }
    }

}
</style>
