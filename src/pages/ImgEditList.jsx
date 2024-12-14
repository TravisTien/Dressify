import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

// 引入Cropper
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

// 各別頁面
import TravisContext from "../demo/TravisContext";
import MyLayoutHeader from '../layouts/MyLayoutHeader';
import ImgEditBrightness from './ImgEditBrightness';
import ImgEditSaturate from './ImgEditSaturate';
import ImgEditContrast from './ImgEditContrast';
import ImgEditCrop from './ImgEditCrop';

function ImgEditList() {
    let navigate = useNavigate();
    const { imageSrc, filterStyle, CroppedSrc } = useContext(TravisContext)

    // 各別數值
    const [brightness, setBrightness] = useState(100)
    const [contrast, setContrast] = useState(100)
    const [saturate, setSaturate] = useState(100)


    // 頁面切換
    function handleEdit() {
        // 得知你點到的是什麼
        let type = event.target.parentElement.id;

        switch (type) {
            case 'Case':
                setType(<ImgEditCrop setType={setType} brightness={brightness} setBrightness={setBrightness} />)
                break;
            case 'Contrast':
                setType(<ImgEditContrast setType={setType} contrast={contrast} setContrast={setContrast} />)
                break;
            case 'Saturate':
                setType(<ImgEditSaturate setType={setType} saturate={saturate} setSaturate={setSaturate} />)
                break;
        }
    }


    // 跳轉編輯頁面
    const handleEditCrop = () => {
        navigate("/ImgEditCrop");
    }
    const handleEditBrightness = () => {
        navigate("/ImgEditBrightness")
    }
    const handleEditSaturate = () => {
        navigate("/ImgEditSaturate")
    }
    const handleEditContrast = () => {
        navigate("/ImgEditContrast")
    }

    // 上一步下一步
    function handlePrev() {
        navigate(-1)
    }

    return (
        <MyLayoutHeader>
            <div className="d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>編輯圖片</span>

                {/* 圖片 */}
                <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img className="img-fluid" src={CroppedSrc || imageSrc} />
                </div>

                {/* 編輯按鈕 */}
                <div className="w-100 d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center" onClick={handleEditCrop} >
                        <img src="./src/assets/img/Crop.png" className='mb-2' />
                        <span className="fontSet-1">裁切</span>
                    </div>
                    <div className="d-flex flex-column align-items-center" onClick={handleEditBrightness} >
                        <img src="./src/assets/img/Brigness.png" className='mb-2' />
                        <span className="fontSet-1">亮度</span>
                    </div>
                    <div className="d-flex flex-column align-items-center" onClick={handleEditContrast} >
                        <img src="./src/assets/img/Substract.png" className='mb-2' />
                        <span className="fontSet-1">對比</span>
                    </div>
                    <div className="d-flex flex-column align-items-center" onClick={handleEditSaturate} >
                        <img src="./src/assets/img/saturation.png" className='mb-2' />
                        <span className="fontSet-1">飽和度</span>
                    </div>
                </div>

                {/* save/ cancel */}
                <div className="w-100 d-flex justify-content-between mt-4">
                    <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
                    <button className="btn btn-dark rounded-set-3">儲存修改</button>
                </div>

            </div>
        </MyLayoutHeader>
    )
}

export default ImgEditList
