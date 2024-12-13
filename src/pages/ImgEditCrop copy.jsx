import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ImgEditList from './ImgEditList'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

// 引入Cropper
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";


function ImgEditCrop() {
    const [imgSrcAfter, setImgSrcAfter] = useState(null)
    const location = useLocation();
    const filterStyle = location.state.filterStyle
    const imgSrcBefor = location.state.imgSrcBefor
    const imgCroperRef = useRef(null);

    let navigate = useNavigate();

    useEffect(() => {
        if (imgSrcBefor) {
            const image = document.getElementById('image')
            imgCroperRef.current = new Cropper(image, {
                aspectRatio: 4 / 3,
                viewMode: 1,  // 裁剪框固定
                dragMode: 'move',  // 允許拖動圖片
                zoomable: true,  // 允許縮放圖片
            })
        }

        return ()=>{
            if(imgCroperRef.current){
                imgCroperRef.current.destroy()
                imgCroperRef.current = null
            }
        }
    },[imgSrcBefor])

    function handleSave() {
        const cropper = imgCroperRef.current
        if(cropper){
            const canvas = cropper.getCroppedCanvas()
            const base64Image = canvas.toDataURL("image/jpeg")
            setImgSrcAfter(base64Image);
            console.log(imgSrcAfter);
        }
        // navigate('/ImgEditList', {state: imgSrcAfter})
    }

    function handlePrev() {
        setType('list')
    }




    return (<>
        <div className="d-flex flex-column align-items-center px-5" >
            <span className='text-center fontSet-3 my-3'>裁切</span>

            {/* 圖片框 */}
            <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden mb-3">
                <img id='image' className="img-fluid" src={imgSrcBefor || "./src/assets/img/outfit.png"} />
            </div>

            {/* save/ cancel */}
            <div className="w-100 d-flex justify-content-between mt-4">
                <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
                <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
            </div>
        </div>
    </>)
}

export default ImgEditCrop
