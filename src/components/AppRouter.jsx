import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import RegisterStudent from './pages/Register'
import Attendance from './pages/Attendance'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/app" element={<DashBoard />} />
                <Route path='/app/register' element={<RegisterStudent />} />
                <Route path='/app/profile' element={<Profile />} />
                <Route path='/app/attendance' element={<Attendance />} />
                <Route path='/app/settings' element={<Settings />} />

            </Routes>
        </>

    )
}

export default AppRouter