// In de main.js file worden alle verschillende components ingeladen en word de connectie
// gemaakt tussen vue document en de index.html file
// #####################################################################################
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Users from './Users.vue';
import Home from './Home.vue';
import Input from './input.vue';
import indicator from './indicator.vue';

// --Hier word een components gemaakt zodat we dit in de hoofd pagina kunnen gebruiken
//-- als de component test heet moet je dan <test></test> gebruiken
// het werkt net als een normale element dan dus!
// NOTE: een andere manier is op in de component zelf de andere component te importeren
// Bekijk simpelTesten.vue bestand hoe dit in zijn werking gaat
Vue.component('app-indicator', indicator);


// --Vue.use zorgt ervoor dat we de vue router package kunne gebruiken
// --Router zorgt ervoor dat als je een nieuwe component laat dat laden
// zonder dat de paginga word geladen(soort van inpage linking word het dan)
Vue.use(VueRouter);



// --De verschillende routes(pagina's) worden in de const routes opgeslagen
// --De routes constant is een array met objecten dat de pagina's path bevatten
// --Je ziet een path property met de bijbehorende path en de component is welke import de routes moet pakken
const routes = [
  { path: '/users', component: Users},
  { path: '/', component: Home},
  { path: '/input', component: Input}
];

// --Nieuwe router word aangemaakt door new VueRouter
// --routes = routes word hieronder beschreven(er staat alleen routes omdat
// we door package dit niet helemaal hoeven te typen)
// --Door de mode history staat word er geen # teken gegenereerd in het webadres
const router = new VueRouter({
  routes,
  mode: 'history'
})

// --Hier word een nieuwe vue instance gemaakt
// --el:'#app' verbind de instance het element in de index.html (el staat voor element)
// --router verbind de verschillende routes dat in de const router is opgeslagen met index.html
// --render zorgt ervoor dat alles in de App.vue gerenderd word op de index.html
// --App is hierdoor ook het hoofdbestand
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
