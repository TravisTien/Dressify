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
    const {imageSrc} = useContext(TravisContext)
    const [imgSrcBefor, setImgSrcBefor] = useState(null)
    const [imgSrcAfter, setImgSrcAfter] = useState(null)
    const [type, setType] = useState('list')
    const cropperRef = useRef(null)
    let navigate = useNavigate();

    const [originalStyle, setOriginalStyle] = useState({ display: "inline" });
    const [cropStyle, setCropStyle] = useState({ display: "none" });
    const [resultStyle, setResultStyle] = useState({ display: "none" });

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
    // 濾鏡 style
    const filterStyle = {
        filter: `brightness(${brightness}%)
                 contrast(${contrast}%)
                 saturate(${saturate}%)`
    }

    // 處理上傳的圖片
    function handleUpload() {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                // 轉換出來的Blob
                console.log('照片讀取完畢');
                setImgSrcBefor(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    // 編輯按鈕
    function handleEditCrop() {
        setOriginalStyle({ display: 'none' })
        setCropStyle({ display: "inline" })
        setResultStyle({ display: "none" })

        setType(
            <div className="w-100 d-flex justify-content-between mt-4">
                <button className="btn btn-dark rounded-set-3" onClick={handleCancel}>取消修改</button>
                <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
            </div>
        )

        if (imgSrcBefor) {
            const image = document.getElementById('image')

            if (cropperRef.current) {
                cropperRef.current.destroy()
                cropperRef.current = null;
            }

            cropperRef.current = new Cropper(image, {
                aspectRatio: 3 / 4,
                viewMode: 1
            })
        }
    }

    // 儲存修改
    function handleSave() {
        const cropper = cropperRef.current
        if (cropper) {
            const canvas = cropper.getCroppedCanvas();
            const imageBase64 = canvas.toDataURL("image/jpeg");
            setImgSrcAfter(imageBase64)

            setType('list')
            setOriginalStyle({ display: 'none' })
            setCropStyle({ display: "none" })
            setResultStyle({ display: "inline" })
        }
    }

    function handleCancel() {
        // setType('list')
    }

    function handlePrev() {
        navigate(-1)
    }

    return (
        <MyLayoutHeader>
            <div className="d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>編輯圖片</span>
                <input type="file" onChange={handleUpload} />

                {/* 原始圖片 */}
                <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img className="img-fluid" style={originalStyle} src={imageSrc} />
                </div>
                <div style={cropStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img className="img-fluid" src={imgSrcBefor} id='image' />
                </div>
                <div style={resultStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <div style={filterStyle}>
                        <img className="img-fluid" src={imgSrcAfter} alt="" />
                    </div>
                </div>

                {/* 按鈕區 */}
                {type == 'list' && <>
                    <div className="w-100 d-flex justify-content-between">
                        <div onClick={handleEditCrop} id='Crop' className="d-flex flex-column align-items-center">
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

                {/* 編輯選項 */}
                {type !== 'list' && type}

            </div>
        </MyLayoutHeader>
    )
}

export default ImgEditList
