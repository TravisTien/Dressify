import React, { useState, useRef } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import { useNavigate } from 'react-router-dom';
import MyLayoutHeader from '../layouts/MyLayoutHeader';

function ImgEditSaturate({ setType, saturate, setSaturate }) {
    // 給拉桿的值
    const [saturateValue, setSaturateValue] = useState(saturate)
    // 原來的值
    let saveSaturate = useRef(saturate)

    let navigate = useNavigate();

    function handleChange() {
        setSaturate(event.target.value)
        setSaturateValue(event.target.value)
    }

    function handleCancel() {
        setSaturate(saveSaturate.current)
        setType('list')
    }

    function handleSave() {
        setType('list')
    }

    return (<>
        <div className='w-100'>
            <input onChange={handleChange} value={saturateValue} min={0} max={200} className='w-100' type="range" />
        </div>
        <p>飽和度</p>

        {/* save/ cancel */}
        <div className="w-100 d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-set-3" onClick={handleCancel}>取消修改</button>
            <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
        </div>
    </>)
}

export default ImgEditSaturate
