<template>
    <div class="section text-center p-10">
        <h1 class="title text-white text-4xl font-bold mb-5">My Experience</h1>
        <p class="description text-white text-lg tracking-wider leading-10 mb-10 font-semibold">
            A summary of my career journey in IT and the roles I've held.
        </p>

        <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div v-for="experience in experiences" :key="experience.id"
                class="experience-item p-6 rounded-lg shadow-lg transition-all bg-gray-200 dark:bg-gray-800 text-left">
                <h5 class="text-orange-400 font-semibold mb-1 lg:text-sm">{{ experience.duration }}</h5>
                <h2 class="text-blue-600 text-2xl font-semibold mb-1">{{ experience.position }}</h2>
                <h3 class="text-gray-600 dark:text-gray-300 mb-2 lg:text-sm">
                    <font-awesome-icon :icon="['fas', 'building']" /> : {{ experience.company }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-3 lg:text-sm">{{ experience.description }}</p>
                <img :src="experience.img" alt="Experience Image" class="w-full h-auto rounded-lg object-cover">
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faBuilding);

export default {
    name: 'Experience',
    components: { FontAwesomeIcon },
    data() {
        return {
            experiences: [
                {
                    id: 1,
                    position: 'Frontend Developer Intern',
                    company: 'Hi! Time Company',
                    duration: '9/2022 - 12/2022',
                    description: 'Developed dynamic web applications using Vue.js, collaborated with design teams to create seamless UI experiences.',
                    img: "https://i.imgur.com/D59sGop.jpeg",
                },
                {
                    id: 2,
                    position: 'PHP Developer Intern',
                    company: 'ABBEAUTY World Company',
                    duration: '7/2024 - 11/2024',
                    description: 'Managed server infrastructure, implemented security protocols, and provided technical support to ensure smooth operations.',
                    img: "https://i.imgur.com/gHYUZSc.jpeg",
                },
            ]
        };
    }
};
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

body.dark-mode .experience-item {
    background-color: #333333;
    color: #e0e0e0;
}
</style>
