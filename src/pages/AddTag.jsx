import React from 'react'
import { useState } from "react";
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import MyLayout from '../layouts/MyLayout';
import AddTagCloset from "./AddTagCloset";

function AddTag() {
  const [boxes, setBosex] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  // 頁面跳轉
  let navigate = useNavigate();
  function handlePrev() {
    navigate(-1)
  }
  function handleNext() {
    navigate("/OutfitDescription")
  }

  function handleAddbox() {
    setBosex([...boxes, { id: Date.now() }]);
  }


  return (<MyLayout>
    <div className="px-5 d-flex flex-column align-items-center" style={{ height: '505px' }}>
      {/* 當前狀態 */}
      <span className='text-center fontSet-3 my-3'>新增標註</span>

      <div className="rounded-set-3 overflow-hidden" style={{ position: 'relative' }}>
        <img onClick={handleAddbox} className="img-fluid" src="./src/assets/img/outfit.png" />
        {/* 測試新增方塊 */}
        {boxes.map((value) => {
          return <div id={value.id} onClick={() => setIsSliderVisible(true)} style={{ width: 50, height: 50, backgroundColor: 'green', top: 0, left: 0 }} className='position-absolute'></div>
        })}
      </div>

      <div style={{ height:'492px' }}>
        {isSliderVisible && <AddTagCloset />}
      </div>

      {/* 上下頁 */}
      <div className="d-flex justify-content-between my-4 w-100">
        <button className="DBTN-Black" onClick={handlePrev}>上一步</button>
        <button className="DBTN-Black" onClick={handleNext}>下一步</button>
      </div>
    </div>
  </MyLayout>)
}

export default AddTag