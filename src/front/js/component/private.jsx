import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Navigate } from "react-router-dom"

const Private = () => {
    const { store } = useContext(Context)



    return (

        <> {
            store.token == null ?
                <Navigate to={"/login"} /> :
                <h1> Esta es la lista de usuarios</h1>
        }
        </>

    )
}

export default Private