import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import CssBaseline from "@mui/material/CssBaseline"

import {
  Thing,
} from '@projectkettle/shared/src/types'

import {
  MESSAGE,
} from '@projectkettle/shared/src/constants'

const item: Thing = {
  name: MESSAGE ? true : 10,
}

setInterval(() => {
  console.log(MESSAGE)
  console.dir(item)
}, 1000)

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

