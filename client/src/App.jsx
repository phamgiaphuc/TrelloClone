import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/home/:boardId' element={<Board />} />
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App