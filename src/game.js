// @flow

import PIXI from "pixi.js"

import keyboardTracker from "./keyboardTracker"
import stageUpdater from "./stageUpdater"
import type { GameObject } from "./renderFunctions"
import type { KeyboardState } from "./keyboardTracker"

type TexturesURLs = Array<{ name: string, url: string }>
type GameOptions = {
  width?: number,
  height?: number,
  backgroundColor?: number
}

export type Game = {
  state: any,
  update: ({ elapsed: number, state: any, keyboard: KeyboardState }) => any,
  render: any => Array<GameObject>,
  textures: TexturesURLs,
  options?: GameOptions
}

function loadTextures(textures): Promise<LoadedTextures> {
  if (textures.length === 0) return Promise.resolve({})
  return new Promise((res, rej) =>
    new PIXI.loaders.Loader()
      .add(textures)
      .on("error", rej)
      .load((loader, texturesArr) => {
        res(texturesArr)
      })
  )
}

/**
 * Game init function
 * @param {Object} GameArgs
 * @param {any} GameArgs.state Initial state of the game
 * @param {function} GameArgs.update Returns a new state each frame
 * @param {function} GameArgs.render Returns an array of sprite/text each frame
 * @param {Array<{ name: string, url: string }>} GameArgs.textures List of textures that will be loaded before the game starts
 * @param {Object} GameArgs.options Game options
 * @param {number} [GameArgs.options.width=500] Game width
 * @param {number} [GameArgs.options.height=500] Game height
 * @param {number} [GameArgs.options.backgroundColor=0x111111] Game background color
 * @param {Node} landingpad
 * @example
 * import { game } from "bear.js"
 */
export default function game(
  {
    state: initialState,
    update,
    render,
    textures = [],
    options: { width = 500, height = 500, backgroundColor = 0x111111 } = {}
  }: Game,
  landingpad: Node
): Promise<PIXI.Application> {
  return new Promise((res, rej) => {
    loadTextures(textures)
      .then(loadedTextures => {
        const app = new PIXI.Application({ width, height, backgroundColor })
        landingpad.appendChild(app.view)

        const updateStage = stageUpdater(app.stage, loadedTextures)
        const getKeyboardState = keyboardTracker()

        let state
        app.ticker.add(elapsed => {
          state =
            typeof state === "undefined"
              ? initialState
              : update({ elapsed, state, keyboard: getKeyboardState() })
          updateStage(render(state))
        })
        res(app)
      })
      .catch(rej)
  })
}
