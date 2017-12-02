import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import uglify from "rollup-plugin-uglify"

import pkg from "./package.json"

export default [
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd"
    },
    name: "pixiram",
    plugins: [
      resolve(),
      babel({
        exclude: ["node_modules/**"]
      }),
      commonjs(),
      uglify()
    ]
  },
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"]
      })
    ]
  }
]
