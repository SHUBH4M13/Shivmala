import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Legal() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
