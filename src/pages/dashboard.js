import React, { useState, useEffect, Component } from "react";
import { useNavigate, useParams, useMatch } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

export default function Dashboard() {
    const params = useParams();
    const navigate = useNavigate()
    const localizer = momentLocalizer(moment)


    return (
        <>
            <div style={{ width: '100vw', marginTop: '10rem', position: '', padding: '5rem' }} className={`d-flex align-items-center`}>
                <div style={{}} className={`rounded mx-auto d-block`}>

                    <div style={{ width: '100%', margin: '0 3rem 3rem 3rem' }} className={`rounded mx-auto d-block`}>
                        <h1>Hello</h1>
                    </div>

                    <Calendar
                        localizer={localizer}
                        startAccessor="start"
                        endAccessor="end"
                        className="containerblur"
                        style={{height:'30vh', width:'70vw', backgroundColor: 'rgba(143, 143, 143, 0.3)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: 'inset 0 0 0 0 rgba(255, 255, 255, 0.1)'}}
                    />

                    <div style={{ width: '100%', margin: '3rem' }} className={`rounded mx-auto d-block`}>
                        <h1>You are scheduled on ...</h1>
                    </div>
                </div>
            </div>

            <div className='waveDiv' style={{ filter: 'blur(150px)' }}></div>

        </>
    )
}