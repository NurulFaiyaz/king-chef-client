import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Pages/Firebase/Firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosSecure = useAxiosSecure()

    // Create user by email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            setUser(currentUser)
            console.log("Current User", currentUser)
            if (currentUser)
                await axiosSecure.post(`/users/${currentUser?.email}`, {
                    name: currentUser?.displayName,
                    email: currentUser?.email,
                    image: currentUser?.photoURL,
                    verified: currentUser?.reloadUserInfo?.emailVerified,
                    timeStamp: currentUser?.metadata?.createdAt
                })
            setLoading(false)

        })
        return () => {
            return unSubscribe()
        }
    }, [axiosSecure])

    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        logOut,
        updateUserProfile
    }

    console.log(user)

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;