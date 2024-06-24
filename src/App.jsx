import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './routes/PrivateRoutes'
import Room from './views/Room'
import Profile from './views/Profile'
import Home from './views/Home'
import Layout from './routes/Layout'

function App() {
  const [isValid, setIsValid] = useState(false)
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {isValid && <Route element={<PrivateRoutes auth={(data)=> setIsValid(data)} />}>
              <Route index path='/' element={<Room />} />
              <Route path='/profile' element={<Profile />} />
            </Route>}
            <Route index path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App