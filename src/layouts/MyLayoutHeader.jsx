import React from 'react'
import Header from '../components/Header';

function MyLayoutHeader({children}) {
    return (
        <div style={{ height:'635px', width:'375px', border:'1px solid #5551ff'}}>
            <Header />
            {children}
        </div>
    )
}

export default MyLayoutHeader
