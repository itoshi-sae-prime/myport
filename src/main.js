import './assets/main.css';
import { createApp } from 'vue';
import router from './router/admin.js';
import App from './App.vue';

// Import Ant Design Vue
import {
    Menu,
    Button,
    message,
    List
} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faBars, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
// Thêm biểu tượng vào thư viện Font Awesome
library.add(faMagnifyingGlass, faBars, faWebAwesome);

const app = createApp(App);

// Cấu hình ứng dụng
app.use(router);
app.use(Button);
app.component('font-awesome-icon', FontAwesomeIcon);

// Gán `message` của Ant Design Vue vào các thuộc tính toàn cục
app.config.globalProperties.$message = message;

// Mount ứng dụng
app.mount('#app');
