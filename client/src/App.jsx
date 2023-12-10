import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '~/pages/Boards/_id'
import Home from '~/pages/Home/Home'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import Contacts from '~/pages/Contacts/Contacts'
import NotFoundComponent from '~/pages/Auth/NotFound'
import { ROUTE_BOARD_DETAILS, ROUTE_CONTACTS, ROUTE_GLOBAL, ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER } from '~/constants/routes'

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path={ROUTE_HOME} element={<Home />} />
          <Route path={ROUTE_BOARD_DETAILS} element={<Board />} />
          <Route path={ROUTE_LOGIN} element={<Login />} />
          <Route path={ROUTE_REGISTER} element={<Register />} />
          <Route path={ROUTE_CONTACTS} element={<Contacts />} />
          <Route path={ROUTE_GLOBAL} element={<NotFoundComponent />} />
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App