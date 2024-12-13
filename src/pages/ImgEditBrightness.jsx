import React, { useState, useRef } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import { useNavigate } from 'react-router-dom';

function ImgEditBrightness({ setType, brightness, setBrightness}) {
    const saveBrightness = useRef(brightness)
    const [rangeValue, setRangeValue] = useState(brightness)
    
    let navigate = useNavigate();

    function handlePrev() {
        console.log(saveBrightness);
        
        setBrightness(saveBrightness.current)
        setType('list')
    }

    function handleChange() {
        setRangeValue(event.target.value)
        setBrightness(event.target.value)
    }
    function handleSave(){
        setType('list')
    }


    return (<>
        <div className='w-100'>
            <input onChange={handleChange} className='w-100' type="range" min={50} max={150} value={rangeValue} />
        </div>
        <p>亮度</p>

        {/* save/ cancel */}
        <div className="w-100 d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
            <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
        </div>
    </>)
}

export default ImgEditBrightness
