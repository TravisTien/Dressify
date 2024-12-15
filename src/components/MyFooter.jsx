import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Dressify.css'


function MyFooter() {
    return (
        <footer className="nav navbar justify-content-evenly align-items-center"
            style={{ backgroundColor: '#ebe3e0'}}>
            <div><a href=""><img src="src/assets/img/icon/closet.svg" alt="" width="30px" /></a></div>
            <div><a href=""><img src="src/assets/img/icon/instagram.svg" alt="" width="30px" /></a></div>
            <div><a href="./index.html"><img src="src/assets/img/icon/home.svg" alt="" width="30px" /></a></div>
            <div><a href="./modify.html"><img src="https://www.dummyimage.com/30x30/aad4e3/000.jpg&text=30*30" alt=""
                className="img rounded-circle" width="30px" /></a></div>
        </footer>
    )
}

export default MyFooter