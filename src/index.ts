const { Suite } = require("bench-node")
const { styletext } = require("node:util")

const suite = new Suite()

suite.add("Using styletext", () => {
  styletext("red", "foo")
})

suite.run()
