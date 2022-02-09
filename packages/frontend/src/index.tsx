import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import CssBaseline from "@mui/material/CssBaseline"

import {
  ITodo,
} from '@projectkettle/shared/src/types'

const item: ITodo = {
  text: 'test',
  name: 'test',
  comment: 'test',
}

setInterval(() => {
  console.dir(item)
}, 1000)

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

