<template>
    <div class="success">
        <!-- <p style="margin-top:-120px;">
            您的退款申请已受理，1-3个工作日内将处理完毕，请耐心等待。<br />如有问题请及时联系我们的在线客服！
        </p> -->
        <p style="margin-top:-180px;">
            您的退款申请已受理
        </p>
        <p>
            1-3个工作日内将处理完毕
        </p>
        <p>
            请耐心等待
        </p>
        <div>
            如有问题
        </div>
        <div>
            请及时联系我们的在线客服
        </div>
        <p style="margin-top:20px;"><router-link replace to="/index/home">返回首页</router-link> <router-link replace to="/frame">在线客服</router-link></p>
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
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    color: #fff;
    div{
        line-height: 40px;
    }
    p{
        margin-bottom: 10px;
        width: 90%;
        color: #fff;
        font-size: 22px;
        display: flex;
        justify-content: space-around;
        a{
            box-sizing: border-box;
            text-align: center;
            color: #4169E1;
            background: #fff;
            padding: 3px 5px;
            font-size: 16px;
            border-radius: 3px;
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


