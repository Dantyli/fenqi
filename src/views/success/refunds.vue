<template>
    <div class="success">
        <p style="margin-bottom:20px;padding-top:35%;font-size:22px;">
            您的退款申请已提交成功
        </p>
         <p style="margin-bottom:20px;font-size:22px;">
            请勿重复提交！
        </p>
        <p>
            <router-link replace to="/frame">提交有误，需再次提交请联系<br /><span><img src="../../assets/chaticon.png"> 联系客服</span></router-link> 
            <router-link replace to="/logd">查看退款进度,请点击<br /><span><img src="../../assets/jinduicon.png"> 查看进度</span></router-link>
        </p>
           <!-- <router-link replace to="/index/home"> <img src="../../assets/tkwc.png" alt="待领额度" style="width:100%;margin-top:30px;"> </router-link> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.success{
    background:url('../../assets/bgs.jpg') #4169E1 repeat-y;
    background-size:contain; 
    text-align: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    color: #fff;
    p{
       // margin-bottom: 10px;
        // width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        a{
            font-size: 16px;
           line-height:40px;
           color: #fff;
            display: block;
            box-sizing: border-box;
            text-align: center;
           // border: 1px solid #4169E1;
            padding: 3px;
            border-radius: 3px;
            span{
               color: #4169E1;
               border: 1px solid #4169e1;
               border-radius: 3px;
               margin-left: 5px;
               background: #fff;
               padding: 3px 5px;
            }
            img{
                height: 18px;
                vertical-align: sub;
            }
        }
    }
    .botm{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 50px;
        color: #4169E1;
    }
}
</style>


