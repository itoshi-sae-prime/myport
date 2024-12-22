<template>
    <div class="footer" :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }">
        <div class="icon-container">
            <div class="icon" @click="openFacebook">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </div>
            <div class="icon" @click="openInstagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
            <div class="icon" @click="openGithub">
                <font-awesome-icon :icon="['fab', 'github']" />
            </div>
        </div>
        <div class="" :style="{ padding: '0px 50px', fontSize: '25px', fontWeight: '700' }">- キエンくん -</div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faInstagram, faGithub, faDownload);

export default {
    name: 'Footer',
    methods: {
        openFacebook() {
            window.open('https://www.facebook.com', '_blank');
        },
        openInstagram() {
            window.open('https://www.instagram.com', '_blank');
        },
        openGithub() {
            window.open('https://www.github.com', '_blank');
        }
    }
}
</script>

<style scoped>
.footer {
    display: flex;
    align-items: flex-start;
    padding: 20px 20px 20px 50px;
    background-color: white;
    color: black;
    font-size: 18px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
}

.icon-container {
    display: flex;
    gap: 15px;
    /* Khoảng cách giữa các biểu tượng */
}

.icon {
    padding: 10px;
    margin: 0 7px;
    background-color: #f5f5f5;
    border-radius: 15px;
    transition: background-color 0.3s, transform 0.3s;
    /* Hiệu ứng chuyển động */
    cursor: pointer;
    /* Con trỏ tay khi di chuột */
}

.icon:hover {
    background-color: #e0e0e0;
    /* Màu nền khi hover */
    transform: scale(1.1);
    /* Phóng to biểu tượng khi hover */
}
</style>
