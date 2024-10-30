import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import MeetUs from "./Pages/MeetUs"
import Artists from "./Pages/Artists"

function App() {

  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>

          <Route path="/meet-us" Component={MeetUs}/>

          <Route path="meet-us/artists" Component={Artists}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
