
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import './Login.css'



const Login = () => {
    const { signInUsingGoogle, registerNewUser, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, toggleLogin , verifyEmail , setUserName , isLogin , setError , setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const handleSigninUsingPassword = () => {
        registerNewUser()
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                verifyEmail();
                setUserName();
            })

            .catch(error => {
                setError(error.message)
            })

    } 

        return (
            <div className="m-5 login-form">
                <form onSubmit={handleRegistration}>
                    <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                    <br />
                    {!isLogin &&
                        <div className="row">
                            <div className="col-sm-10">
                                <input onBlur={handleNameChange} type="text" placeholder="Your Name" className="form-control" id="inputName" required />
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" placeholder="Password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onClick={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSigninUsingPassword} type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>

                    <div className="m-2">Or</div>
                    <button onClick={handleGoogleLogin} className="btn btn-warning">Google sign in</button>
                </form>
            </div>
        );
    };

    export default Login;