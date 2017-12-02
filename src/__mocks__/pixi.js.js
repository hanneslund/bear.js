function Sprite(texture) {
  this.texture = texture
}

function Text(content, style) {
  this.text = content
  this.style = style
}

function Application(options) {
  this.options = options
  this.ticker = {
    add(callback) {
      this.stepGame = callback
    }
  }
  this.stage = {
    children: [],
    addChild(texture) {
      this.children = this.children.concat(texture)
    },
    removeChild(texture) {
      this.children = this.children.filter(t => t !== texture)
    }
  }
}

class Loader {
  constructor() {
    this.textures = {}
  }

  on() {
    return this
  }

  add(textures) {
    textures.forEach(({ name, url }) => {
      this.textures[name] = { texture: url }
    })
    return this
  }

  load(callback) {
    callback(null, this.textures)
  }
}

export default {
  loaders: { Loader },
  Application,
  Text,
  Sprite
}
