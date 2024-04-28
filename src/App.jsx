import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
