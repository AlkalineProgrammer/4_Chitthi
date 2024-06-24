import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({auth}) => {
    auth(true)
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes