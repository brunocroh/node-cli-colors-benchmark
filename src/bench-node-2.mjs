import { Suite } from "bench-node"
import util from "node:util"
import ansiColors from "ansi-colors"
import ansis from "ansis"
import chalk from "chalk"
import * as colorette from "colorette"
import picocolors from "picocolors"

const suite = new Suite()

const config = {
  minSamples: 1_000,
}

suite.add("util.styleText", config, () => {
  util.styleText("red", util.styleText("bold", "foo"))
})

suite.add("util.styleText arr", config, () => {
  util.styleText(["red", "bold"], "foo")
})

suite.add("ansi-colors", config, () => {
  ansiColors.red.bold("foo")
})

suite.add("ansis", config, () => {
  ansis.red.bold("foo")
})
suite.add("chalk", config, () => {
  chalk.red.bold("foo")
})

suite.add("colorette", config, () => {
  colorette.red(colorette.bold("foo"))
})
suite.add("picocolors", config, () => {
  picocolors.red(picocolors.bold("foo"))
})

suite.run()
