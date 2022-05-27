
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebaseinit';
import Loading from './Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [adminLoading, setAdminLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        fetch(`https://innovus-client.herokuapp.com/admin/users/${user?.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${(localStorage.getItem("accessToken"))}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.admin) {
                    setAdmin(true)
                    setAdminLoading(false)
                }
            })
    }, [user, admin])
    const location = useLocation()

    if (loading || adminLoading) {
        return <Loading type="spokes" color="black"></Loading>
    }
    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAdmin;