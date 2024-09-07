# Shapes

## Description
This library provides the ability to create and work with three types
of geometric shapes: rectangle, triangle and circle.

## Set up
Just copy and paste this in terminal
```bash
git clone https://github.com/paslkal/shapes.git
cd shapes
npm install
npm run compile
cd ..
```

### Explanation
1. Download git repo to your project by typing in terminal `git clone https://github.com/paslkal/shapes.git`<br>
2. Then move into that repo by typing `cd shapes`
3. Run `npm install` to install all necessary packages 
4. Finally run `npm run compile` to compile all typescript files into `dist` folder<br>
5. Now you can move out from `shapes` folder `cd ..`


## Usage
Here is how you can use this library for ES Modules if you want to use it in browser
```js
import  {Rectangle}  from "./shapes/dist/lib/esm/index.js";

const rectangle = new Rectangle(1, 2)

console.log(rectangle.getArea())
```

But don't forget set `"type": "module"` in `package.json` file if you gonna use EScript

Here is how you can use library for CommonJS Modules if you want to use node js
```js
const {Rectangle} = require('./shapes/dist/lib/node/index.js')

const rectangle = new Rectangle(1, 2)

console.log(rectangle.getArea())
``` 