import {signOut, onAuthStateChange, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";

export const LoginContext = createContext()

export const LoginProvider = ({children}) =>{
    const [user, setUser] = useState({
        email: null, 
        logged: false, 
        uid: null
    })


const googleLogin = () =>{
    signInWithPopup(auth, provider)
    .then((result) =>{
        console.log(result)
    })
}

const login = (values) =>{
    signInWithEmailAndPassword (auth, values.email, values.password)
    .catch((err) => alert ('El usuario o contraseña son incorrectos'))
}

const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .catch((err) => alert('Revisar los datos ingresados'))
}

const logout = () =>{
    signOut(auth)
        .then(() =>{
            setUser({
                email: null,
                logged: false,
                uid: null
            })
        })
}

useEffect(() =>{
    onAuthStateChange(auth, (user)=>{
        if (user){
            console.log(user)
            setUser({
                email: user.email,
                logged: true,
                uid: user.uid
            })
        }else{
            logout()
        }
    })
}, [])

return (
    <LoginContext.Provider value={{
        user, register, login, logout, googleLogin
    }}>
        {children}
    </LoginContext.Provider>
)

}