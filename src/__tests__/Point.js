// @flow

import Point, { _Point } from "../Point"

test("Constructor values are correct", () => {
  const x = 123
  const y = -321
  const point = Point(x, y)
  expect(point).toBeInstanceOf(_Point)
  expect(point.x).toBe(x)
  expect(point.y).toBe(y)
})

test("SetX returns correct point", () => {
  expect(Point(20, 20).setX(100)).toEqual(Point(100, 20))
})

test("SetY returns correct point", () => {
  expect(Point(20, 20).setY(100)).toEqual(Point(20, 100))
})

test("Add returns correct point", () => {
  const oldPoint = Point(10, -20)
  const addedPoint = Point(123, -50)
  const newPoint = oldPoint.add(addedPoint)
  expect(newPoint.x).toBe(oldPoint.x + addedPoint.x)
  expect(newPoint.y).toBe(oldPoint.y + addedPoint.y)
})

test("Subtract returns correct point", () => {
  const oldPoint = Point(10, -20)
  const subtractedPoint = Point(123, -50)
  const newPoint = oldPoint.subtract(subtractedPoint)
  expect(newPoint.x).toBe(oldPoint.x - subtractedPoint.x)
  expect(newPoint.y).toBe(oldPoint.y - subtractedPoint.y)
})

test("Multiply returns correct point", () => {
  const oldPoint = Point(5, 10)
  const multipliedPoint = Point(5, 10)
  const newPoint = oldPoint.multiply(multipliedPoint)
  expect(newPoint.x).toBe(oldPoint.x * multipliedPoint.x)
  expect(newPoint.y).toBe(oldPoint.y * multipliedPoint.y)
})

test("Divide returns correct point", () => {
  const oldPoint = Point(10, 20)
  const dividerPoint = Point(2, 4)
  const newPoint = oldPoint.divide(dividerPoint)
  expect(newPoint.x).toBe(oldPoint.x / dividerPoint.x)
  expect(newPoint.y).toBe(oldPoint.y / dividerPoint.y)
})

test("ClampX returns correct point", () => {
  const min = 10
  const middle = 15
  const max = 20
  const point1 = Point(middle, 0).clampX(min, max)
  const point2 = Point(-min, 0).clampX(min, max)
  const point3 = Point(max * 2, 0).clampX(min, max)
  expect(point1.x).toBe(middle)
  expect(point2.x).toBe(min)
  expect(point3.x).toBe(max)
})

test("ClampY returns correct point", () => {
  const min = 10
  const middle = 15
  const max = 20
  const point1 = Point(0, middle).clampY(min, max)
  const point2 = Point(0, -min).clampY(min, max)
  const point3 = Point(0, max * 2).clampY(min, max)
  expect(point1.y).toBe(middle)
  expect(point2.y).toBe(min)
  expect(point3.y).toBe(max)
})

test("Length returns correct point", () => {
  const x = 10
  const y = 15
  expect(Point(x, y).length).toBe(Math.sqrt(x * x + y * y))
})

test("Normalize returns correct point", () => {
  const x = 10
  const y = 15
  const point = Point(x, y)
  const { length } = point
  const normalizedPoint = point.normalize()
  expect(normalizedPoint).toEqual(point.divide(Point(length, length)))
})

test("DirectionTo returns correct point", () => {
  const x1 = 10
  const y1 = 20
  const x2 = 30
  const y2 = 40
  const point1 = Point(x1, y1)
  const point2 = Point(x2, y2)

  expect(point1.directionTo(point2)).toEqual(
    point2.subtract(point1).normalize()
  )
})

test("InvertX returns correct point", () => {
  expect(Point(10, 10).invertX()).toEqual(Point(-10, 10))
})

test("InvertY returns correct point", () => {
  expect(Point(10, 10).invertY()).toEqual(Point(10, -10))
})

test("Invert returns correct point", () => {
  expect(Point(10, 10).invert()).toEqual(Point(-10, -10))
})
