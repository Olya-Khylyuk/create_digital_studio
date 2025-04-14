// i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'
import pl from './locales/pl.json'

const messages = {
    en, ua, pl
};

const i18n = createI18n({
    legacy: false, // вимикаємо старий API
    locale: localStorage.getItem('lang') || 'ua',
    messages,
});

export default i18n;