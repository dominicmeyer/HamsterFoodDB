import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.ts'
const fullTailwindConfig = resolveConfig(tailwindConfig)

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	display: {
		thresholds: {
			xs: 0,
			sm: fullTailwindConfig.theme.screens.sm.slice(0, -2),
			md: fullTailwindConfig.theme.screens.md.slice(0, -2),
			lg: fullTailwindConfig.theme.screens.lg.slice(0, -2),
			xl: fullTailwindConfig.theme.screens.xl.slice(0, -2),
		}
	}
})

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
