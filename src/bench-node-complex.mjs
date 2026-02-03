import { Suite } from "bench-node"
import { styleText } from "node:util"
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
  styleText(
    "blue",
    styleText(
      "cyan",
      styleText(
        "red",
        styleText(
          "yellow",
          styleText(
            "magenta",
            styleText("bgBlack", styleText("bold", styleText("italic", "foo"))),
          ),
        ),
      ),
    ),
  )
})

suite.add("util.styleText arr", config, () => {
  styleText(["blue", "cyan", "yellow", "magenta", "bgBlack", "bold", "italic"], "foo")
})

suite.add("ansi-colors", config, () => {
  ansiColors.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
})

suite.add("ansis", config, () => {
  ansis.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
})
suite.add("chalk", config, () => {
  chalk.bgBlack.magenta.yellow.red.cyan.blue.bold.italic("foo")
})

suite.add("colorette", config, () => {
  colorette.bgBlack(
    colorette.magenta(
      colorette.yellow(
        colorette.red(
          colorette.cyan(colorette.blue(colorette.bold(colorette.italic("foo")))),
        ),
      ),
    ),
  )
})
suite.add("picocolors", config, () => {
  picocolors.bgBlack(
    picocolors.magenta(
      picocolors.yellow(
        picocolors.red(
          picocolors.cyan(picocolors.blue(picocolors.bold(picocolors.italic("foo")))),
        ),
      ),
    ),
  )
})

suite.run()
