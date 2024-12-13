import React, { useState, useRef } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

// 引入Cropper
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

import { useNavigate } from 'react-router-dom';

function ImgEditCrop({setType }) {
    let navigate = useNavigate();

    function handlePrev() {
        setType('list')
    }

    function handleChange() {
    }

    function handleSave(){
        setType('list')
    }


    return (<>
        <div className='w-100'>
        </div>
        <p>裁切</p>

        {/* save/ cancel */}
        <div className="w-100 d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
            <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
        </div>
    </>)
}

export default ImgEditCrop
