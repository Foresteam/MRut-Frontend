import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import PrimeVue from 'primevue/config';
import router from './router';
import '../f-you-in-the-blue/theme.css';	//theme
import 'primevue/resources/primevue.min.css';					//core css
import ToastService from 'primevue/toastservice';				//toast
import ConfirmationService from 'primevue/confirmationservice';	//confirm
import 'primeicons/primeicons.css';								//icons
import '../f-you-in-the-blue/icons.css';						//icons


const app = createApp(App).use(router);

import TabMenu from 'primevue/tabmenu';
import Divider from 'primevue/divider';
import OrderList from 'primevue/orderlist';
import ToggleButton from 'primevue/togglebutton';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import TreeSelect from 'primevue/treeselect';
import Listbox from 'primevue/listbox';
import Dropdown from 'primevue/dropdown';
// import Breadcrumb from 'primevue/breadcrumb';
import ContextMenu from 'primevue/contextmenu';

app.component('p-tab-menu', TabMenu);
app.component('p-divider', Divider);
app.component('p-orderlist', OrderList);
app.component('p-btn-toggle', ToggleButton);
app.component('p-btn', Button);
app.component('p-input-text', InputText);
app.component('p-tree-select', TreeSelect);
app.component('p-listbox', Listbox);
app.component('p-dropdown', Dropdown);
// app.component('p-breadcrumb', Breadcrumb);
app.component('p-context-menu', ContextMenu);

app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);
app.use(store).mount('#app');