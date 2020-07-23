# Default .gitignore repository template - VueCLI based project.

This is a starter Vue project template with all basic plugin added.

Using this repo to save time from editing .gitignore to ignore MacOS and JetBrains file on top of Visual Studio setting. It also avoid committing user secrets into git repository. Please have your user secrets (e.g. API keys) placed in `.env.local` / `.env.{mode}.local` with key value pairs like:
```
VUE_APP_MY_SECRET=FOO
```
To prevent accidentally leak user secrets, Vue only embed values with keys having `VUE_APP_` prefix during build.

Other key-value pair will only available in build files (i.e. outside of Vue app).

This template repo created by default setting of VueCLI `vue create <name>`, using ***yarn*** as package manager, and have basic plugins installed (e.g. Vue Router, Vuex, Vuetify, Vue-i18n).

Please remove the `LICENSE` file when creating private repositories or change to other [LICENSE](https://choosealicense.com/) file to suit your needs.

# Plugins: [Vue-Router, Vuex, Vue-i18n, Vuetify, PWA, Vue-Test-Utils with Jest, ESLint]

## Vue-Router
Please manually setup `mode: 'history'` if you need to enable history mode.

<pre>
// router/index.js
const router = new VueRouter({
  mode: 'history',
  routes
})
</pre>

This is because this repe is for fast Vue frontend prototyping so using #hash style url is not a problem.

## Vue-i18n

This repo integrate vue-i18n with Vuetify:

<pre>
// plugins/vuetify.js

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
});
</pre>

## Vuetify
Disable theme color variants and enable theme cache to improve performance.

<pre>
//plugins/vuetify.js
export default new Vuetify({
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
</pre>

## To test HTTPS/SSL or PWA pre-requisites:
OpenSSL
Yarn Package Manager

Run `yarn list -qlobal -depth 0` to show installed global package.

<pre>
/usr/local/lib
├── @vue/cli@3.10.0
├── @vue/cli-service-global@3.9.2
├── http-server@0.11.1
└── npm@6.9.0
</pre>

You will need the following packages installed:
1. @vue/cli
2. @vue/cli-service-global
3. http-server

Since ServiceWorker need to run in HTTPS, we need to create SSL certificate for development test.

run `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`

it will generate the SSL certificate.

with code compiled by `npm run build` at `dist` folder

run `http-server dist -S -C cert.pem`

<pre>
Starting up http-server, serving dist through https
Available on:
  https://127.0.0.1:8080
</pre>

Now you can view the web from your mobile phone.

After finished loading, add the web to your mobile phone home screen.

Then turn off your mobile phone connectivity.

Return to the app and refresh, you will find that the app now able to run offline.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
