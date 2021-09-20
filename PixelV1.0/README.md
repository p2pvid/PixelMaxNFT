# Welcome to Artengine [PixelMaxNFT]




# Art Engine

Create generative art by using the canvas api and node js. Before you use the generation engine, make sure you have node.js and yarn installed.

## Installation

```sh
git clone "url"

yarn add all
```

## Usage

Create your different layers as folders in the 'layers' directory, and add all the layer assets in these directories. 

Once you have all your layers, go into `src/config.js` and update the `layersOrder` array to be your layer folders name in order of the back layer to the front layer.

*Example:* If you were creating a portrait design, you might have a background, then a head, a mouth, eyes, eyewear, and then headwear, so your `layersOrder` would look something like this:

```js
const layersOrder = [
    { name: 'Background'},
    { name: 'Ball'},
    { name: 'Eye color' },
    { name: 'Iris' },
    { name: 'Shine' },
    { name: 'Bottom lid' },
    { name: 'Top lid' },
];
```

The `name` of each layer object represents the name of the folder (in `/layers/`) that the images reside in. 

Then optionally, update your `format` size, ie the outputted image size, and the `editionSize`, which is the amount of variation outputted.

When you are all ready, run the following command and your outputted art will be in the `build` directory:

```sh
npm run build
```
