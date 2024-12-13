import React, { useEffect, useRef, useState } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import { useNavigate } from 'react-router-dom';
import MyLayoutHeader from '../layouts/MyLayoutHeader';

// 各別頁面
import ImgEditBrightness from './ImgEditBrightness';
import ImgEditSaturate from './ImgEditSaturate';
import ImgEditContrast from './ImgEditContrast';
import ImgEditCrop from './ImgEditCrop';

function ImgEditList() {
    const [imgSrcBefor, setImgSrcBefor] = useState(null)
    const [type, setType] = useState('list')
    let navigate = useNavigate();

    // 各別數值
    const [brightness, setBrightness] = useState(100)
    const [contrast, setContrast] = useState(100)
    const [saturate, setSaturate] = useState(100)

    // 控制濾鏡
    const filterStyle = {
        filter: `brightness(${brightness}%)
                 contrast(${contrast}%)
                 saturate(${saturate}%)`
    }

    // useEffect(async () => {
    //     // 把圖片轉成 base64
    //     // const response = await fetch('./src/assets/img/outfit.png');
    //     // console.log(response);
        
    //     // const file = './src/assets/img/outfit.png'
    //     // if (file) {
    //     //     const reader = new FileReader();
    //     //     reader.onload = () => {
    //     //         console.log('成功');
    //     //     }
    //     //     reader.readAsDataURL(file)
    //     // }
    // },[])

    function handlePrev() {
        navigate(-1)
    }
    function handleEdit() {
        // 得知你點到的是什麼
        let type = event.target.parentElement.id;

        switch (type) {
            case 'Case':
                setType(<ImgEditCrop setType={setType} brightness={brightness} setBrightness={setBrightness} />)
                break;
            case 'Brightness':
                setType(<ImgEditBrightness setType={setType} brightness={brightness} setBrightness={setBrightness} />)
                break;
            case 'Contrast':
                setType(<ImgEditContrast setType={setType} contrast={contrast} setContrast={setContrast} />)
                break;
            case 'Saturate':
                setType(<ImgEditSaturate setType={setType} saturate={saturate} setSaturate={setSaturate} />)
                break;
        }
    }

    return (
        <MyLayoutHeader>
            <div className="d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>編輯圖片</span>

                {/* 圖片框 */}
                <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img className="img-fluid" src="./src/assets/img/outfit.png" />
                </div>

                {/* 編輯選項 */}
                {/* 不等於 list 跳轉到各別頁面 */}
                {type !== 'list' && type}

                {/* 按鈕區 */}
                {type == 'list' && <>
                    <div className="w-100 d-flex justify-content-between">
                        <div onClick={handleEdit} id='Crop' className="d-flex flex-column align-items-center">
                            <img src="./src/assets/img/Crop.png" className='mb-2' />
                            <span className="fontSet-1">裁切</span>
                        </div>
                        <div onClick={handleEdit} id='Brightness' className="d-flex flex-column align-items-center">
                            <img src="./src/assets/img/Brigness.png" className='mb-2' />
                            <span className="fontSet-1">亮度</span>
                        </div>
                        <div onClick={handleEdit} id='Contrast' className="d-flex flex-column align-items-center">
                            <img src="./src/assets/img/Substract.png" className='mb-2' />
                            <span className="fontSet-1">對比</span>
                        </div>
                        <div onClick={handleEdit} id='Saturate' className="d-flex flex-column align-items-center">
                            <img src="./src/assets/img/saturation.png" className='mb-2' />
                            <span className="fontSet-1">飽和度</span>
                        </div>
                    </div>

                    {/* save/ cancel */}
                    <div className="w-100 d-flex justify-content-between mt-4">
                        <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
                        <button className="btn btn-dark rounded-set-3">儲存修改</button>
                    </div>
                </>}
            </div>
        </MyLayoutHeader>
    )
}

export default ImgEditList
