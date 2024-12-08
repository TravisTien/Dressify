import React from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import { useNavigate } from 'react-router-dom';
import MyLayoutHeader from '../layouts/MyLayoutHeader';

function ImgEdit() {
    let navigate = useNavigate();

    function handlePrev (){
        navigate(-1)
    }

    return (
        <MyLayoutHeader>
            <div className="d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>編輯圖片</span>

                {/* 圖片框 */}
                <div class="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img class="img-fluid" src="./src/assets/img/outfit.png" />
                </div>

                {/* 編輯選項 */}
                <div className="w-100 d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                        <img src="./src/assets/img/Crop.png" className='mb-2' />
                        <span className="fontSet-1">裁切</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src="./src/assets/img/Brigness.png" className='mb-2' />
                        <span className="fontSet-1">亮度</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src="./src/assets/img/Substract.png" className='mb-2' />
                        <span className="fontSet-1">對比</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
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

export default ImgEdit
