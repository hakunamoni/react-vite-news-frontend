import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  console.log("start");

  // const router = createBrowserRouter([]);

  return (
    <>
      <div className="flex w-screen bg-[#f2f2f2]">
        <Outlet />
      </div>
    </>
  )
}

export default App
