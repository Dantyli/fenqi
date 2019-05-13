<template>
    <div style="height:100%"> 
        <router-view />
        <tab-bar />
    </div>
</template>
<script>
import TabBar from '@/components/tabbar/tabbar';
export default {
    components:{
        TabBar
    }
}
</script>

