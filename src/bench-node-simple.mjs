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

suite.add("ansi-colors", config, () => {
  ansiColors.red("foo")
})

suite.add("ansis", config, () => {
  ansis.red("foo")
})
suite.add("chalk", config, () => {
  chalk.red("foo")
})

suite.add("colorette", config, () => {
  colorette.red("foo")
})
suite.add("picocolors", config, () => {
  picocolors.red("foo")
})

suite.add("util.styleText", config, () => {
  util.styleText("red", "foo")
})

suite.run()
