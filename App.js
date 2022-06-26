import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Detail from "./Routes/Detail";
import Home from "/Users/ghboo/Desktop/code/restart/src/Routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router> 
  )
}

export default App;
