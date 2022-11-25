import React, { useState, useEffect } from "react";
import { useNavigate, Link, useMatch } from 'react-router-dom'

export default function Login() {
    const [isRegister, setIsRegister] = useState(false)
    const [businessID, setBusinessID] = useState(false);
    const [emali, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);

    const navigate = useNavigate()

    const onBusinessIDChange = (e) => {
        setBusinessID(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onFirstnameChange = (e) => {
        setFirstname(e.target.value)
    }

    const onLastnameChange = (e) => {
        setLastname(e.target.value)
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const onPassword2Change = (e) => {
        setPassword(e.target.value)
    }

    function handleSignup(e) {
        navigate("/profile");
        window.location.reload();
    }

    function handleLogin(e) {
        e.preventDefault();

        navigate("/profile");
        window.location.reload();

        // AuthService.login(username, password).then(
        //     () => {
        //         navigate("/profile");
        //         window.location.reload();
        //     },
        //     error => {
        //         console.log(error.message)
        //     }
        // );
    }

    return (
        <>
            <div style={{ width: '100vw', height: '50vh', top: '25vh', position: 'fixed', padding: '5rem' }} className={`d-flex align-items-center`}>
                <div style={{ width: '700px' }} className={`rounded mx-auto d-block`}>

                    {isRegister ? (
                        <>
                            <form className="row g-3 containerblur" style={{ alignContent: 'center', padding: '2rem', justifyContent: 'center' }} onSubmit={handleLogin} id='blurBackground'>
                                <h6 id='alertInput' style={{ display: 'none', color: 'red', paddingTop: '0' }}>Please enter your username and password.</h6>
                                <div className="col-11">
                                    <label htmlFor="username" className="form-label text-start" style={{}}>Business ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="businessname"
                                        placeholder='Enter business ID'
                                        onChange={onBusinessIDChange}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor="email" className="form-label text-start" style={{}}>Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder='Enter your username'
                                        onChange={onEmailChange}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor="firstname" className="form-label text-start" style={{}}>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        placeholder='Enter your username'
                                        onChange={onFirstnameChange}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor="lastname" className="form-label text-start" style={{}}>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastname"
                                        placeholder='Enter your username'
                                        onChange={onLastnameChange}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor="username" className="form-label text-start" style={{}}>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder='Enter your username'
                                        onChange={onUsernameChange}
                                    />
                                </div>
                                <div className="col-11" style={{ position: 'relative' }}>
                                    <label htmlFor="password" className="form-label text-start">Password</label>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control"
                                        name="password"
                                        placeholder='Enter your password'
                                        onChange={onPasswordChange}
                                        style={{ paddingRight: '12%' }}
                                    />
                                    <p style={{ position: 'absolute', top: '58%', right: '6%', cursor: 'pointer' }}
                                        onClick={() => {
                                            setPasswordShown(passwordShown ? false : true)
                                        }}>􀋮</p>
                                </div>
                                <div className="col-11" style={{ position: 'relative' }}>
                                    <label htmlFor="password" className="form-label text-start">Password</label>
                                    <input
                                        type={passwordShown2 ? "text" : "password"}
                                        className="form-control"
                                        name="password"
                                        placeholder='Re-enter your password'
                                        onChange={onPassword2Change}
                                        style={{ paddingRight: '12%' }}
                                    />
                                    <p style={{ position: 'absolute', top: '58%', right: '6%', cursor: 'pointer' }}
                                        onClick={() => {
                                            setPasswordShown2(passwordShown2 ? false : true)
                                        }}>􀋮</p>                                </div>
                                <div className="col-11" style={{ marginBottom: '' }}>
                                    <button
                                        className={`btn bttn`}
                                    >
                                        <span>Sign Up</span>
                                    </button>
                                </div>
                                <div className="col-11">
                                    <p style={{ marginBottom: '0.5rem' }}>Already have an account? Sign in&nbsp;
                                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                            onClick={() => {
                                                document.getElementsByTagName("form")[0].reset()
                                                setIsRegister(false)
                                            }}>here</span>
                                        .
                                    </p>
                                </div>
                            </form>
                        </>

                    ) : (
                        <>
                            <form className="row g-3 containerblur" style={{ alignContent: 'center', padding: '2rem', justifyContent: 'center' }} onSubmit={handleLogin} id='blurBackground'>
                                <h6 id='alertInput' style={{ display: 'none', color: 'red', paddingTop: '0' }}>Please enter your username and password.</h6>
                                <div className="col-11">
                                    <label htmlFor="username" className="form-label text-start" style={{}}>Business ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="businessname"
                                        placeholder='Enter business ID'
                                        onChange={onBusinessIDChange}
                                    />
                                </div>
                                <div className="col-11">
                                    <label htmlFor="username" className="form-label text-start" style={{}}>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="businessname"
                                        placeholder='Enter your username'
                                        onChange={onUsernameChange}
                                    />
                                </div>
                                <div className="col-11" style={{ position: 'relative' }}>
                                    <label htmlFor="password" className="form-label text-start">Password</label>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control"
                                        name="password"
                                        placeholder='Enter your password'
                                        onChange={onPasswordChange}
                                        style={{ paddingRight: '12%' }}
                                    />
                                    <p style={{ position: 'absolute', top: '58%', right: '6%', cursor: 'pointer' }}
                                        onClick={() => {
                                            setPasswordShown(passwordShown ? false : true)
                                        }}>􀋮</p>
                                </div>
                                <div className="col-11" style={{ marginBottom: '' }}>
                                    <button
                                        className={`btn bttn`}
                                    >
                                        <span>Log In</span>
                                    </button>
                                </div>
                                <div className="col-11">
                                    <p style={{ marginBottom: '0.5rem' }}>Don't have an account yet? Sign up&nbsp;
                                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                            onClick={() => {
                                                document.getElementsByTagName("form")[0].reset()
                                                setIsRegister(true)
                                            }}>here</span>
                                        .
                                    </p>
                                </div>
                            </form>
                        </>
                    )}

                </div>
            </div>

            <div className='patternDiv'></div>

        </>
    )
}