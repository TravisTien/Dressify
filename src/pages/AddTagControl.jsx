import React from 'react'
import { useState, useEffect } from "react";
import AddTagCloset from "./AddTagCloset";
import AddTagComment from "./AddTagComment";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

function AddTagControl({ setIsSliderVisible, selectID }) {
    const [control, setControl] = useState('L')

    function handleCloset() {
        setControl('L')
    }
    function handleComment() {
        setControl('R')
    }


    return (
        <div className=' d-flex flex-column align-items-center rounded-5 container position-absolute bottom-0 end-0' style={{ width: '375px', backgroundColor: '#ededed', border: '1px solid red', height: '492px', overflowY: 'auto' }}>
            {/* title */}
            <div className='row'>
                <p className='text-center fontSet-3 py-4'>標註衣服</p>
            </div>

            {/* 切換按鈕 */}
            <div className='px-4 w-100 d-flex fontSet-2 justify-content-between mb-2'>
                <button onClick={handleCloset} className="DBTN-Select px-3 "> 從我的衣櫃</button>
                <button onClick={handleComment} className="DBTN px-3"> 新增標註</button>
            </div>

            {/* 從衣櫃 or 新增標註 */}
            <div className='w-100' style={{ border: '2px solid #3e7dbb' }}>
                {control == 'R' 
                    ? <AddTagComment selectID={selectID} setIsSliderVisible={setIsSliderVisible} />
                    : <AddTagCloset selectID={selectID} setIsSliderVisible={setIsSliderVisible} />
                }
            </div>
        </div>
    )
}

export default AddTagControl
