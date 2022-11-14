import React, { useEffect, useState } from "react";
import { useNavigate, Link, useMatch } from 'react-router-dom'

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [url, setUrl] = useState('')
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedIn')
        navigate('/')
        window.location.reload()
    }

    useEffect(() => {
        if ('user' in localStorage) {
            setUrl('')

        } else {
            // logOut()
        }

    }, []);

    return (
        <>
            <div className="">
                <div style={{ margin: '1.5rem', position: 'sticky' }} className='navbar d-flex justify-content-between' id='blurBackground'>
                    <div style={{ margin: '1rem', cursor: 'pointer' }} onClick={() => {
                        navigate('/')
                        window.location.reload()
                    }}>
                        <h1 style={{ margin: '0', fontFamily: 'UNBEGS', fontWeight: 'lighter' }}>schdlr</h1>
                    </div>

                    <div style={{ margin: '1rem' }} className=''>
                    </div>

                    <div style={{ margin: '1rem', cursor: 'pointer' }}
                        onClick={() => {
                            navigate('/login')
                            window.location.reload()
                        }}>
                        <h1 style={{ margin: '0' }}>Log In</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar