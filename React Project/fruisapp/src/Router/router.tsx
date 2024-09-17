import React from 'react'
import Homepages from '../pages/homepages'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepages/>}></Route>
        </Routes>
      
    </div>
  )
}

export default Router
