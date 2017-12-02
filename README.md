# bear.js

🐻
bear.js - game engine using [pixi.js](http://www.pixijs.com/)  to render. Inspired by [ELM](http://elm-lang.org/) and [Phaser](https://phaser.io/).

## Install

## Examples

## Api

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### game

Game init function

**Parameters**

-   `GameArgs` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
    -   `GameArgs.state` **any** Initial state of the game
    -   `GameArgs.update` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Returns a new state each frame
    -   `GameArgs.render` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Returns an array of sprite/text each frame
    -   `GameArgs.textures` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;{name: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), url: [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)}>** List of textures that will be loaded before the game starts (optional, default `[]`)
    -   `GameArgs.options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Game options (optional, default `{}`)
        -   `GameArgs.options.width` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Game width (optional, default `500`)
        -   `GameArgs.options.height` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Game height (optional, default `500`)
        -   `GameArgs.options.backgroundColor` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Game background color (optional, default `0x111111`)
-   `landingpad` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

**Examples**

```javascript
import { game } from "bear.js"
```

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;PIXI.Application>**

### \_Point

Point class

**Parameters**

-   `x` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
-   `y` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### x

x position

Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### y

y position

Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### length

The length of the point

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### setX

Returns a copy with its x value changed

**Parameters**

-   `x` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

Returns **[\_Point](#_point)**

#### setY

Returns a copy with its y value changed

**Parameters**

-   `y` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

Returns **[\_Point](#_point)**

#### normalize

Returns a normalized copy

Returns **[\_Point](#_point)**

#### directionTo

Returns a normalized copy pointing towards the provided point

**Parameters**

-   `otherPoint` **[\_Point](#_point)**

Returns **[\_Point](#_point)**

#### add

Returns a copy subtracted by the provided point

**Parameters**

-   `otherPoint` **[\_Point](#_point)**
    -   `otherPoint.x`  
    -   `otherPoint.y`  

Returns **[\_Point](#_point)**

#### subtract

Returns a copy subtracted by the provided point

**Parameters**

-   `otherPoint` **[\_Point](#_point)**
    -   `otherPoint.x`  
    -   `otherPoint.y`  

#### multiply

Returns a copy multiplied by the provided point

**Parameters**

-   `otherPoint` **[\_Point](#_point)**
    -   `otherPoint.x`  
    -   `otherPoint.y`  

#### divide

Returns a copy divided by the provided point

**Parameters**

-   `otherPoint` **[\_Point](#_point)**
    -   `otherPoint.x`  
    -   `otherPoint.y`  

#### clampX

Returns a copy with x clamped between the provided min and max

**Parameters**

-   `min` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
-   `max` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

Returns **[\_Point](#_point)**

#### clampY

Returns a copy with y clamped between the provided min and max

**Parameters**

-   `min` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
-   `max` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

Returns **[\_Point](#_point)**

#### invertX

Returns a copy with x inverted

Returns **[\_Point](#_point)**

#### invertY

Returns a copy with y inverted

Returns **[\_Point](#_point)**

#### invert

Returns a copy with both x and y inverted

Returns **[\_Point](#_point)**

### Point

**Parameters**

-   `x` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
-   `y` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
import { Point } from "bear.js"
```

Returns **[\_Point](#_point)**

### \_Rectangle

Rectangle class

**Parameters**

-   `$0` **any**
    -   `$0.position`  
    -   `$0.width`  
    -   `$0.height`  

#### position

Rectangle top left position

Type: [\_Point](#_point)

#### width

Rectangle's width

Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### height

Rectangle's height

Type: [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

#### left

x position at the left edge

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### right

x position at the right edge

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### top

y position at the top edge

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### bottom

y position at the bottom edge

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### center

Returns a copy with its x value changed

Returns **[\_Point](#_point)**

#### intersects

Checks if the rectangle intersect with the provided one

**Parameters**

-   `otherRectangle` **[\_Rectangle](#_rectangle)**

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

### Rectangle

**Parameters**

-   `rectangleArgs` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
    -   `rectangleArgs.position` **[\_Point](#_point)** Upper left position of the rectangle
    -   `rectangleArgs.width` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Width of the rectangle
    -   `rectangleArgs.height` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Height of the rectangle

**Examples**

```javascript
import { Rectangle } from "bear.js"
```

Returns **[\_Rectangle](#_rectangle)**

### sprite

Used in the render function

**Parameters**

-   `spriteOptions` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
    -   `spriteOptions.position` **[\_Point](#_point)**
    -   `spriteOptions.anchor` **[\_Point](#_point)**  (optional, default `Point(0,0)`)
    -   `spriteOptions.texture` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** name of loaded texture

**Examples**

```javascript
import { sprite } from "bear.js"
```

Returns **SpriteObject**

### text

Used in the render function

**Parameters**

-   `textOptions` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
    -   `textOptions.position` **[\_Point](#_point)**
    -   `textOptions.anchor` **[\_Point](#_point)**  (optional, default `Point(0,0)`)
    -   `textOptions.content` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Text to be displayed
    -   `textOptions.style` **PIXI.TextStyle** <http://pixijs.download/release/docs/PIXI.TextStyle.html>

**Examples**

```javascript
import { text } from "bear.js"
```

Returns **TextObject**