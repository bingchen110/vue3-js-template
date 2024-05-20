import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'
import ElementPlus from 'element-plus'
import locale from 'element-plus/dist/locale/zh-cn'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)


const pinia = createPinia()
const persist = createPersistedState()
//pinia使用持久化插件
pinia.use(persist)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { locale })

app.mount('#app')
