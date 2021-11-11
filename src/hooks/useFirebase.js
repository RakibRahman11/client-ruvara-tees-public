import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../components/Firebase/firebase.init";

initFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Create Account (Email, Password)
    const createUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(name, email, 'POST')
                // setUser(user)
            })
            .catch((error) => {
            });
    }

    // User Sign In (Email, Password)
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    // GOOGLE Sign In
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            
    }

    // Sign Out the user
    const logOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        })

    }

    const saveUser = (displayName, email, method) => {
        const users = { displayName, email }
        // console.log(users);
        fetch('https://calm-harbor-77192.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then()
    }
    useEffect(() => {
        fetch(`https://calm-harbor-77192.herokuapp.com/users/${user.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

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
        admin,
        createUser,
        loginUser,
        googleSignIn,
        logOut
    }
}

export default useFirebase;