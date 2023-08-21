import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './Pages'
import { Header, Main } from './UI'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create-post' element={<CreatePost />}></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App