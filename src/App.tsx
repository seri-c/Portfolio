
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css"

function App() {

  return (
  <BrowserRouter basename="/Portfolio">
    

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
