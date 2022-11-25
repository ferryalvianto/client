import React, { useEffect, useState } from "react";
import { useNavigate, Link, useMatch } from 'react-router-dom'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from 'react-spring'

const Navbar = () => {
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [url, setUrl] = useState('')
    const [showtext, setShowtext] = useState(false);

    const navigate = useNavigate()
    const isHome = useMatch('/')
    const isProfile = useMatch('/profile')

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedIn')
        navigate('/')
        window.location.reload()
    }

    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 0 : 1,
        config: { duration: 500 },
    })

    useEffect(() => {
        if (!isHome) {
            document.getElementById('logindiv').style.display = `none`
        }

        if (isProfile) {
            document.getElementById('logoLeft').style.display = `block`
            document.getElementById('indexlink').style.fontFamily = `SF Pro`
            document.getElementById('indexlink').innerText = `􀉩`
            document.getElementById('logoCenter').style.display = `block`
            document.getElementById('logindiv').style.display = `block`
            document.getElementById('rightlink').innerText = `Log Out`
        }

        if ('user' in localStorage) {
            setUrl('')
        } else {
            // logOut()
        }
    }, []);

    return (
        <>
            <div className="">
                <div style={{ margin: '1.5rem', position: 'fixed', width: '-webkit-fill-available' }} className='sticky-top containerblur d-flex justify-content-between' id='blurBackground'>
                    <div style={{ margin: '1rem 3rem 1rem 3rem', cursor: 'pointer' }} id='logoLeft'
                        onClick={() => {
                            if (!isProfile) {
                                navigate('/')
                                window.location.reload()
                            }
                        }}
                        onMouseOver={() => toggle(!state)}
                        onMouseLeave={() => toggle(true)}
                    >
                        <animated.div
                            style={{
                                opacity: x.to({ range: [1, 1], output: [1, 1] }),
                                scale: x.to({
                                    output: [1, 0.97, 0.9, 5, 1.03, 1],
                                })
                            }}
                        >
                            <div onMouseOver={() => {
                                if (isProfile) {
                                    document.getElementById('secondnavbar').style.display = 'block'
                                }
                            }}>
                                <h1 style={{ margin: '0', fontFamily: 'UNBEGS', fontWeight: 'lighter' }} id='indexlink'>schdlr</h1>
                            </div>
                        </animated.div>
                    </div>

                    <div style={{ margin: '1rem', display: 'none' }} className='' id='logoCenter'
                        onMouseOver={() => {
                            toggle(!state)
                            if (isProfile) {
                                document.getElementById('secondnavbar').style.display = 'none'
                            }
                        }}
                        onMouseLeave={() => toggle(true)}>
                        <animated.div
                            style={{
                                opacity: x.to({ range: [1, 1], output: [1, 1] }),
                                scale: x.to({
                                    output: [1, 0.97, 0.9, 5, 1.03, 1],
                                })
                            }}
                        >
                            <h1 style={{ margin: '0', fontFamily: 'UNBEGS', fontWeight: 'lighter' }}>schdlr</h1>
                        </animated.div>
                    </div>

                    <>
                        <div id='logindiv' style={{ margin: '1rem 3rem 1rem 3rem', cursor: 'pointer' }}
                            onClick={() => {
                                navigate('/login')
                                window.location.reload()
                            }}
                            onMouseOver={() => toggle(!state)}
                            onMouseLeave={() => toggle(true)}
                        >
                            <animated.div
                                style={{
                                    opacity: x.to({ range: [1, 1], output: [1, 1] }),
                                    scale: x.to({
                                        output: [1, 0.97, 0.9, 5, 1.03, 1],
                                    })
                                }}
                            >
                                <h1 style={{ margin: '0' }} id='rightlink'>Log In</h1>
                            </animated.div>
                        </div>
                    </>

                </div>

                <div id='secondnavbar' style={{ display: 'none' }} onMouseLeave={() => {
                    document.getElementById('secondnavbar').style.display = 'none'
                }}>
                    <div style={{ margin: '9rem 1.5rem', position: 'fixed', width: '-webkit-fill-available' }} className='sticky-top containerblur d-flex justify-content-between' id='blurBackground'>
                        <div style={{ margin: '', display: '' }} className='' id=''>
                            <button className={`btn bttn2`}>
                                <span>Dashboard</span>
                            </button>
                        </div>
                        <div style={{ margin: '', display: '' }} className='' id=''>
                            <button className={`btn bttn2`}>
                                <span>Timesheet</span>
                            </button>
                        </div>
                        <div style={{ margin: '', display: '' }} className='' id=''>
                            <button className={`btn bttn2`}>
                                <span>Time Off Requests</span>
                            </button>
                        </div>
                        <div style={{ margin: '', display: '' }} className='' id=''>
                            <button className={`btn bttn2`}>
                                <span>Scheduling</span>
                            </button>
                        </div>
                        <div style={{ margin: '', display: '' }} className='' id=''>
                            <button className={`btn bttn2`}>
                                <span>Payroll</span>
                            </button>
                        </div>
                        <div style={{ margin: '', display: '' }} className='' id=''>
                            <button className={`btn bttn2`}>
                                <span>Account Information</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Navbar