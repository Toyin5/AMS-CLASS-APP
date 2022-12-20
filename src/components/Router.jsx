import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import RegisterSection from './pages/RegisterSection'
import LoginSection from './pages/LoginSection'
import DashBoard from './pages/DashBoard'
import RegisterStudent from './pages/Register'
import Attendance from './pages/Attendance'
import Profile from './pages/Profile'
import Error from './pages/Error'
function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<RegisterSection />} />
                <Route path="/login" element={<LoginSection />} />
                <Route path="/about" element={<About />} />
                <Route path="/app" element={<DashBoard />} />
                <Route path='/app/register' element={<RegisterStudent />} />
                <Route path='/app/profile' element={<Profile />} />
                <Route path='/app/attendance' element={<Attendance />} />
                <Route path='*' element={<Error />} />


            </Routes>
        </>

    )
}

export default Router