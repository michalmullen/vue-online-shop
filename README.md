# Front-End

A Vue Application that uses the following technologies:

- Vuetify: Material Design UI library for Vue
- Axios: Promise based HTTP client for the browser and node.js
- Vue Router: Manages routs for Vue application

It is made to be hosted on an Apache or Nginx server.

## Deployment

Clone this repo in the htdocs (server) and in it run the following commands:

```
npm install
npm run build
```

After open browser and enter `localhost/vue`

### Commands

Install all needed packages

```
npm install
```

Compiles and hot-reloads for development

```
npm run serve
```

Compiles and minifies for production

```
npm run build
```

Previewing production build (dist) Locally

```
serve -s dist
```

Lints and fixes files

```
npm run lint
```

Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

How to connect to the api during Development

`windows` + `r`

then paste

```
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```

## SEO

1. The application has pages rich in content such as the welcome and about page. These pages contain key works that are aimed at a specific audience.
2. Menu items are given descriptions and images are given alt tags so that they are easier to find.
3. Very little if any error 404 messages. Having as little as possible improves the ranking within Google's search engine.
4. Application should have an average loading time of 1s (according to the Vue UI tool). According to [dotcom-tools](https://www.dotcom-tools.com/blog/how-fast-should-my-website-load/) the average time for a page to load is 1.3s and if under 2s is good. This will further improve the ranking in Google Search Engine.
