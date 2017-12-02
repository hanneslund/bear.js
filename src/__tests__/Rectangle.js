// @flow

import Rectangle, { _Rectangle } from "../Rectangle"
import Point from "../Point"

test("Constructor values are correct", () => {
  const args = { position: Point(15, 30), width: 150, height: 300 }
  const rect = Rectangle(args)
  expect(rect).toBeInstanceOf(_Rectangle)
  expect(rect).toMatchObject(args)
})

test("Getters returns correct values", () => {
  const x = 10
  const y = 20
  const width = 15
  const height = 30

  const rect = Rectangle({
    position: Point(x, y),
    width,
    height
  })

  expect(rect.left).toBe(x)
  expect(rect.right).toBe(x + width)
  expect(rect.top).toBe(y)
  expect(rect.bottom).toBe(y + height)

  expect(rect.center).toEqual(Point(x + width / 2, y + height / 2))
})

test("Intersect works correctly", () => {
  const rect = (x, y) =>
    Rectangle({ position: Point(x, y), width: 10, height: 10 })

  expect(rect(0, 0).intersects(rect(10.1, 0))).toBe(false)
  expect(rect(0, 0).intersects(rect(10, 0))).toBe(true)
  expect(rect(0, 0).intersects(rect(9, 0))).toBe(true)

  expect(rect(0, 0).intersects(rect(0, 10.1))).toBe(false)
  expect(rect(0, 0).intersects(rect(0, 10))).toBe(true)
  expect(rect(0, 0).intersects(rect(0, 9))).toBe(true)
})
