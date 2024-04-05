import store from "@/store";

export default defineNuxtPlugin((app) => {
	app.vueApp.use(store);
	app.vueApp.config.globalProperties.$store = store;
});
