import { useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Users from './components/Users/Users'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
    
    
   
  )
}

export default App
