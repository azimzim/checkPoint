import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import HelloMessage from './components/HelloMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloMessage />} />
        <Route path="/hello" element={<HelloMessage />} />
      </Routes>
    </Router>
    
    
   
  )
}

export default App
