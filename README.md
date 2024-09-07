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

## Docs
### Classes

#### Class Rectangle
Creating by
```js
const {Rectangle} = require('./shapes/dist/lib/node/index.js')

const rectangle = new Rectangle(1, 2)
```
##### Properties
1. `width` - private
2. `height` - private

##### Methods
1. `getArea` - return rectangle's area
2. `getPerimeter` - return rectangle's perimeter
3. `getWidth` - return rectangle's width
4. `setWidth` - set new rectangle's width
5. `getHeight`
6. `setHeight` 

#### Class Triangle
Creating by
```js
const {Triangle} = require('./shapes/dist/lib/node/index.js')

const triangle = new Triangle(1, 2, 3)
```
##### Properties
1. `firstSide` - private
2. `secondSide` - private
3. `thirdSide` - private

##### Methods
1. `getArea` - return triangle's area
2. `getPerimeter` - return triangle's perimeter
3. `getgetFirstSide` - return triangle's width
4. `setgetFirstSide` - set new triangle's width
5. `getSecondSide`
6. `setSecondSide` 
7. `getThirdSide`
8. `setThirdSide` 
9. `getHeight` - return the height drawn to a certain side

#### Class Circle
Creating by
```js
const {Circle} = require('./shapes/dist/lib/node/index.js')

const circle = new Circle(1)
```

##### Properties
1. `radius` - private

##### Methods
1. `getArea` - return circle's area
2. `getPerimeter` - return circle's perimeter
3. `getDiameter` - return circle's diameter
