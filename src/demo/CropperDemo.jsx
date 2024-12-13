import React, { useEffect, useRef, useState } from 'react'
// 引入Cropper
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

function CropperDemo() {
    const [imageSrc, setImageSrc] = useState(null) //顯示上傳的圖片
    const [imageAfter, setImageAfter] = useState(null);
    const cropperRef = useRef(null); // 參考 Cropper 實體

    // 管理頁面狀態
    const [cropStyle, setCropStyle] = useState({ display: "none" });
    const [resultStyle, setResultStyle] = useState({ display: "none" });

    function handleImageUpload() {
        const file = event.target.files[0] //你上傳的檔案
        // console.log(typeof (file));

        if (file) {
            setCropStyle({ display: "block" })
            const reader = new FileReader() //js原生檢視器
            reader.onload = () => {
                // console.log('讀取成功');
                // console.log(reader.result); // 讀取完顯示結果
                setImageSrc(reader.result) //放入圖片的路徑
            }
            reader.readAsDataURL(file); //檢視器 讀取檔案
        }
    }

    useEffect(() => {
        if (imageSrc) {
            const image = document.getElementById('image')
            cropperRef.current = new Cropper(image, {
                aspectRatio: 16 / 9,
                viewMode: 1
            })
        }

        return () => {
            if (cropperRef.current) {
                cropperRef.current.destroy();
                cropperRef.current = null;
            }
        }
    }, [imageSrc])

    function handleCrop() {
        const cropper = cropperRef.current;
        if (cropper) {
            // 頁面開關
            setResultStyle({ display: 'block' })
            setCropStyle({ display: 'none' })

            const canvas = cropper.getCroppedCanvas();
            const base64Image = canvas.toDataURL("image/jpeg")
            setImageAfter(base64Image);
        }
    }
    function handleCropAgain() {
        // 頁面開關
        setCropStyle({ display: 'block' })
        setResultStyle({ display: 'none' })
    }

    return (<>
        <h1> 圖片裁切 </h1>
        <input type="file" accept='image/*' onChange={handleImageUpload} />

        <hr />
        <div style={cropStyle}>
            <h3>裁切前的圖片</h3>
            <button onClick={handleCrop}>圖片裁切</button>
            {imageSrc && (
                <img id='image' src={imageSrc} style={{ maxWidth: "100%" }} />
            )}
        </div>

        {imageAfter && (
            <div>
                <h3>裁切後的圖片</h3>
                <button onClick={handleCropAgain}>再次編輯</button>
                {imageAfter && (
                    <img src={imageAfter} style={{ maxWidth: "100%" }} />
                )}
            </div>
        )}
    </>)
}

export default CropperDemo
