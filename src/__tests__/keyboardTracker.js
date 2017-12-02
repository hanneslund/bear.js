// @flow

import keyboardTracker from "../keyboardTracker"
import { keyDown, keyUp } from "../util"

let getKeyboardState
beforeEach(() => {
  getKeyboardState = keyboardTracker()
})

function testDirection(
  left: string,
  up: string,
  right: string,
  down: string,
  directionName: string
) {
  test(`${left} direction is correct`, () => {
    keyDown(left)
    expect(getKeyboardState()[directionName].x).toBe(-1)
    keyUp(left)
    expect(getKeyboardState()[directionName].x).toBe(0)
  })

  test(`${right} direction is correct`, () => {
    keyDown(right)
    expect(getKeyboardState()[directionName].x).toBe(1)
    keyUp(right)
    expect(getKeyboardState()[directionName].x).toBe(0)
  })

  test(`${left} & ${right} at the same time direction is correct`, () => {
    keyDown(left)
    keyDown(right)
    expect(getKeyboardState()[directionName].x).toBe(0)
    keyUp(right)
    expect(getKeyboardState()[directionName].x).toBe(-1)
    keyUp(left)
    expect(getKeyboardState()[directionName].x).toBe(0)

    keyDown(right)
    keyDown(left)
    expect(getKeyboardState()[directionName].x).toBe(0)
    keyUp(left)
    expect(getKeyboardState()[directionName].x).toBe(1)
    keyUp(right)
    expect(getKeyboardState()[directionName].x).toBe(0)
  })

  test(`${up} direction is correct`, () => {
    keyDown(up)
    expect(getKeyboardState()[directionName].y).toBe(-1)
    keyUp(up)
    expect(getKeyboardState()[directionName].y).toBe(0)
  })

  test(`${down} direction is correct`, () => {
    keyDown(down)
    expect(getKeyboardState()[directionName].y).toBe(1)
    keyUp(down)
    expect(getKeyboardState()[directionName].y).toBe(0)
  })

  test(`${up} & ${down} at the same time direction is correct`, () => {
    keyDown(up)
    keyDown(down)
    expect(getKeyboardState()[directionName].y).toBe(0)
    keyUp(down)
    expect(getKeyboardState()[directionName].y).toBe(-1)
    keyUp(up)
    expect(getKeyboardState()[directionName].y).toBe(0)

    keyDown(down)
    keyDown(up)
    expect(getKeyboardState()[directionName].y).toBe(0)
    keyUp(up)
    expect(getKeyboardState()[directionName].y).toBe(1)
    keyUp(down)
    expect(getKeyboardState()[directionName].y).toBe(0)
  })

  test("Recieved state doesnt mutate", () => {
    keyDown(left)
    const state = getKeyboardState()
    expect(state[directionName].x).toBe(-1)
    keyUp(left)
    expect(state[directionName].x).toBe(-1)
  })
}

describe("wasd direction", () => {
  testDirection("KeyA", "KeyW", "KeyD", "KeyS", "wasdDirection")
})

describe("arrows direction", () => {
  testDirection(
    "ArrowLeft",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "arrowsDirection"
  )
})

test("down keeps track of keys that are down and doesnt mutate", () => {
  let state = getKeyboardState()
  expect(state.down("KeyA")).toBe(false)
  expect(state.down("Esc")).toBe(false)

  keyDown("KeyA")
  expect(state.down("KeyA")).toBe(false)
  expect(state.down("Esc")).toBe(false)
  state = getKeyboardState()
  expect(state.down("KeyA")).toBe(true)
  expect(state.down("Esc")).toBe(false)

  keyDown("Esc")
  keyUp("KeyA")
  expect(state.down("KeyA")).toBe(true)
  expect(state.down("Esc")).toBe(false)
  state = getKeyboardState()
  expect(state.down("KeyA")).toBe(false)
  expect(state.down("Esc")).toBe(true)
})

test("pressed keeps track of keys that got pressed and doesnt mutate", () => {
  expect(getKeyboardState().pressed("KeyA")).toBe(false)
  keyDown("KeyA")
  expect(getKeyboardState().pressed("KeyA")).toBe(false)
  keyDown("KeyA")

  const state = getKeyboardState()
  expect(state.pressed("KeyA")).toBe(false)
  keyUp("KeyA")
  expect(state.pressed("KeyA")).toBe(false)

  expect(getKeyboardState().pressed("KeyA")).toBe(true)
  expect(getKeyboardState().pressed("KeyA")).toBe(false)
})
