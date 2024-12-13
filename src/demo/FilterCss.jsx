import React, { useState } from 'react';

// import {  } from "../../public/picture1.jpg";

function FilterCss() {
    const [brightness, setBrightness] = useState(50)

    const filterStyle = {
        filter: `brightness(${brightness}%)`
    }

    function handleBrightnessChange (){
        // console.log(event.target.value);
        setBrightness(event.target.value)
    }

    return (
        <>
            <div style={filterStyle}>
                <img src="../../public/picture1.jpg" style={{ width: '80%' }} />
            </div>

            {/* 亮度控制滑塊 */}
            <div className="controls">
                <label>
                    亮度:
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={brightness}
                        onChange={handleBrightnessChange}
                    />
                </label>
            </div>
        </>
    )
}

export default FilterCss
