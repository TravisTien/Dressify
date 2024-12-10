import React, { useEffect, useRef, useState } from 'react'
import { Canvas, Rect } from 'fabric';
import '../css/CanvasDemo.css'

function CanvasDemo() {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        if (canvasRef.current) {
            const initCanvas = new Canvas(canvasRef.current, {
                width: 500,
                height: 500,
            })
            
            initCanvas.backgroundColor = '#fff';
            initCanvas.renderAll();

            setCanvas(initCanvas);

            return () => {
                initCanvas.dispose();
            }
        }
    }, [])

    function handleAdd() {
        console.log('hi');

        if (canvas) {
            const react = new Rect({
                top: 100,
                left: 50,
                width: 100,
                height: 50,
                fill: "#a786f8"
            });
            canvas.add(react)
        }
    }

    return (<>
        <div className='App'>
            <canvas id='canvas' ref={canvasRef} />
            <button onClick={handleAdd}>+</button>
        </div>
    </>)
}

export default CanvasDemo
