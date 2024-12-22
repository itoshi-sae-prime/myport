<template>
    <div>
        <div class="scroll-container">
            <section id="home" class="bg-black scroll-section">
                <main class="container">
                    <Home />
                </main>
            </section>
            <section id="about" class="scroll-section">
                <main class="container ">
                    <AboutMe />
                </main>
            </section>
            <section id="skills" class="bg-black scroll-section">
                <main class="container">
                    <Skills />
                </main>
            </section>
            <section id="projects" class="scroll-section">
                <main class="container">
                    <Project />
                </main>
            </section>
            <section id="contact" class="bg-black scroll-section">
                <main class="container">
                    <Contact />
                </main>
            </section>
            <!-- <section id="experience" class="bg-black scroll-section">
                <main class="container">
                    <Experience />
                </main>
            </section> -->
            <!-- <section id="github" class="bg-black">
                <main class="container">
                    <GitHub />
                </main>
            </section> -->
        </div>
    </div>
</template>
<script>
import Home from '../../pages/Home.vue';
import AboutMe from '../../pages/About.vue';
import Skills from '../../pages/Skills.vue';
import Project from '../../pages/Project.vue';
import Experience from '../../pages/Experience.vue';
import Contact from '../../pages/Contact.vue';
export default {
    components: {
        Home,
        AboutMe,
        Skills,
        Project,
        Experience,
        Contact,
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Home', link: '#home' },
                { id: 2, title: 'About Me', link: '#about' },
                { id: 3, title: 'Skills', link: '#skills' },
                { id: 4, title: 'Project', link: '#projects' },
                { id: 5, title: 'Experience', link: '#experience' },
                { id: 6, title: 'Contact', link: '#contact' },
            ],
        };
    },

}
</script>
<style>
section {
    /* padding: 50px; */
    min-height: 90%;
    max-height: 100%;
    font-family: Arial, sans-serif;
}

/* .scroll-container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
    margin: 0;
    padding: 0;
} */

.scroll-section {
    scroll-snap-align: start;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
}
</style>