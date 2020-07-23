# Default .gitignore repository template - VueCLI based project.

[![CodeFactor](https://www.codefactor.io/repository/github/verdantsparks/vuecli-base-project-template/badge)](https://www.codefactor.io/repository/github/verdantsparks/vuecli-base-project-template)

Using this repo to save time from editing .gitignore to ignore MacOS and JetBrains file on top of Visual Studio setting. It also avoid committing user secrets into git repository. Please have your user secrets (e.g. API keys) placed in `.env.local` / `.env.{mode}.local` with key value pairs like:
```
VUE_APP_MY_SECRET=FOO
```
To prevent accidentally leak user secrets, Vue only embed values with keys having `VUE_APP_` prefix during build.

Other key-value pair will only available in build files (i.e. outside of Vue app).

This template repo created by default setting of VueCLI `vue create <name>`, using ***yarn*** as package manager, and does not have any plugin installed (e.g. Vue Router, Vuex, Vuetify, etc). You have to install them by your own.

Please remove the `LICENSE` file when creating private repositories or change to other [LICENSE](https://choosealicense.com/) file to suit your needs.

# app

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
