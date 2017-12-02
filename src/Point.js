// @flow

/** Point class */
export class _Point {
  /** x position */
  x: number
  /** y position */
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  /** The length of the point */
  get length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /** Returns a copy with its x value changed */
  setX(x: number): _Point {
    return new _Point(x, this.y)
  }

  /** Returns a copy with its y value changed */
  setY(y: number): _Point {
    return new _Point(this.x, y)
  }

  /** Returns a normalized copy */
  normalize(): _Point {
    return this.divide(new _Point(this.length, this.length))
  }

  /** Returns a normalized copy pointing towards the provided point */
  directionTo(otherPoint: _Point): _Point {
    return otherPoint.subtract(this).normalize()
  }

  /**
   * Returns a copy subtracted by the provided point
   * @param {_Point} otherPoint
   */
  add({ x, y }: _Point): _Point {
    return new _Point(this.x + x, this.y + y)
  }

  /**
   * Returns a copy subtracted by the provided point
   * @param {_Point} otherPoint
   */
  subtract({ x, y }: _Point) {
    return new _Point(this.x - x, this.y - y)
  }

  /**
   * Returns a copy multiplied by the provided point
   * @param {_Point} otherPoint
   */
  multiply({ x, y }: _Point) {
    return new _Point(this.x * x, this.y * y)
  }

  /**
   * Returns a copy divided by the provided point
   * @param {_Point} otherPoint
   */
  divide({ x, y }: _Point) {
    return new _Point(this.x / x, this.y / y)
  }

  /** Returns a copy with x clamped between the provided min and max */
  clampX(min: number, max: number): _Point {
    return new _Point(Math.max(min, Math.min(max, this.x)), this.y)
  }

  /** Returns a copy with y clamped between the provided min and max */
  clampY(min: number, max: number): _Point {
    return new _Point(this.x, Math.max(min, Math.min(max, this.y)))
  }

  /** Returns a copy with x inverted */
  invertX(): _Point {
    return this.multiply(new _Point(-1, 1))
  }

  /** Returns a copy with y inverted */
  invertY(): _Point {
    return this.multiply(new _Point(1, -1))
  }

  /** Returns a copy with both x and y inverted */
  invert(): _Point {
    return this.multiply(new _Point(-1, -1))
  }
}

/**
 * @example
 * import { Point } from "bear.js"
 */
export default (x: number, y: number): _Point => new _Point(x, y)
