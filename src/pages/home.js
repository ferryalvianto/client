import React, { useState, useEffect } from "react";

export default function Home() {
    return (
        <>
            <div style={{ width: '100vw', height: '50vh',top:'25vh', position:'fixed' }} className={`d-flex align-items-center`}>
                <div style={{padding:'4rem'}} className={`rounded mx-auto d-block`}>
                    <h1 style={{ fontSize: '24vw', margin: 0 }}>Better</h1>
                    <h1 style={{ fontSize: '19vw', margin: 0 }}>Workforce</h1>
                    <h1 style={{ fontSize: '15vw', margin: 0 }}>Management</h1>
                </div>
            </div>
        </>
    )
}