import { styleText } from "node:util"

// Force colors even when piped
process.env.FORCE_COLOR = "1"

console.log(styleText(["red", "bgYellow"], "foo"))
await new Promise((resolve) => setTimeout(resolve, 10))
