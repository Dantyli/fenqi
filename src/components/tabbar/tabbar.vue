<template>
    <div class="tabbar">
        <div class="fixed">
            <ul class="fixed-ul">
                <li class="fixed-li" v-for="(item,index) in tabbars" :key="index" @click="goPage(index)">
                    <p><img :src="item.iconSelected" v-if="active==index"/><img :src="item.icon" v-else /></p>
                    
                    <p :class="active==index?'active':''">{{item.text}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        switch(this.$route.name){
                case 'home':
                this.active=0;
                break;
                case 'orders':
                this.active=1;
                break;
                case 'my':
                this.active=2;
                break;
            }
    },
    //fixed back问题
    watch:{
        '$route' (to, from){
            switch(this.$route.name){
                case 'home':
                this.active=0;
                break;
                case 'orders':
                this.active=1;
                break;
                case 'my':
                this.active=2;
                break;
            }
        }
    },
    data(){
        return{
            active:0,
            tabbars:[
                {text:'首页','icon':require('../../assets/home1.png'),'iconSelected':require('../../assets/home1_active.png')},
                {text:'订单','icon':require('../../assets/order11.png'),'iconSelected':require('../../assets/order11_active.png')},
                {text:'我的','icon':require('../../assets/my.png'),'iconSelected':require('../../assets/my_active.png')}
            ]
        }
    },
    methods:{
        goPage(index){
            this.active=index;
            switch(index){
                case 0:
                this.$router.replace('/');
                break;
                case 1:
                this.$router.replace('/index/orders');
                break;
                case 2:
                this.$router.replace('/index/my');
                break;
            }
            
        }
    }

}
</script>
<style lang="scss" scoped>
  @import '@/style/var.scss';
    .tabbar{
        position: fixed;
        z-index: 1000;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 58px;
        border-top: 1px solid #eee;
        background: #fff;
        z-index: 100;
        .fixed{
            &-ul{
                display: flex;
                justify-content: center; 
            }
            &-li{
                list-style: none;
                width: 33.3%;
                text-align: center;
                .active{
                    color: $primary;
                }
                img{
                    height:24px;
                    margin-top: 5px;
                }
                font-size: 15px;
                
            }
        }
        
    }
</style>