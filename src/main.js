import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
// main.js or main.ts
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {faF} from '@fortawesome/free-solid-svg-icons';

// library.add(faF);


// COMPONENTS

import TheNavbar from "@/components/navbar/TheNavbar.vue";
import MainContent from "@/components/main-content/MainContent.vue";
import ProjectDetail from "@/components/project-section/ProjectDetail.vue";
import TheServices from "@/components/Services/TheServices.vue";
import TheFooter from "@/components/footer/TheFooter.vue";

import './assets/tailwind.css'

const app = createApp(App)

app.use(router)

app.component('the-navbar', TheNavbar)
app.component('main-content', MainContent)
app.component('project-detail', ProjectDetail)
app.component('the-services', TheServices)
app.component('the-footer', TheFooter)

// app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
