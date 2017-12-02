// @flow

import { game } from "../index"
import { sprite, text } from "../renderFunctions"
import Point from "../Point"
import { keyDown, keyUp } from "../util"

const node = {
  appendChild(view) {
    this.view = view
  }
}

test("Options gets passed to app", async () => {
  const options = { width: 100, height: 100, backgroundColor: 0xffffff }
  const app = await game({ options }, node)

  expect(options).toMatchObject(app.options)
})

test("Counting up", async () => {
  const app = await game(
    {
      state: 0,
      update: ({ state }) => state + 1,
      render: state => [
        text({
          position: Point(0, 0),
          content: state
        })
      ]
    },
    node
  )

  const step = app.ticker.stepGame
  const getText = () => app.stage.children[0].text

  step()
  expect(getText()).toBe(0)
  step()
  expect(getText()).toBe(1)
  step()
  expect(getText()).toBe(2)
})

test("Moving sprite", async () => {
  const app = await game(
    {
      state: Point(0, 0),
      update: ({ state, keyboard }) => {
        if (keyboard.down("KeyH")) {
          return Point(0, 0)
        }
        return state.add(keyboard.wasdDirection)
      },
      render: state => [
        sprite({
          position: state,
          texture: "monkey"
        })
      ],
      textures: [{ name: "monkey", url: "monkey.png" }]
    },
    node
  )

  const step = app.ticker.stepGame
  const getSprite = () => app.stage.children[0]

  step()
  expect(getSprite()).toMatchObject({ x: 0, y: 0 })
  keyDown("KeyD")
  keyDown("KeyW")
  step()
  expect(getSprite()).toMatchObject({ x: 1, y: -1 })
  keyUp("KeyW")
  step()
  expect(getSprite()).toMatchObject({ x: 2, y: -1 })

  keyDown("KeyH")
  step()
  expect(getSprite()).toMatchObject({ x: 0, y: 0 })
})
