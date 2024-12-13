import React, { useState, useRef } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import { useNavigate } from 'react-router-dom';

function ImgEditContrast({ setType, contrast, setContrast}) {
    
    // 一開始帶進來的數值
    let saveContrast = useRef(contrast)
    // 給拉桿的值
    const [rangeValue, setRangeValue] = useState(contrast)

    let navigate = useNavigate();

    function handlePrev() {
        // 取消的話，把數值調成原來的
        setContrast(saveContrast.current);
        setType('list')
    }

    function handleChange() {
        // 調整對比度
        setContrast(event.target.value)
        setRangeValue(event.target.value)
    }
    
    function handleSave (){
        // 返回總表
        setType('list')
    }

    return (<>
        <div className='w-100'>
            <input onChange={handleChange} value={rangeValue} min={50} max={150} className='w-100' type="range" />
        </div>
        <p>對比</p>

        {/* save/ cancel */}
        <div className="w-100 d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
            <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
        </div>
    </>)
}

export default ImgEditContrast
