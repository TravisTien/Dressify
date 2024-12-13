import React, { useEffect, useRef, useState } from "react";
import { Canvas, Rect,  } from 'fabric'
// 導入全部的 Fabric
import * as fabric from "fabric";

function FilterV5() {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null); // 保存Fabric 的畫布對象
    // 圖片路徑
    let imgUrl = '../../public/picture1.jpg'
    // let imgUrl = 'https://cdn.wimg.jp/coordinate/5dn4e2/20180921112054561/20180921112054561_1000.jpg'

    useEffect(() => {
        // 確認有DOM element
        if (canvasRef.current) {
            // 初始化 Fabric canvas
            const initCanvas = new Canvas(canvasRef.current, {
                width: 400,
                height: 400,
            });
            // 先渲染一次
            initCanvas.renderAll();

            // 把初始的畫布，放到Ref裡面
            setCanvas(initCanvas)

            return () => {
                initCanvas.dispose();
            };
        }
    }, []);
    function test() {
        console.log('hi');

    }

    async function handleAddImg() {
        // 確認有畫布存在
        let photo = await fabric.Image.fromURL(imgUrl);
        var filter = new fabric.Image.filters.Contrast({
            contrast: 0.3
        });
        chooseFilter(filter);
        /* Now apply */
        photo.applyFilters();

        console.log(photo);
        canvas.add(photo);
    }

    return <>
        <canvas ref={canvasRef} style={{ border: '1px solid' }} ></canvas>
        <p onClick={handleAddImg}>新增圖片</p>
        <img src={imgUrl} alt="" />
    </>
}

export default FilterV5;
