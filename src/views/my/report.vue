<template>
    <div class="report">
       <common-header title="风险评级报告" />
       <div class="title">
           <p>高</p>
           <p>信用等级</p>
       </div>
       <ul class="content">
           <li>
               <p class="headline">基本信息</p>
               <div class="info">
                  <p><span>姓名</span><span>{{user.name}}</span></p>
                  <p><span>手机号</span><span>{{user.phone}}</span></p>
                  <p><span>身份证号</span><span>{{user.identity}}</span></p>
               </div>
           </li>
           <li>
               <p class="headline">多头</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                   <p class="table-td"><span>是否命中多头数据</span><span>{{info.duotou_info.has_duotou_data|format}}</span><span>{{info.duotou_info.has_duotou_data|formatIs}}</span></p>
                   <p class="table-td"><span>授权注册机构数</span><span>{{info.duotou_info.org_count|format}}</span><span>{{info.duotou_info.org_count|formatIs}}</span></p>
                    <p class="table-td"><span>当天贷款申请机构数</span><span>{{info.duotou_info.now_org_count|format}}</span><span>{{info.duotou_info.now_org_count|formatIs}}</span></p>                   
                     <p class="table-td"><span>网银授权注册机构数</span><span>{{info.duotou_info.auth_onlinebank_org_count|format}}</span><span>{{info.duotou_info.auth_onlinebank_org_count|formatIs}}</span></p>
                  
               </div>
           </li>
            <li>
               <p class="headline">关注名单</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                   <p class="table-td"><span>是否在关注名单(Ⅱ类)中</span><span>{{info.attention_info.idcard_name_in_attentionlist2|format}}</span><span>{{info.attention_info.idcard_name_in_attentionlist2|format|formatIs}}</span></p>
                   <p class="table-td"><span>累计逾期次数</span><span>{{info.attention_info.attentionlist1_record_overdue_count|format}}</span><span>{{info.attention_info.attentionlist1_record_overdue_count|formatIs}}</span></p>
                   <p class="table-td"><span>最大逾期金额</span><span>{{info.attention_info.attentionlist1_record_overdue_amount|format}}</span><span>{{info.attention_info.attentionlist1_record_overdue_amount|formatIs}}</span></p>
               </div>
           </li>
            <li>
               <p class="headline">信用卡</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                   <p class="table-td"><span>是否覆盖</span><span>{{info.creditcard_info.has_creditcard_data|format}}</span><span>{{info.creditcard_info.has_creditcard_data|formatIs}}</span></p>
                   <p class="table-td"><span>更新时间</span><span>{{info.creditcard_info.creditcard_data_updatetime |format}}</span><span>{{info.creditcard_info.creditcard_data_updatetime |formatIs}}</span></p>
                   <p class="table-td"><span>近12月逾期次数</span><span>{{info.creditcard_info.delaybillnum|format}}</span><span>{{info.creditcard_info.delaybillnum|formatIs}}</span></p>
                   <p class="table-td"><span>所有银行信用额之和</span><span>{{info.creditcard_info.onlinebank_total_credit_limit |format}}</span><span>{{info.creditcard_info.onlinebank_total_credit_limit |formatIs}}</span></p>
               </div>
           </li>
           <li>
               <p class="headline">借记卡</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                    <p class="table-td"><span>是否覆盖</span><span>{{info.debitcard_info.has_debitcard_data|format}}</span><span>{{info.debitcard_info.has_debitcard_data|formatIs}}</span></p>
                   <p class="table-td"><span>更新时间</span><span>{{info.debitcard_info.debitcard_data_updatetime|format}}</span><span>{{info.debitcard_info.debitcard_data_updatetime|formatIs}}</span></p>
                   <p class="table-td"><span>近12月工资收入</span><span>{{info.debitcard_info.total_salary_income|format}}</span><span>{{info.debitcard_info.total_salary_income|formatIs}}</span></p>
                   <p class="table-td"><span>近12月贷款收入</span><span>{{info.debitcard_info.total_loan_income|format}}</span><span>{{info.debitcard_info.total_loan_income|formatIs}}</span></p>
                   <p class="table-td"><span>近12月总支出</span><span>{{info.debitcard_info.total_outcome|format}}</span><span>{{info.debitcard_info.total_outcome|formatIs}}</span></p>
                   <p class="table-td"><span>近12月消费支出</span><span>{{info.debitcard_info.total_consume_outcome|format}}</span><span>{{info.debitcard_info.total_consume_outcome|formatIs}}</span></p>
                   <p class="table-td"><span>近12月还贷支出</span><span>{{info.debitcard_info.total_loan_outcome|format}}</span><span>{{info.debitcard_info.total_loan_outcome|formatIs}}</span></p>
               </div>
           </li>
            <li>
               <p class="headline">芝麻分</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                   <p class="table-td"><span>是否覆盖</span><span>{{info.zmscore_info.has_zmscore_data|format}}</span><span>{{info.zmscore_info.has_zmscore_data|formatIs}}</span></p>
                   <p class="table-td"><span>更新时间</span><span>{{info.zmscore_info.zmscore_data_updatetime|format}}</span><span>{{info.zmscore_info.zmscore_data_updatetime|formatIs}}</span></p>
                   <p class="table-td"><span>芝麻分区间</span><span>{{info.zmscore_info.zmscore|format}}</span><span>{{info.zmscore_info.zmscore|formatIs}}</span></p>
               </div>
           </li>
            <li>
               <p class="headline">淘宝</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                   <p class="table-td"><span>是否覆盖</span><span>{{info.taobao_info.has_taobao_data|format}}</span><span>{{info.taobao_info.has_taobao_data|formatIs}}</span></p>
                   <p class="table-td"><span>更新时间</span><span>{{info.taobao_info.taobao_data_updatetime|format}}</span><span>{{info.taobao_info.taobao_data_updatetime|formatIs}}</span></p>
                   <p class="table-td"><span>近3月消费金额</span><span>{{info.taobao_info.consume_money_3m |format}}</span><span>{{info.taobao_info.consume_money_3m|formatIs}}</span></p>
                   <p class="table-td"><span>近6月消费金额</span><span>{{info.taobao_info.consume_money_6m |format}}</span><span>{{info.taobao_info.consume_money_6m|formatIs}}</span></p>
                   <p class="table-td"><span>近3月虚拟物品消费金额</span><span>{{info.taobao_info.virtual_money_3m |format}}</span><span>{{info.taobao_info.virtual_money_3m|formatIs}}</span></p>
                   <p class="table-td"><span>近6月虚拟物品消费金额</span><span>{{info.taobao_info.virtual_money_6m |format}}</span><span>{{info.taobao_info.virtual_money_6m|formatIs}}</span></p>
               </div>
           </li>
            <li>
               <p class="headline">其他</p>
               <div class="table">
                   <p class="table-head"><span>规则名称</span><span>命中详情</span><span>是否命中</span></p>
                   <p class="table-td"><span>授权注册机构数</span><span>{{info.duotou_info.auth_org_count|format}}</span><span>{{info.duotou_info.auth_org_count|formatIs}}</span></p>
                   <p class="table-td"><span>当天贷款申请次数</span><span>{{info.duotou_info.now_detail_org_count|format}}</span><span>{{info.duotou_info.now_detail_org_count|formatIs}}</span></p>
                   <p class="table-td"><span>网贷近7天贷款申请次数</span><span>{{info.duotou_info.cash_loan_7d |format}}</span><span>{{info.duotou_info.cash_loan_7d|formatIs}}</span></p>
                   <p class="table-td"><span>网贷近30天贷款申请次数</span><span>{{info.duotou_info.cash_loan_30d |format}}</span><span>{{info.duotou_info.cash_loan_30d|formatIs}}</span></p>
                 </div>
           </li>
       </ul>
       <p class="zhu">
          注：该数据由魔蝎科技提供，仅供参考
       </p>
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
            user:{
                name:'--',
                phone:'----',
                identity:'----'
            },
            info:{}
        }
        
    },
    filters:{
        format(e){
            return e=='-99999'?'0':e
        },
        formatIs(e){
            return e=='-99999'||e=='0'?'否':'是'
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
    background: #fff;
    .title{
        background: linear-gradient(to right,#55b8c4,#6ed5b9);
        padding: 20px 0;
        text-align: center;
        p:nth-of-type(1){
            font-size: 32px;
            font-weight: 600;
            color: #fff;
        }
        p:nth-of-type(2){
            font-size: 16px;
            color: #fff;
        }
    }
    .content{
        padding: 0 5px;
        li{
            margin-bottom: 15px;
            .headline{
                border-left: 3px solid $primary;
                line-height: 25px;
                margin: 5px 0;
                padding-left: 5px;
            }
            .info{
                p{
                    span{
                        display: inline-block;
                        width: 50%;
                        font-size: 16px;
                    }
                    line-height: 30px;
                    span:nth-of-type(1){
                        text-align: left;
                    }
                    span:nth-of-type(2){
                        text-align: right;
                    }
                }
            }
        }
         .table{
            border: 1px solid #ddd;
            &-head{
                background: #f0f3fc;
                height: 30px;
                display: flex;
                justify-content: space-around;
                line-height: 30px;
                span{
                    line-height: 30px;
                    display: inline-block;
                    width: 25%;
                    text-align: center;
                }
                span:nth-of-type(1){
                    width: 45%;
                }
            }
            &-td{
                background: #fff;
                height: 30px;
                display: flex;
                justify-content: space-around;
                line-height: 30px;
                span{
                    line-height: 30px;
                     display: inline-block;
                    width: 25%;
                    text-align: center;
                    font-size: 13px;
                }
                span:nth-of-type(1){
                    width: 45%;
                }
            }
        }
    }
    .zhu{
        text-align: center;
        font-size: 14px;
        color: #999;
        margin: 20px 0;
    }

}
</style>
