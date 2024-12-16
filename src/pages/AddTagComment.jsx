import React, { useContext, useRef } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Dressify.css'

import TravisContext from "../contexts/TravisContext";

function AddTagComment({ setIsSliderVisible, selectID }) {
    const { tagList } = useContext(TravisContext)
    const typeRef = useRef(null);
    const sizeRef = useRef(null);
    const brandRef = useRef(null);
    const commentRef = useRef(null);

    function handleCommit(event) {
        event.preventDefault()

        tagList[selectID].content = brandRef.current.value; // 把撈到的牌子 放入對應的 content
        setIsSliderVisible(false);
    }

    return (
        <div className='d-flex flex-column align-items-center container'>
            <form className='row px-3'>
                {/* Comment */}
                <div>
                    <label className="text-s mt-2 mb-2">標註內容 :</label>
                    <textarea ref={commentRef}
                        className="text-m form-control w-100 ps-4"
                        style={{ backgroundColor: 'var(--color-second)', height: '100px', resize: 'none', }}>Nier
                    </textarea>
                </div>

                {/* 選項 */}
                <div className="row mt-4">
                    {/* 類型 */}
                    <div className='col form-group'>
                        <label className='text-s' for='type' >類型</label>
                        <select className='rounded-pill text-m form-select' style={{backgroundColor:'var(--color-second)'}} id='type' ref={typeRef} defaultValue={2} >
                            <option value="1" >褲子</option>
                            <option value="2" >褲子</option>
                        </select>
                    </div>

                    {/* 尺寸 */}
                    <div className="col form-group">
                        <label className='text-s' for='size' >類型</label>
                        <select className='rounded-pill text-m form-select' style={{backgroundColor:'var(--color-second)'}} ref={sizeRef} id='size' defaultValue={2} >
                            <option value="1" >S</option>
                            <option value="2" >M</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-4">
                    {/* 牌子 */}
                    <div className='form-group col'>
                        <label className='text-s' for='brand' >牌子</label>
                        <select className='rounded-pill text-m px-3 form-select' style={{backgroundColor:'var(--color-second)'}} id='brand' ref={brandRef} defaultValue={2} >
                            <option value="Uniqlo" >Uniqlo</option>
                            <option value="Beams" >Beams</option>
                        </select>
                    </div>
                </div>
                    {/* 送出 */}
                    <div className='row d-flex justify-content-center mt-4 mb-2'>
                        <button className=" btn px-4 rounded-pill"
                            style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', width: '100px' }}
                            onClick={handleCommit} >新增</button>
                    </div>

            </form>
        </div>
    )
}

export default AddTagComment
