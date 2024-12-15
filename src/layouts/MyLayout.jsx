import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Dressify.css'

import MyNavigation from '../components/MyNavigation'
import MyFooter from '../components/MyFooter'


function MyLayout({ children }) {
    return (
        <div className='d-flex flex-column position-relative justify-content-between' style={{ height:'635px', width:'375px', border:'1px solid #5551ff'}}>
            <MyNavigation />
                {children}
            <MyFooter />
        </div>
    )
}
export default MyLayout
