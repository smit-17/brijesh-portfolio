import { useState } from 'react'
import './App.css'
import profile from '../src/assets/Images/jd_banner.jpeg'

function App() {
  return (
    <>
      <div style={{ width: '100%' }}>
        <img src={profile} alt="Banner" style={{ width: '100%', height: '90vh' }} />
      </div>

    </>
  )
}

export default App
