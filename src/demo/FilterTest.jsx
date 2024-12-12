import React, {useEffect, useRef} from "react";
import { Canvas, Rect, FabricImage } from 'fabric'
// 導入全部的 Fabric
import * as fabric from "fabric";

function FilterTest() {
    // 圖片路徑
    let img = '../../public/picture1.jpg'

    // 用 ref 定位畫布位置
    const canvasRef = useRef(null);

    useEffect(() => {
        // 確認有DOM element
        if (canvasRef.current) {
            // 初始化 Fabric canvas
            const canvas = new Canvas(canvasRef.current, {
                width: 400,
                height: 400,
            });

            // 把初始的畫布，放到Ref裡面
            canvasRef.current.fabricCanvas = canvas;

            // 先渲染一次
            canvas.renderAll();

            return () => {
                canvas.dispose();
            };
        }
    }, []);

    async function handleAddImg() {
        // 把畫布拿出來
        const canvas = canvasRef.current.fabricCanvas;

        // 確認有畫布存在
        if(canvasRef.current.fabricCanvas){
            // 把照片取出
            const photo = await FabricImage.fromURL(img);
            
            // 設定照片寬度
            photo.scaleToWidth(200);
            // 設定照片位置
            photo.set({left:0, top:10});
            
            // 把照片丟到畫布上
            canvas.add(photo);
            canvas.renderAll();
        }
    }

    return <>
        <canvas ref={canvasRef} style={{ border: '1px solid' }} ></canvas>
        <p onClick={handleAddImg}>新增圖片</p>
    </>
}

export default FilterTest;
