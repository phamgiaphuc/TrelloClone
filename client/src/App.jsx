import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '~/pages/Boards/_id'

function App() {
  return (
    <>
      <React.Fragment>
        {/**React Router DOM*/}
        <Routes>
          <Route path='/boards/:id' element={<Board />} />
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App