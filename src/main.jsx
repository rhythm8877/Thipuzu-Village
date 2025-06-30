import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

// Ensure *some* host element exists – works both with Vite (index.html has #root)
// and with the v0 preview (no index.html => we create it).
function getOrCreateRoot() {
  let container = document.getElementById("root")
  if (!container) {
    container = document.createElement("div")
    container.id = "root"
    document.body.appendChild(container)
  }
  return container
}

ReactDOM.createRoot(getOrCreateRoot()).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
