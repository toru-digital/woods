# <<<<<<< Updated upstream

# woods

Explore the woods

http://localhost:3000/
https://main--classy-florentine-11ac94.netlify.app
https://app.netlify.com/sites/classy-florentine-11ac94/deploys

## Usage

```bash
nvm use 18;
npm i;
npm run dev;
```

## Folders

### pages

Nuxt uses file routing for pages, e.g. / = pages/index.vue and /trees = pages/trees.vue

### layouts

Page routing can include layouts, by default the layouts/defualt.vue is used, but you can use others by defining page meta fields.

```sh
definePageMeta({
	layout: "minimal",
});
```

### components

Folder for app components

### interfaces

Interfaces used for types within the app

### plugins

Define app plugins here, for now we just register the vuex store.

### store

Contains the store config

## Local Testing

ngrok can be used to expose your local app over a public url, once you have nuxt running locally you can run the following

```sh
ngrok http http://localhost:3000
```

this will give you a public endpoint which you can open on your phone.
the address will look something like https://xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx.ngrok-free.app

## links

-   https://dev.to/orkhanjafarovr/real-compass-on-mobile-browsers-with-javascript-3emi
-   https://observablehq.com/@d3/bubble-chart/2?intent=fork
-   https://stackoverflow.com/questions/924171/geo-fencing-point-inside-outside-polygon#924180
-   https://www.earthday.org/
-   https://www.freecodecamp.org/news/how-to-use-the-javascript-geolocation-api/
-   https://github.com/prowestgis/dojo-geo-uri-polyfill/blob/master/polyfill.js

## Notes

-   add to inaturalist & british trees
-   edit open street map
-   photos of trees are in sets with date stamps. take them from the same place and angle. show nearest photo to now.
-   submit a tree, via insturalist. set it up there first. when it’s been validated we will add it.
-   draw geo fences. outer woods. walled garden, outer woods. charter woods. delapre woods. the rookery.
