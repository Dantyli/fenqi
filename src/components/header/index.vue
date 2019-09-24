<template>
    <div>
        <Header fixed :title="title">
            <span slot="left" @click="goBack">
                <Button icon="back"></Button>
            </span>
        </Header>
    </div>
</template>
<script>
import {Header,Button} from 'mint-ui'
export default {
        components:{
            Header,
            Button
        },
        props:{
            title:{
                required:true
            },
            isback:{
                default:true
            }
        },
        methods:{
            goBack(){
                //console.log(this.isback)
                if(this.isback!='false'){
                    this.$router.go(-1);
                }else{
                    this.$router.push('/index/orders')
                }
                
            }
        }
}
</script>

