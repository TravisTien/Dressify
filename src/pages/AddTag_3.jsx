import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import MyLayout from '../layouts/MyLayout';


function AddTag_3() {
  const [boxes, setBosex] = React.useState([]);
  function handleAddbox() {
    setBosex([...boxes, { id: Date.now() }]);
    boxes.forEach((value) => {
      console.log(value);
    })
  }


  return (
    <MyLayout>
      <div id="root" className="d-flex flex-column justify-content-between align-items-center">
        <div className="h-100 d-flex flex-column justify-content-start">
          {/* <!-- 當前狀態 --> */}
          <span id="title" className="text-center mt-3 mb-2">新增標註</span>

          <div className="rounded-set-3 overflow-hidden" style={{ position: 'relative' }}>
            <img onClick={handleAddbox} className="img-fluid" src="./src/assets/img/outfit.png" />
            {/* 測試新增方塊 */}
            {boxes.map((value) => {
              return <div id={value.id} style={{ width: 50, height: 50, backgroundColor: 'green', top: 0, left: 0 }} className='position-absolute'></div>
            })}
          </div>



          {/* <!-- 頁面按鈕 --> */}
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-set-2">上一步</button>
            <button className="btn btn-dark rounded-set-2">下一步</button>
          </div>
        </div>
      </div>
    </MyLayout>
  )
}

export default AddTag_3