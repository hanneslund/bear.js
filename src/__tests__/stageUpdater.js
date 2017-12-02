// @flow

import PIXI from "pixi.js"
import { sprite, text } from "../renderFunctions"
import Point from "../Point"
import createStageUpdater from "../stageUpdater"

const textures = {
  monkey: { texture: "monkeytexture" },
  bunny: { texture: "bunnytexture" }
}

let stage
let updateStage
beforeEach(() => {
  ;({ stage } = new PIXI.Application())
  updateStage = createStageUpdater(stage, textures)
})

describe("Sprite", () => {
  test("can be added", () => {
    const x1 = 10
    const y1 = 20
    const texture = "bunny"
    const anchor = Point(0.5, 0.5)

    const x2 = 33
    const y2 = 150
    const texture2 = "monkey"

    updateStage([
      sprite({ position: Point(x1, y1), texture, anchor }),
      sprite({ position: Point(x2, y2), texture: texture2 })
    ])

    expect(stage.children[0]).toEqual({
      x: x1,
      y: y1,
      anchor,
      texture: textures[texture].texture
    })
    expect(stage.children[1]).toEqual({
      x: x2,
      y: y2,
      anchor: { x: 0, y: 0 },
      texture: textures[texture2].texture
    })
  })

  test("updates correctly", () => {
    let x = 10
    let y = 10
    let texture = "monkey"
    let anchor = Point(0.2, 0.5)

    updateStage([sprite({ position: Point(x, y), texture, anchor })])

    expect(stage.children[0]).toEqual({
      x,
      y,
      anchor,
      texture: textures[texture].texture
    })

    x = 25
    y = 55
    texture = "bunny"
    anchor = Point(0.7, -1)

    updateStage([sprite({ position: Point(x, y), texture, anchor })])

    expect(stage.children[0]).toEqual({
      x,
      y,
      anchor,
      texture: textures[texture].texture
    })
  })

  test("can be removed", () => {
    expect(stage.children.length).toBe(0)
    updateStage([sprite({ position: Point(10, 20), texture: "bunny" })])
    expect(stage.children.length).toBe(1)
    updateStage([
      sprite({ position: Point(10, 20), texture: "bunny" }),
      sprite({ position: Point(10, 20), texture: "bunny" })
    ])
    expect(stage.children.length).toBe(2)
    updateStage([])
    expect(stage.children.length).toBe(0)
  })
})

describe("Text", () => {
  test("can be added", () => {
    const x1 = 10
    const y1 = 20
    const content = "Dummy text"
    const style = { fontFamily: "Arial", fontSize: 24 }
    const anchor = Point(0.5, 0.5)

    const x2 = 33
    const y2 = 150
    const content2 = "Dummy text 2"
    const style2 = { fontFamily: "Robot", fontSize: 16 }

    updateStage([
      text({ position: Point(x1, y1), content, style, anchor }),
      text({ position: Point(x2, y2), content: content2, style: style2 })
    ])

    expect(stage.children[0]).toEqual({
      x: x1,
      y: y1,
      anchor,
      text: content,
      style
    })

    expect(stage.children[1]).toEqual({
      x: x2,
      y: y2,
      anchor: { x: 0, y: 0 },
      text: content2,
      style: style2
    })
  })

  test("updates correctly", () => {
    let x = 10
    let y = 10
    let content = "Dummy content"
    let style = { fontFamily: "Arial", fontSize: 24 }
    let anchor = Point(0.2, 0.7)

    updateStage([text({ position: Point(x, y), content, style, anchor })])
    expect(stage.children[0]).toEqual({
      x,
      y,
      anchor,
      text: content,
      style
    })

    x = 25
    y = 55
    content = "New dummy content"
    style = { fontFamily: "Robot", fontSize: 16 }
    anchor = Point(2, -1)

    updateStage([text({ position: Point(x, y), content, style, anchor })])
    expect(stage.children[0]).toEqual({
      x,
      y,
      anchor,
      text: content,
      style
    })
  })

  test("can be removed", () => {
    expect(stage.children.length).toBe(0)
    updateStage([text({ position: Point(20, 10), content: "Dummy content" })])
    expect(stage.children.length).toBe(1)
    updateStage([
      text({ position: Point(50, 60), content: "Dummy content" }),
      text({ position: Point(10, 80), content: "Dummy content" })
    ])
    expect(stage.children.length).toBe(2)
    updateStage([])
    expect(stage.children.length).toBe(0)
  })
})
