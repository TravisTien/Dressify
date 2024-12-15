import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Dressify.css'


function MyNavigation() {
    return (
        <header className="nav navbar" style={{ backgroundColor: '#ebe3e0'}}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="img"><a href="./modify.html"><img src="src/assets/img/icon/setting.svg" width="30px"
                    alt="setting" /></a>
                </div>
                <span className="text-xl"><b>Dressify</b></span>
                <div></div>
            </div>
        </header>
    )
}

export default MyNavigation