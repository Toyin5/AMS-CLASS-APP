import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Hero from "../utils/Hero"
import "../styles/Hero.css"
function Home() {
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate();
    useEffect(() => {
        if (token) navigate("/app");
    }, [])

    return (
        <>
            <Header />
            <Hero />
            <Footer />
        </>
    )
}

export default Home