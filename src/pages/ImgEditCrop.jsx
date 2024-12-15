import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

// 引入Cropper
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

// 引入來源
import MyLayoutHeader from '../layouts/MyLayoutHeader';
import TravisContext from "../contexts/TravisContext";


function ImgEditCrop() {
    let navigate = useNavigate();
    const { imageSrc, filterStyle, CroppedSrc, setCroppedSrc } = useContext(TravisContext)
    const cropperRef = useRef(null)

    useEffect(()=>{
        if(imageSrc){
            cropperRef.current = new Cropper(photo,{
                aspectRatio: 3/4,
                viewMode:1
            })
        }
        
        return ()=>{
            cropperRef.current.destroy()
            cropperRef.current=null
        }
    },[imageSrc])

    function handleSave() {
        const cropper = cropperRef.current

        const canvas = cropper.getCroppedCanvas() // 儲存 Canvas 畫面
        const afterImg = canvas.toDataURL("image/jpeg"); //轉換成 base64 存放
        setCroppedSrc(afterImg)
        navigate("/ImgEditList")
    }

    function handleCancel() {
        navigate("/ImgEditList")
    }



    return (<>
        <MyLayoutHeader>
            <div className="d-flex flex-column align-items-center px-5" >
                <span className='text-center fontSet-3 my-3'>裁切圖片</span>
                <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                    <img id='photo' className="img-fluid" src={imageSrc} />
                </div>

                <div className="w-100 d-flex justify-content-between mt-4">
                    <button className="btn btn-dark rounded-set-3" onClick={handleCancel}>取消修改</button>
                    <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
                </div>
            </div>
        </MyLayoutHeader>
    </>)
}

export default ImgEditCrop
