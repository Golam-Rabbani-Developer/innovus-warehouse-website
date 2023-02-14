import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.user?.email;

    useEffect(() => {
        fetch(`https://proud-lime-bluefish.cyclic.app/users/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("accessToken", data.token)
                    setToken(data.token)
                }

            })
    }, [user, email])

    return {
        token,
        setToken
    }
}

export default useToken;