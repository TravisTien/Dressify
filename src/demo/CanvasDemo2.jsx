import React, { useEffect, useRef, useState } from 'react'
import { Canvas, Rect } from 'fabric'
import {FabricText} from 'fabric';


function CanvasDemo2() {
    const canvasRef = useRef(null); //綁定 DOM ，用來指定畫布位置
    const [canvas, setCanvas] = useState(null); // 保存Fabric 的畫布對象
    let beeText = []

    useEffect(() => {
        if (canvasRef.current) {
            // 創建一個 Canvas，第一個參數是 DOM 位置，必須是 <canvas>
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,
                backgroundColor: '#fff'
            });

            // 把設置好的畫布，先渲染一次
            initCanvas.renderAll();

            // 把設定好的畫布，放到 state 方便你日後調用
            setCanvas(initCanvas);

            // 清理功能
            return () => {
                initCanvas.dispose()
            }
        }
    }, [])

    function handleAddText() {
        if (canvas) {
            const text1 = new FabricText('文字框', {
                left: 100, // 初始位置 x
                top: 100,  // 初始位置 y
                fontSize: 30,
                fill: 'black',
                width: 300, // 文字框寬度
                textAlign: 'center',
            });
            beeText.push(text1)
            canvas.add(text1)
            text1.set('text', 'Meow')

            canvas.renderAll();
            // console.log(beeText);
            
        }
    }

    function handleAdd() {
        if (canvas) {

            const rect = new Rect({
                top: 100,
                left: 50,
                width: 50,
                height: 50,
                fill: "162, 122, 243"
            });

            canvas.add(rect);
        }
    }
    function handleChangeText (){
        
        console.log(beeText);
        beeText[0].set('text', 'HIHI')
        // text1.set('text', 'HIHI')
        canvas.renderAll()
    }


    return (
        <div style={{ textAlign: 'center' }}>
            {/* Step 4: 繪製畫布 */}
            <canvas id="canvas" ref={canvasRef} style={{ border: '1px solid #ccc' }}></canvas>
            {/* Step 5: 添加按鈕 */}
            <button onClick={handleAdd} style={{ marginTop: '10px' }}>
                添加矩形
            </button>
            <button onClick={handleAddText} style={{ marginTop: '10px' }}>
                添加文字
            </button>
            <button onClick={handleChangeText} style={{ marginTop: '10px' }}>
                更改
            </button>
        </div>
    )
}

export default CanvasDemo2
