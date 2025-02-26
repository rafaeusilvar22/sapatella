import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate';
import router from './router'
import "/src/assets/sap-styles/utils/tailwind.css";
import "/src/assets/sap-styles/main.scss";
import App from './App.vue'

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')