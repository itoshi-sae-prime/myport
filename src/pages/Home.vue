<template>
    <div class="section text-white p-[50px]">
        <div class="xl:flex lg:flex grid grid-cols-1">
            <div class="xl:w-[50%] lg:w-[50%] w-[100%] flex justify-center items-center xl:relative lg:relative"
                :style="{ padding: '20px 0px' }">
                <div class="xl:absolute lg:absolute custom-bg spin-slow z-0 rounded-[50%] xl:size-[500px] size-[300px]">
                </div>
                <div class="absolute rounded-[150px] z-10">
                    <img class="profile-picture object-cover xl:w-[420px] xl:h-[420px]"
                        src="https://cdn-icons-png.flaticon.com/256/4079/4079259.png" alt="Profile Picture">
                </div>
            </div>
            <div class="xl:w-[50%] lg:w-[50%] w-[100%] xl:py-[60px]">
                <div :style="{ fontWeight: '550', fontSize: '20px', padding: '20px', height: 'auto' }">
                    <!-- <div class="text-[15px] py-2 uppercase tracking-widest">Software Developer</div> -->
                    <div class="">
                        <div class="type_out text-center xl:text-left lg:text-left tracking-wide">
                            <div class="xl:text-[52px] lg:text-[22px] py-2">Hi,
                            </div>
                            <div class="xl:text-[52px] lg:text-[22px] py-2">I'm
                                Kin Le</div>
                            <div class="xl:text-[52px] lg:text-[22px] pt-2">
                                Software Developer
                            </div>
                        </div>
                        <div
                            class="leading-[30px] type_out text-gray-400 xl:text-[18px] lg:text-[12px] xl:block lg:block hidden">
                            <br> I am building my career step by step with real projects and constantly developing my
                            skills.</br>
                            <br> I am always looking for opportunities to apply my knowledge in practice and work in a
                            professional environment.
                            </br>
                            <br> I would love to connect with you!" </br>
                        </div>
                        <div class="xl:block lg:block hidden text-center">
                            <div
                                class="icon-container text-black pt-[35px] xl:flex lg:flex justify-center items-center w-full type_out ">
                                <div class="icon flex justify-center items-center gap-2 mb-3" @click="openCV">
                                    <div class="xl:text-[15px] text-[10px] py-1 xl:py-3 px-2">DOWNLOAD CV</div>
                                    <font-awesome-icon :icon="['fas', 'download']" />
                                </div>
                                <div class="ml-5 flex justify-center items-center gap-[25px] mb-3">
                                    <div class="icon px-2 xl:p-[10px]" @click="openFacebook">
                                        <font-awesome-icon :icon="['fab', 'facebook']" />
                                    </div>
                                    <div class="icon px-2 xl:p-[10px]" @click="openInstagram">
                                        <font-awesome-icon :icon="['fab', 'instagram']" />
                                    </div>
                                    <div class="icon px-2 xl:p-[10px]" @click="openGithub">
                                        <font-awesome-icon :icon="['fab', 'github']" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="text-center">----- <font-awesome-icon :icon="['fas', 'web-awesome']" /> ------</div> -->
            </div>
            <!-- Right section with 40% width spin-slow -->

            <div class="text-black py-[10px] xl:hidden lg:hidden type_out">
                <div class="flex justify-center items-center gap-[25px] mb-3">
                    <div class="icon px-2 xl:p-[10px]" @click="openFacebook">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                    </div>
                    <div class="icon px-2 xl:p-[10px]" @click="openInstagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                    </div>
                    <div class="icon px-2 xl:p-[10px]" @click="openGithub">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </div>
                </div>
                <div class="flex justify-center" @click="openCV">
                    <div
                        class="xl:text-[15px] text-[13px] mt-[10px] py-4 px-6 xl:py-3 p-2 bg-white font-bold rounded-xl">
                        DOWNLOAD CV <font-awesome-icon :icon="['fas', 'download']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'Home',
    methods: {
        openFacebook() {
            window.open('https://www.facebook.com/TuKien19/', '_blank');
        },
        openInstagram() {
            window.open('https://www.instagram.com/kizn.e/', '_blank');
        },
        openGithub() {
            window.open('https://github.com/itoshi-sae-prime', '_blank');
        },
        openCV() {
            window.open('https://drive.google.com/file/d/163aUeBWj68qNKHTCp-0yH2ea8gzh4hji/view?usp=sharing', '_blank');
        }
    },
    components: {
        FontAwesomeIcon
    }
};
</script>

<style scoped>
.section {
    max-width: 100%;
    height: auto;
}

.section h1 {
    font-size: 36px;
    color: #333;
}

.section p {
    font-size: 18px;
    color: #666;
}

.infomation {
    padding: 10px;
    width: 100%;
    height: auto;
    align-items: center;
}

.profile-picture {
    /* width: 392px;
    height: 392px; */
    border-radius: 50%;
    /* margin-bottom: 20px; */
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.profile-picture:hover {
    transform: scale(1.1);
}

.custom-bg {
    background: linear-gradient(180deg, white, grey, black);
}

.type_out {
    overflow: hidden;
    white-space: wrap;
    animation:
        typing 1s forwards;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}
</style>
