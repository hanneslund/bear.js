// @flow

import Point, { _Point } from "./Point"

type RectangleArgs = {
  position: _Point,
  width: number,
  height: number
}

/** Rectangle class */
export class _Rectangle {
  /** Rectangle top left position */
  position: _Point
  /** Rectangle's width */
  width: number
  /** Rectangle's height */
  height: number

  constructor({ position, width, height }: RectangleArgs) {
    this.position = position
    this.width = width
    this.height = height
  }

  /** x position at the left edge  */
  get left(): number {
    return this.position.x
  }

  /** x position at the right edge */
  get right(): number {
    return this.position.x + this.width
  }

  /** y position at the top edge */
  get top(): number {
    return this.position.y
  }

  /** y position at the bottom edge */
  get bottom(): number {
    return this.position.y + this.height
  }

  /** Returns a copy with its x value changed */
  get center(): _Point {
    return Point(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    )
  }

  /** Checks if the rectangle intersect with the provided one */
  intersects(otherRectangle: _Rectangle): boolean {
    return !(
      this.right < otherRectangle.left ||
      this.bottom < otherRectangle.top ||
      this.left > otherRectangle.right ||
      this.top > otherRectangle.bottom
    )
  }
}

/**
 * @param {Object}  rectangleArgs
 * @param {_Point} rectangleArgs.position Upper left position of the rectangle
 * @param {number} rectangleArgs.width Width of the rectangle
 * @param {number} rectangleArgs.height Height of the rectangle
 * @example
 * import { Rectangle } from "bear.js"
 */
export default (rectangleArgs: RectangleArgs): _Rectangle =>
  new _Rectangle(rectangleArgs)
