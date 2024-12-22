<template>
    <div class="project-page xl:p-[50px] lg:p-[50px] p-[10px] skills-content">
        <section class="hero-section " :style="{ borderRadius: '15px 15px 0 0 ' }">
            <h1
                class="text-black xl:pr-2 lg:pr-2 mb-2 font-bold border-b-2 inline-block xl:text-[35px] lg:text-[25px] text-[20px] xl:mb-[30px] lg:mb-[10px]">
                Projects</h1>
            <div
                class="text-black xl:text-[15px] lg:text-[15px] text-[10px] xl:tracking-widest lg:tracking-widest tracking-tight xl:leading-10 lg:leading-10 leading-5">
                Explore some of the work I've done in web development, system administration, and more.
            </div>
        </section>
        <div class="gap-4 text-black h-full ">
            <div class="xl:flex lg:flex justify-between gap-5 items-center h-full mb-[30px] mt-[20px]"
                v-for="(project, index) in projects.slice(0, visibleProjects)" :key="index">
                <!-- Phần hình ảnh -->
                <div
                    class="xl:w-[50%] lg:w-[50%] w-[100%] h-full flex justify-center items-center border-2 p-5 bg-blue-200 rounded-lg">
                    <img :src="project.image" alt="Project Image" class="max-h-[300px] object-contain">
                </div>

                <!-- Phần nội dung -->
                <div
                    class="xl:w-[50%] lg:w-[50%] w-[100%] h-full flex flex-col xl:justify-between lg:justify-between xl:text-left lg:text-left text-center gap-y-5">
                    <div class="xl:text-[20px] lg:text-[12px] text-[10px]">
                        <div class="font-bold text-xl pb-2 xl:pt-1 pt-2">{{ project.title }}
                        </div>
                        <div class="tracking-wider">{{ project.description }}</div>
                    </div>
                    <!-- Công nghệ -->
                    <div class=" xl:grid lg:grid grid-cols-1 flex justify-center gap-2">
                        <div class="xl:text-[12px] lg:text-[10px] text-[8px] font-semibold"
                            v-for="(tech, index) in project.technology" :key="index">
                            {{ tech }}
                        </div>
                    </div>
                    <!-- Liên kết -->
                    <div class="flex justify-around text-[15px] gap-x-5">
<<<<<<< HEAD
                        <div class="button_project ">Review</div>
=======
                        <<div class="button_project ">Review</div>
>>>>>>> 5c09332f32d73cb05e7a2790f56a424d2db867ca
                        <div class="button_project"><a :href="project.link" target="_blank" class="">Source</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="visibleProjects < projects.length"
            class="text-center xl:mt-10 lg:mt-8 my-[10px] xl:text-[20px] lg:text-[18px] text-[15px]">
            <button @click="loadMore()"
                class="bg-teal-500 text-white font-bold py-2 px-4 rounded hover:bg-teal-600 transition-all duration-300">
                More Projects
            </button>
        </div>
        <!-- <div class="flex justify-center text-black py-6 bg-white hero-section"
            :style="{ borderRadius: '0 0 15px 15px' }">
            <font-awesome-icon :icon="['fas', 'web-awesome']" />
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Project',
    data() {
        return {
            projects: [
                { image: 'https://i.imgur.com/jWlCTCD.jpeg', complete: '75%', title: 'LungTung Fashion Store', description: 'A vibrant fashion website that provides visitors with comprehensive information about the latest trends, fashion tips and our products, where you can view the shops products, perhaps buy and order, and contact LungTung store', technology: ["PHP", "Laravel", "MySQL", "Tailwind"], link: 'https://github.com/itoshi-sae-prime/LungTungShop' },
                { image: 'https://i.imgur.com/v6SKfAj.jpeg', complete: '50%', title: 'Kicap Store Clone Interface', description: 'A UI clone with modern components.', technology: ["ReactJs", "Tailwind"], link: 'https://example.com/project2' },
                { image: 'https://i.imgur.com/DAYzpL1.jpeg', complete: '50%', title: 'My Portfolio', description: 'A sleek and responsive personal portfolio showcasing my skills, projects, and achievements in web development. Built with Vue.js for dynamic functionality and TailwindCSS for a modern, visually appealing design, the portfolio is a hub for potential employers or collaborators to explore my work.', technology: ["VueJs", "Tailwind"], link: 'https://github.com/itoshi-sae-prime/myport' },
                { image: 'https://i.imgur.com/1SAsPWx.jpeg', complete: '50%', title: 'Todolist App', description: 'A simple and efficient Todolist application designed to help users organize their daily tasks effectively. Built with React.js for dynamic user interaction and TailwindCSS for a clean and modern design, this app provides essential features for managing tasks.', technology: ["ReactJs", "Tailwind"], link: 'https://github.com/itoshi-sae-prime/Todolist/tree/main/ten-du-an1' },
                { image: 'https://i.imgur.com/hVAU2Jp.jpeg', complete: '75%', title: 'Check Price App', description: 'A travel website where visitors can get detailed information, latest news & useful tips on visas, destinations & what to do in Vietnam. Developed using the PHP,Laravel and styled using TailwindCSS, just a little NodeJs make API Product.', technology: ["PHP", "Laravel", "MySQL", "Tailwind"], link: 'https://example.com/project1' },
            ],
            visibleProjects: 2,
        };
    },
    methods: {
        loadMore() {
            // Tăng số lượng dự án hiển thị lên thêm 2
            this.visibleProjects += 2;
        }
    }
};
</script>

<style scoped>
/* .project-page {
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
    border-radius: 15px;
}

.hero-section {
    padding: 20px;
    text-align: center;
    background-color: #fff;
    color: #000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1.5s ease-in-out;
}

.project-card {
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: 100%;
    max-width: 300px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.project-title {
    color: #333;
    font-size: 18px;
    font-weight: bold;
}

.project-description {
    font-size: 14px;
    color: #555;
    margin: 10px 0;
}

.project-technology {
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
}

.project-link {
    display: inline-block;
    margin-top: 8px;
    color: #1e90ff;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 12px;
}

.project-link:hover {
    color: #00aaff;
} */
.button_project {
    color: white !important;
    width: 100%;
    padding: 12px;
    text-align: center;
    background: skyblue;
    border-radius: 25px;
    font-weight: 700;
}

.button_project:hover {
    background: plum;
    font-weight: 800;
}

.skills-content {
    z-index: 0;
    animation: upanddown 2s ease-in-out;
}

@keyframes upanddown {
    0% {
        opacity: 0;
        transform: translateX(90%);
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }

}
</style>
