import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

function Login() {
    const [code, setCode] = useState("");
    const [pass, setPass] = useState(null);
    const [flag, setFlag] = useState("");
    const [message, setMessage] = useState("")
    const { setToken } = useToken();

    const navigate = useNavigate();

    const loginAuth = async () => {
        return await fetch("https://attendanceapi.vercel.app/api/course/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "code": code.toUpperCase(),
                "pass": pass
            })
        }
        ).then((result) => result.json())
            .then(data => {
                // if (result.status === 409) {
                //     setMessage(result.message);
                //     setFlag("is-warning")
                // }
                console.log(data)
                if (data.status === 200) {
                    //Set Token and Navigate
                    setFlag("is-success")
                    setMessage("Successfully registered! You'll will redirected to the app")
                    setToken(data.token)
                    localStorage.setItem(code, JSON.stringify({ "code": code, "lec": 1 }))
                    navigate("/app")
                }
                if (data.status === 404) {
                    setFlag("is-danger")
                    setMessage("Error!" + data.message)
                }

            }).catch((err) => {
                console.log(err)
                setFlag("is-danger")
                setMessage("Error! An error occurred")

            })
    }
    return (
        <div>
            <form class="box" onSubmit={(e) => e.preventDefault()}>
                <div className={"notification " + flag} >
                    <button class="delete" onClick={(e) => e.preventDefault()}></button>
                    {message}
                </div>
                <div class="field">
                    <label class="label">Course Code</label>
                    <div class="control">
                        <input class="input" type="name" placeholder="e.g. MAT101" onChange={(e) => setCode(e.target.value)} required />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="********" onChange={(e) => setPass(e.target.value)} required />
                    </div>
                </div>
                <button class="button is-primary" onClick={() => loginAuth()}>Sign in</button>
            </form>
        </div>
    )
}

export default Login