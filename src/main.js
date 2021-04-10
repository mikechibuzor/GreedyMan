import { createApp } from "vue";
import App from "./App.vue";
<<<<<<< HEAD
import store from "./store/store.js";
import "tailwindcss/tailwind.css";

const app = createApp(App);
app.use(store);
app.mount("#app");
=======
import "tailwindcss/tailwind.css";

createApp(App).mount("#app");
>>>>>>> e8cccfc01daf3508cf5293d3c6648a58a4347888
