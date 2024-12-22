<template>
  <router-view></router-view>
</template>

<script>
import Header from './components/template/Header.vue';
import Footer from './components/template/Footer.vue';
import Home from './pages/Home.vue';
import AboutMe from './pages/About.vue';
import Skills from './pages/Skills.vue';
import Project from './pages/Project.vue';
import Experience from './pages/Experience.vue';
import Contact from './pages/Contact.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
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
        { id: 7, title: 'GitHub', link: '#github' },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  color: #333;
}

section {
  padding: 20px;
  min-height: 90%;
  max-height: 100%;
  font-family: Arial, sans-serif;
}
</style>
