import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

function MyLayout({ children }) {
    return (<div>
        <Header />
        {children}
        <NavBar />
    </div>)
}
export default MyLayout
