import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    const [cName, setCName] = useState("");
    const [cCode, setCCode] = useState("");
    const [pass, setPass] = useState(null);
    const [lname, setlname] = useState("Anonymous");
    const [message, setMessage] = useState("");
    const [flag, setFlag] = useState("");
    const navigate = useNavigate();


    const registerAuth = async () => {
        return await fetch("https://attendanceapi.vercel.app/api/register/course", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "name": cName,
                "code": cCode.toUpperCase(),
                "password": pass,
                "lecturer_name": lname
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
                    setMessage(data.message + ". You will be directed to login");
                    setFlag("is-success")
                    console.log(data)
                    setTimeout(() => {
                        navigate("/login")
                    }, 2000);
                }
                if (data.code ===
                    11000) {
                    setMessage("Course has been registered!");
                    setFlag("is-warning")
                }

            }).catch((err) => {
                console.log(err)
                setMessage("An Error occured");
                setFlag("is-danger");
            })
    }



    return (
        <div>
            <form class="box" onSubmit={(e) => e.preventDefault()}>
                <div className={"notification " + flag}>
                    <button class="delete" onClick={(e) => e.preventDefault()}></button>
                    {message}
                </div>
                <div class="field">
                    <label class="label">Course Name</label>
                    <div class="control">
                        <input class="input" type="name" placeholder="e.g. Calculus" onChange={(e) => setCName(e.target.value)} required />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Course Code</label>
                    <div class="control">
                        <input class="input" type="name" placeholder="e.g. MAT101" onChange={(e) => setCCode(e.target.value)} required />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Lecturer Name</label>
                    <div class="control">
                        <input class="input" type="name" placeholder="DEFAULT `Anonymous`" onChange={(e) => setlname(e.target.value)} />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="********" onChange={(e) => setPass(e.target.value)} required />
                    </div>
                </div>
                <button class="button is-primary" onClick={() => registerAuth()}>Sign up</button>
            </form>
        </div>
    )
}

export default Register