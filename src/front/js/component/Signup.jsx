import React from "react"

const Signup = () => {




    return (
        <>

            <form>
                <label >Nombre</label>
                <input
                    type="text"
                    placeholder="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <label >Correo</label>
                <input
                    type="password"
                    placeholder="password"
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

export default Signup