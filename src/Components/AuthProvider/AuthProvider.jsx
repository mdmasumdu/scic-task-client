/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase.config";



export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
const googleprovider = new GoogleAuthProvider();

const login =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const registera =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

 const googlelogin =()=>{
    setLoading(true)
        return signInWithPopup(auth,googleprovider)
        
        
    }


    const updateprofilea =(name,photo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
       })
    }


    const logout =()=>{
       return signOut(auth)
    }

useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)

    })

    return ()=>{
        unsubscribe();
    }
},[])

    const authinfo ={
        googlelogin,
        registera,
        updateprofilea,
        login,
        user,
        loading,
        logout 
    }


    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;