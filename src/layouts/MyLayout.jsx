import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

function MyLayout({ children }) {
    return (
        <div className='position-relative' style={{ height:'635px', width:'375px', border:'1px solid #5551ff'}}>
            <Header />
                {children}
            <NavBar />
        </div>
    )
}
export default MyLayout
