import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebaseinit"

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState("")
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
                }
            })
    }, [user, admin])
    return {
        admin
    }
}

export default useAdmin;