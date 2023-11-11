import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Navigate } from "react-router-dom"

const Private = () => {
    const { store, actions } = useContext(Context)



    useEffect(() => {
        actions.getUsers()

    }, []
    )
    return (

        <> {
            store.token == null ?
                <Navigate to={"/login"} /> :
                <>
                    <h1> Esta es la pagina privada</h1>
                    {store.users.map((item) => {
                        return (
                            <p>{item.email}</p>
                        )
                    })}
                </>
        }
        </>

    )
}

export default Private