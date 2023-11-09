import React, { useState, useContext } from "react"
import { Context } from "../store/appContext"



const Login = () => {
    const { actions } = useContext(Context)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        event.preventDefault()
        setUser({
            ...user,
            [event.target.name]: event.target.value

        })

    }

    const handleLogin = async (event) => {
        event.preventDefault()
        //let result = await actions.login(user)

    }

    return (
        <>

            <form onSubmit={handleLogin}>
                <label >Email</label>
                <input
                    type="text"
                    placeholder="E-mail"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <label >Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <button>Login</button>


            </form>


        </>


    )
}
export default Login 