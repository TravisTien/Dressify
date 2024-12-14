import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import TravisContext from "../demo/TravisContext";
import MyLayout from '../layouts/MyLayout';



function Image() {
    const {imageSrc} = useContext(TravisContext)

    let navigate = useNavigate();

    // 跳轉到下一頁
    function handleNext() {
        navigate("/AddTag")
    }
    function handleImgEdit() {
        navigate("/ImgEditList")
    }

    return (
        <MyLayout>
            <div className="d-flex flex-column align-items-center px-5">
                <span className='text-center fontSet-3 my-3'>穿搭照片</span>

                {/* 圖片框 */}
                <div className="w-100 rounded-set-3 overflow-hidden" style={{ position: 'relative' }}>
                    <img className="img-fluid" src={imageSrc} />

                    {/* 按鈕 */}
                    <button className="DBTN-Purple rounded-set-3 d-flex" style={{ position: 'absolute', top: '1rem', left: '1rem' }} onClick={handleImgEdit}>
                        <img className='ps-2 pt-1' src="./src/assets/img/edit.png" />
                        <p className='fontSet-1 ms-2 pe-2'>編輯</p>
                    </button>
                </div>

                {/* 上下頁 */}
                <div className="d-flex justify-content-between my-4 w-100">
                    <button className="DBTN-Black">上一步</button>
                    <button className="DBTN-Black" onClick={handleNext}>下一步</button>
                </div>
            </div>
        </MyLayout>
    )
}

export default Image
