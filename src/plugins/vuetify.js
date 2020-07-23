import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n'
Vue.use(Vuetify);

const messages = {
    en: {
        $vuetify: {

        }
    }
}
//Create VueI18n instance for Vuetify UI
const i18n = new VueI18n({
    locale: 'en',
    messages,
})

export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
    theme: {
        options: {
            variations: false,
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            }
        }
    },
});
