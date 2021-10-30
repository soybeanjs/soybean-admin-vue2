import { createApp } from 'vue-demi';
import App from './App.vue';
import 'virtual:windi.css';
import './styles/css/global.css';

async function setupApp() {
  const app = createApp(App);

  app.mount('#app');
}

setupApp();
