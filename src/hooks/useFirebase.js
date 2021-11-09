import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../components/Firebase/firebase.init";

initFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // GOOGLE Sign In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                console.log(error.message);;
            });
    }
    
    // USER State manage
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        googleSignIn
    }
}

export default useFirebase;