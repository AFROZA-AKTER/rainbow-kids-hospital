import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile , sendEmailVerification } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading , setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        /* login jokhon successfull hoy tokhon then er part ta kaj kore */
         
    }

    const registerNewUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email ,password)
    }

    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })

      .catch(error => {
        setError(error.message)
      })
  }


    const handleNameChange = e => {
        setName(e.target.value)
     }
  

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
          setError('password should be at least 6 characters')
          return;
        }
    
        if (!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)) {
          setError('password should be at least 1 special character')
          return;
        }
    
        isLogin ? processLogin(email, password) : registerNewUser(email, password)
    
      }

      
  const setUserName = () =>{
    updateProfile(auth.currentUser , {displayName: name}) 
    .then(result => {

    })
  }

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result)
      })
  }

    const logOut = () => {
      setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    // observe user auth state change.
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [])

    return {
        user,
        name,
        error,
        isLogin,
        isLoading,
        signInUsingGoogle,
        registerNewUser,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleRegistration,
        setUserName,
        verifyEmail,
        setError,
        setIsLoading,
        logOut
    }
}

export default useFirebase;