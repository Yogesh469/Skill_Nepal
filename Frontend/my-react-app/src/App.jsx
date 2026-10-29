import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Roadmap from './Pages/Roadmap'
import ResumeAnal from './Pages/ResumeAnal'
import InterviewPrep from './Pages/InterviewPrep'
import Pricing from './Pages/Pricing'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Routes ,Route } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/resume-analyzer" element={<ResumeAnal />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
