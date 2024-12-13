import React, { useState } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import { useNavigate } from 'react-router-dom';
import MyLayoutHeader from '../layouts/MyLayoutHeader';

function ImgEditBrightness() {
    const [filter, setFilter] = useState(100)

    let navigate = useNavigate();

    const filterStyle = {
        filter: `brightness(${filter}%)`
    }

    function handlePrev (){
        navigate(-1)
    }

    function handleChange (){
        setFilter( event.target.value)
    }

    return (
        <MyLayoutHeader>
            <div className="w-100 d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>編輯圖片</span>

                {/* 圖片框 */}
                <div className="w-100 rounded-set-3 overflow-hidden mb-3" style={filterStyle}>
                    <img class="img-fluid" src="./src/assets/img/outfit.png" />
                </div>
                <div className='w-100'>
                    <input onChange={handleChange} className='w-100' type="range" />
                </div>
                <p>亮度</p>



                {/* save/ cancel */}
                <div className="w-100 d-flex justify-content-between mt-4">
                    <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
                    <button className="btn btn-dark rounded-set-3">儲存修改</button>
                </div>
            </div>
        </MyLayoutHeader>
    )
}

export default ImgEditBrightness
