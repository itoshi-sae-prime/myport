<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/template/Footer.vue';
import Header from '@/components/template/Header.vue';
export default {
    components: {
        Header,
        Footer,
    },
}
</script>

<style scoped>
section {
    padding: 20px;
    min-height: 90%;
    max-height: 100%
}
</style>