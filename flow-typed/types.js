// @flow

declare type PixiContainer = {
  addChild(obj: any): void,
  removeChild(obj: any): void,
  children: any[]
}

declare type LoadedTextures = {
  [key: string]: { texture: any }
}
