import { useEffect, useState } from "react";
import { getUsername } from "../API/login";
import { useNavigate } from "react-router-dom";


const getUsername = (token) => {
    const decoded = jwt_decode(token)
    console.log(decoded);
    return decoded.data.name
}

export const useLogin = () => {
    const navigate = useNavigate()

    const [userName, setUsername] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setUsername(getUsername(token))
        } else {
            navigate('/')
        }



    }, []);

    return userName
}