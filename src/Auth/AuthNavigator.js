import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom';

const AuthNavigator = () => {
    const {isLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        !isLoggedIn ? navigate("/login") : null;
    },[])
 
}

export default AuthNavigator