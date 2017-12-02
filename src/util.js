// @flow

const keyEvent = (event: string) => (code: string) => {
  document.dispatchEvent(new KeyboardEvent(event, { code }))
}

export const keyDown = keyEvent("keydown")
export const keyUp = keyEvent("keyup")
