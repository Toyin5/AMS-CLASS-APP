import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../utils/Hero'
function Home() {
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate();
    const style = {
        "width": "100%",
        "height": "500px"
    }
    useEffect(() => {
        if (token) navigate("/app");
    }, [])

    return (
        <div>
            <div style={style} className='main content has-text-centered'>
                <Hero className="main content has-text-centered hero" />
            </div>
        </div>
    )
}

export default Home