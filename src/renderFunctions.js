// @flow

import { _Point } from "./Point"

type SharedGameObjectProps = {
  position: _Point,
  anchor?: _Point
}

type SpriteOptions = SharedGameObjectProps & {
  texture: string
}

export type SpriteObject = SpriteOptions & {
  type: "sprite"
}

type TextOptions = SharedGameObjectProps & {
  content: string,
  style?: any
}

export type TextObject = TextOptions & {
  type: "text"
}

export type GameObject = SpriteObject | TextObject

/**
 * Used in the render function
 * @param {Object} spriteOptions
 * @param {_Point} spriteOptions.position
 * @param {_Point} [spriteOptions.anchor=Point(0, 0)]
 * @param {string} spriteOptions.texture name of loaded texture
 * @example
 * import { sprite } from "bear.js"
 */
export function sprite(spriteOptions: SpriteOptions): SpriteObject {
  return {
    ...spriteOptions,
    type: "sprite"
  }
}

/**
 * Used in the render function
 * @param {Object} textOptions
 * @param {_Point} textOptions.position
 * @param {_Point} [textOptions.anchor=Point(0, 0)]
 * @param {string} textOptions.content Text to be displayed
 * @param {PIXI.TextStyle} textOptions.style http://pixijs.download/release/docs/PIXI.TextStyle.html
 * @example
 * import { text } from "bear.js"
 */
export function text(textOptions: TextOptions): TextObject {
  return {
    ...textOptions,
    type: "text"
  }
}
