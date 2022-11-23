import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import RegisterSection from './pages/RegisterSection'
import LoginSection from './pages/LoginSection'
function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<RegisterSection />} />
                <Route path="/login" element={<LoginSection />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/app" element={<Aqsam />}>
                    <Route path='/' />
                </Route> */}
            </Routes>
        </>

    )
}

export default Router