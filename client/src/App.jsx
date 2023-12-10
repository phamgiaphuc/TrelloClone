import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
import Home from '~/pages/Home/Home'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import Contacts from '~/pages/Contacts/Contacts'
import NotFoundComponent from '~/pages/Auth/NotFound'

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/boards/:boardId' element={<Board />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFoundComponent />} />
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App