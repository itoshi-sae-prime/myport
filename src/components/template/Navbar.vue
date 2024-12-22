<template>
    <div class="">
        <div class="title-button xl:text-[15px] xl:w-[120px] lg:text-[10px] lg:w-[85px]">
            <router-link to="/">
                {{ title }}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title']
}
</script>
<style scoped>
.title-button {
    /* font-size: 14px; */
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* width: 120px; */
    text-align: center;
}

.title-button:hover {
    font-weight: 800;
}
</style>