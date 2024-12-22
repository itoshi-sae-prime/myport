<template>
    <div class="section xl:p-[50px] lg:p-[50px] p-[25px] skills-content">
        <div class="xl:text-left lg:text-left text-center">
            <div
                class=" text-white font-bold mb-[30px] uppercase inline-block xl:text-[35px] lg:text-[25px] text-[20px] border-b-2 border-white ">
                Skills</div>
        </div>

        <div class="skills-list gap-[20px]">
            <div class="skills-content flex gap-[40px]">
                <div
                    class=" lg:w-[50%] xl:w-[50%] w-[100%] grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-3 gap-[30px] justify-center items-center">
                    <div v-for="skill in skills" :key="skill.id" class="skill-item">
                        <button @click="alertFw(skill.name)" class="skill-button">
                            <div class="icon-container">
                                <font-awesome-icon :icon="skill.icon" />
                            </div>
                        </button>
                    </div>
                </div>
                <div class="lg:w-[50%] xl:w-[50%] hidden justify-center items-center xl:flex lg:flex">
                    <div
                        class="xl:text-[15px] lg:text-[10px] text-[10px] xl:tracking-widest lg:tracking-widest tracking-tight xl:leading-10 lg:leading-10 leading-5">
                        <div
                            class=" leading-[40px] font-extrabold  xl:text-[18px] lg:text-[10px] text-[10px] mb-3 tracking-wider text-white">
                            An
                            overview of my
                            technical
                            skills and expertise in IT.</div>
                        <strong>- Frontend:</strong>
                        <p>With a solid foundation in front-end development, I specialize in creating responsive and
                            dynamic web applications using modern technologies.</p>
                        <strong>- Backend:</strong>
                        <p>Expanding my expertise into backend technologies, I have gained valuable experience in
                            server-side development.</p>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faHtml5, faCss3Alt, faBootstrap, faJs, faReact, faVuejs, faPhp, faLaravel, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faPalette as fasPalette, faDraftingCompass as fasDraftingCompass } from '@fortawesome/free-solid-svg-icons';

library.add(faHtml5, faCss3Alt, faBootstrap, fasPalette, faFigma, faJs, faReact, faVuejs, faPhp, faLaravel);
export default {
    name: 'Skills',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            skills: [
                { id: 1, icon: ['fab', 'html5'], name: 'HTML', description: 'Proficient in HTML for creating well-structured web pages with semantic markup.' },
                { id: 2, icon: 'fab fa-css3-alt', name: 'CSS', description: 'Skilled in CSS, including Flexbox, Grid, and animations for responsive designs.' },
                { id: 3, icon: 'fab fa-bootstrap', name: 'Bootstrap', description: 'Experienced with Bootstrap to rapidly build responsive and modern layouts.' },
                // { id: 4, icon: 'fas fa-palette', name: 'Tailwind CSS', description: 'Experienced in using Tailwind CSS for utility-first styling and fast prototyping.' },
                { id: 5, icon: ['fab', 'figma'], name: 'Figma', description: 'Proficient in Figma for designing UI/UX wireframes and prototypes.' },
                { id: 6, icon: 'fab fa-js', name: 'JavaScript', description: 'Strong foundation in JavaScript for adding interactivity and functionality to web applications.' },
                { id: 7, icon: 'fab fa-react', name: 'ReactJS', description: 'Experienced in building dynamic web applications using React and managing component states.' },
                { id: 8, icon: 'fab fa-vuejs', name: 'VueJS', description: 'Proficient with Vue.js for building single-page applications with reusable components.' },
                { id: 9, icon: 'fab fa-php', name: 'PHP', description: 'Skilled in PHP for backend development and server-side scripting.' },
                { id: 10, icon: 'fab fa-laravel', name: 'Laravel', description: 'Experienced in Laravel for building scalable and robust backend applications.' }
            ]
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        getCurrentTime() {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString();
        },
        // alertFw(object) {
        //     alert(object);
        // }
    }
};
</script>

<style scoped>
/* .skill-item {
    background-color: #f9f9f9;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
} */

.skill-button {
    width: 100%;
    padding: 20px;
    background-color: #f9f9f9;
    border: none;
    border-radius: 8px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
}

.skill-button:hover {
    transform: scale(1.1);
    background-color: black;
    color: white;
}

.skill-button:hover .icon-container {
    transform: scale(1.2);
    color: white;
}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 3rem;
    padding: 10px;
    animation: zoom 2s ease-in-out infinite;
}

.skills-content {
    z-index: 0;
    animation: upanddown 2s ease-in-out;
}

/* .skills-list {
    overflow: hidden;

    white-space: nowrap;
    position: relative;
    width: 100%;
} */



@keyframes zoom {

    0%,
    100% {
        transform: scale(1.2);

    }

    50% {
        transform: scale(1.4);
    }
}

@keyframes upanddown {
    0% {
        opacity: 0;
        transform: translateX(-90%);
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }

}
</style>
