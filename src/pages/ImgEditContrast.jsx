import React, { useState, useRef, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import MyLayoutHeader from '../layouts/MyLayoutHeader';
import TravisContext from "../demo/TravisContext";

function ImgEditContrast() {
    let navigate = useNavigate();
    const { imageSrc, filterStyle, setContrast, contrast, CroppedSrc } = useContext(TravisContext)

    // 儲存上一動數值
    const [originalValue, setOriginalValue] = useState(contrast)

    function handleChange() {
        // 更改 Context 的數值
        setContrast(event.target.value)
    }
    function handleCancel() {
        // 把數值回復成調整前
        setContrast(originalValue)
        navigate("/ImgEditList")
    }
    function handleSave() {
        // 儲存數值
        setOriginalValue(contrast)
        navigate("/ImgEditList")
    }


    return (<>
        <MyLayoutHeader>
            <div className="d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>調整對比度</span>
                <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img className="img-fluid" src={CroppedSrc || imageSrc} />
                </div>

                {/* 拉桿 */}
                <div className='w-100'>
                    <input onChange={handleChange} className='w-100' type="range" min={50} max={150} value={contrast} />
                </div>

                {/* save/ cancel */}
                <div className="w-100 d-flex justify-content-between mt-4">
                    <button className="btn btn-dark rounded-set-3" onClick={handleCancel}>取消修改</button>
                    <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
                </div>
            </div>
        </MyLayoutHeader>
    </>)
}

export default ImgEditContrast
