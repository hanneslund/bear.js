// @flow

import PIXI from "pixi.js"
import type { GameObject } from "./renderFunctions"
import Point from "./Point"

export default function stageUpdater(
  stage: PixiContainer,
  textures: LoadedTextures
) {
  return function updateStage(gameObjects: GameObject[]) {
    const onStage = stage.children.map(stagedObj => ({
      stagedObj,
      keep: false
    }))

    const getChild = ctor =>
      onStage.find(
        child =>
          !child.keep &&
          Object.getPrototypeOf(child.stagedObj) === ctor.prototype
      )

    const getTexture = name => textures[name].texture
    gameObjects.forEach(gameObject => {
      let obj = {}
      if (gameObject.type === "sprite") {
        const child = getChild(PIXI.Sprite)
        if (child) {
          obj = child.stagedObj
          obj.texture = getTexture(gameObject.texture)
          child.keep = true
        } else {
          obj = new PIXI.Sprite(getTexture(gameObject.texture))
          stage.addChild(obj)
        }
      } else if (gameObject.type === "text") {
        const child = getChild(PIXI.Text)
        if (child) {
          obj = child.stagedObj
          obj.text = gameObject.content
          obj.style = gameObject.style
          child.keep = true
        } else {
          obj = new PIXI.Text(gameObject.content, gameObject.style)
          stage.addChild(obj)
        }
      }

      const { position: { x, y }, anchor = Point(0, 0) } = gameObject
      obj.anchor = {
        x: anchor.x,
        y: anchor.y
      }
      obj.x = x
      obj.y = y
    })

    onStage
      .filter(({ keep }) => !keep)
      .forEach(({ stagedObj }) => stage.removeChild(stagedObj))
  }
}
