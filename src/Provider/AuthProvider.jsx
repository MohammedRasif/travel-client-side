import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import PropsType from 'prop-types';
import auth from "../assets/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


  const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading , setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('observing current user inside useEffect of AuthProvider',currentUser)
            setLoading(false)
        }) ;
        return () =>{
            unSubscribe()
        }
    },[])

    const authInfo = {user,createUser,signInUser,logOut,loading,signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// AuthProvider.propsType = {
//     children:PropsType.node
// }