<template>
    <header class="header">
        <div class="flex justify-between items-center xl:text-[20px] lg:text-[15px] md:text-[10px]">
            <div :style="{ display: 'flex', justifyContent: 'center' }">
                <div class="bg-white font-bold text-black">
                    Kin
                </div>
            </div>
            <div class="xl:font-bold lg:font-semibold xl:block lg:block hidden">Folio</div>
            <div class="font-bold">{{ currentTime }}</div>
            <div class="flex justify-center items-center">
                <button class="styled-button xl:px-[7px] xl:py-[5px] lg:px-[5px] lg:py-[3px] mx-2 xl:block hidden"
                    @click="toggleSearch">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
                <button class="styled-button xl:px-[7px] xl:py-[5px] lg:px-[5px] lg:py-[3px] mx-2 p-2"
                    @click="toggleMenu">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </button>
            </div>
        </div>
    </header>
    <div class="py-3" :class="{ 'menu-slide': true, 'menu-slide-open': isMenuOpen }">
        <div class="sm:flex justify-center items-center bottom-2" :style="{ padding: '10px' }">
            <div class="text-center xl:hidden lg:hidden  py-2 text-black">Portfolio</div>
            <Navbar v-for="post in posts" :key="post.id" :title="post.title" class="navbar text-[15px]"></Navbar>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

export default {
    name: 'Header',
    components: {
        Navbar,
        FontAwesomeIcon
    },
    data() {
        return {
            currentTime: '',
            isMenuOpen: false,
            posts: [
                { id: 1, title: 'Home' },
                { id: 2, title: 'About Me' },
                { id: 3, title: 'Skills' },
                { id: 4, title: 'Project' },
                { id: 5, title: 'Experience' },
                { id: 6, title: 'Contact' },
                { id: 7, title: 'GitHub' },
            ],
        };

    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        getCurrentTime() {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString(); // Format the time as HH:MM:SS
        }
    },
    mounted() {
        this.getCurrentTime(); // Initialize currentTime on load
        setInterval(this.getCurrentTime, 1000); // Update currentTime every second
    },
    created() {
        library.add(faMagnifyingGlass, faBars);
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    padding: 10px;
    margin: 0px 10px;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.navbar:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.styled-button {
    /* margin: 0px 5px;
    padding: 10px; */
    background-color: #f5f5f5;
    border: none;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.styled-button:hover {
    background-color: #e0e0e0;
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

/* Menu Slide Styles */
.menu-slide {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    background-color: white;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
}

.menu-slide-open {
    max-height: 500px;
    transition: max-height 0.5s ease-in;
}
</style>
