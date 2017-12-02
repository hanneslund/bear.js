// @flow

import Point, { _Point } from "./Point"

export type KeyboardState = {
  arrowsDirection: _Point,
  down: (code: string) => boolean,
  pressed: (code: string) => boolean,
  wasdDirection: _Point
}

export default function createKeyboardTracker() {
  let keysDown = []
  let keysPressed = []

  function getDirection({ left, up, right, down }) {
    const isDown = code => keysDown.includes(code)

    let xDir
    if (isDown(left) && !isDown(right)) {
      xDir = -1
    } else if (isDown(right) && !isDown(left)) {
      xDir = 1
    } else {
      xDir = 0
    }

    let yDir
    if (isDown(up) && !isDown(down)) {
      yDir = -1
    } else if (isDown(down) && !isDown(up)) {
      yDir = 1
    } else {
      yDir = 0
    }

    return Point(xDir, yDir)
  }

  document.addEventListener("keydown", ({ code }: KeyboardEvent) => {
    if (!keysDown.includes(code)) {
      keysDown = keysDown.concat(code)
    }
  })

  document.addEventListener("keyup", ({ code }: KeyboardEvent) => {
    if (!keysPressed.includes(code)) {
      keysPressed = keysPressed.concat(code)
    }
    keysDown = keysDown.filter(c => c !== code)
  })

  return function getKeyboardState(): KeyboardState {
    const down = [...keysDown]
    const pressed = keysPressed
    keysPressed = []

    return {
      arrowsDirection: getDirection({
        left: "ArrowLeft",
        up: "ArrowUp",
        right: "ArrowRight",
        down: "ArrowDown"
      }),
      wasdDirection: getDirection({
        left: "KeyA",
        up: "KeyW",
        right: "KeyD",
        down: "KeyS"
      }),
      down: code => down.includes(code),
      pressed: code => pressed.includes(code)
    }
  }
}
