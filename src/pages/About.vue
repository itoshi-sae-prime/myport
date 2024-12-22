<template>
    <div class="about-page bg-white rounded-md xl:p-[50px] lg:p-[50px] p-[10px]">
        <section class="flex xl:justify-between lg:justify-center justify-between">
            <div class="xl:w-[50%] lg:w-[50%] w-[100%] about-bg rounded-md about_left">
                <div
                    class="text-black xl:pr-2 lg:pr-2 mb-2 font-bold border-b-2 inline-block xl:text-[35px] lg:text-[25px] text-[20px] xl:mb-[30px] lg:mb-[10px]">
                    About Me</div>
                <div
                    class="text-black xl:text-[20px] lg:text-[15px] xl:tracking-widest lg:tracking-widest tracking-tight xl:leading-10 lg:leading-10 leading-5 text-[10px]">
                    <p class="hidden xl:block lg:block">Kin</p>
                    <p>As a Frontend Developer, I am passionate about crafting visually stunning and user-friendly web
                        interfaces.</p>
                    <p>With experience in creating responsive and dynamic websites, I am eager to contribute to
                        impactful projects while continuing to grow and refine my skills.</p>
                </div>
            </div>
            <div
                class="xl:w-[50%] lg:w-[50%] w-[100%] pt-[10px] pb-[40px] rounded-md grid justify-center ml-[20px] about_right">
                <div class="border-2 lg:p-5 xl:p-5 xl:w-[500px] lg:w-[300px] w-[100%] xl:relative lg:relative">
                    <img class="xl:h-[400px] lg:h-[300px] xl:w-[500px] lg:w-[400px] w-[300px] h-[240px] object-cover border-2 lg:absolute xl:absolute xl:right-[45px] xl:top-[45px] lg:right-[35px] lg:top-[35px]"
                        src="https://i.imgur.com/o9EbUqO.jpeg" alt="">
                </div>
            </div>
        </section>

    </div>
</template>
<script>
export default {
    name: 'About',
    components: {},
    data() {
        return {};
    },
    methods: {
        navigateToContact() {
            this.$router.push({ name: 'Contact' });
        },
    },
};
</script>

<style scoped>
.about-page {
    font-family: Arial, sans-serif;
    min-height: auto
}

.about-bg {
    /* background: url("https://i.pinimg.com/564x/bb/01/fc/bb01fc35135609d8bf0048abcc6a0700.jpg"); */
    background-repeat: no-repeat;
    background-size: cover;
    margin: 10px 0;
}

.hero-section {
    padding: 30px 20px;
    /* background: #444; */
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1.5s ease-in-out;
}

.about_left {
    animation: ab_left 1.5s ease-in-out;
}

.about_right {
    animation: ab_right 1.5s ease-in-out;
}

@keyframes ab_left {
    0% {
        transform: translateX(-20px) rotate(0deg);
        opacity: 0.5;
    }

    25% {
        transform: translateX(-10px) rotate(-5deg);
        opacity: 0.7;
    }

    50% {
        transform: translateX(20px) rotate(10deg);
        opacity: 1;
    }

    75% {
        transform: translateX(10px) rotate(-5deg);
        opacity: 0.8;
    }

    100% {
        transform: translateX(-20px) rotate(0deg);
        opacity: 0.5;
    }
}

@keyframes ab_right {
    0% {
        transform: translateX(20px) rotate(0deg);
        opacity: 0.5;
    }

    25% {
        transform: translateX(10px) rotate(5deg);
        opacity: 0.7;
    }

    50% {
        transform: translateX(-20px) rotate(-10deg);
        opacity: 1;
    }

    75% {
        transform: translateX(-10px) rotate(5deg);
        opacity: 0.8;
    }

    100% {
        transform: translateX(20px) rotate(0deg);
        opacity: 0.5;
    }
}
</style>
