import React,{ useContext, useRef } from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

import TravisContext from "../contexts/TravisContext";

function AddTagComment({setIsSliderVisible, selectID }) {
    const {tagList} = useContext(TravisContext)
    const typeRef = useRef(null);
    const sizeRef = useRef(null);
    const brandRef = useRef(null);
    const commentRef = useRef(null);

    function handleCommit(event){
        event.preventDefault()
        
        tagList[selectID].content = brandRef.current.value; // 把撈到的牌子 放入對應的 content
        setIsSliderVisible(false);
    }

    return (
        <div className=' d-flex flex-column align-items-center rounded-5 container'>
            {/* 表單 */}
            <form className='row mt-5'>
                {/* Comment */}
                <div className="w-100 rounded-4" style={{ backgroundColor: '#f2f2f2', border: '1px solid hsl(0, 0%, 15%)' }}>
                    <label className="rounded-top-4 fontSet-1 ps-3 pt-3" style={{ backgroundColor: '#f2f2f2' }}>標註內容 :</label>
                    <hr />
                    <textarea ref={commentRef} className="w-100 ps-4"
                        style={{
                            backgroundColor: '#f2f2f2',
                            outline: 'none',
                            height: '80px',
                            resize: 'none',
                            border: '0px'
                        }}
                    >Nier</textarea>
                </div>

                {/* 選項 */}
                <div className="d-flex mt-4 px-0 d-flex">
                    {/* 類型 */}
                    <div className="mb-3" style={{ position: 'relative' }}>
                        <select ref={typeRef} className='px-3 DSelect' defaultValue={2} >
                            <option value="1" >類型：褲子</option>
                            <option value="2" >類型：褲子</option>
                        </select>
                        <div style={{ top: '0px', right: '0px', position: 'absolute', width: '27px', height: '30px', backgroundColor: '#5551ff', borderRadius: '0rem 1.5rem 1.5rem 0rem', textAlign: 'center', border: '1px solid hsl(0, 0%, 15%)', lineHeight: 2.5 }}>
                            <img src="../src/assets/img/icon/ArrowDown.png" alt="" />
                        </div>
                    </div>
                    
                    {/* 尺寸 */}
                    <div className="mb-3" style={{ position: 'relative' }}>
                        <select ref={sizeRef} className='px-3 DSelect' defaultValue={2} >
                            <option value="1" >尺寸：S</option>
                            <option value="2" >尺寸：M</option>
                        </select>
                        <div style={{ top: '0px', right: '0px', position: 'absolute', width: '27px', height: '30px', backgroundColor: '#5551ff', borderRadius: '0rem 1.5rem 1.5rem 0rem', textAlign: 'center', border: '1px solid hsl(0, 0%, 15%)', lineHeight: 2.5 }}>
                            <img src="../src/assets/img/icon/ArrowDown.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4 px-0 d-flex">
                    {/* 牌子 */}
                    <div className="mb-3" style={{ position: 'relative' }}>
                        <select ref={brandRef} className='px-3 DSelect' defaultValue={2} >
                            <option value="Uniqlo" >品牌：Uniqlo</option>
                            <option value="Beams" >品牌：Beams</option>
                        </select>
                        <div style={{ top: '0px', right: '0px', position: 'absolute', width: '27px', height: '30px', backgroundColor: '#5551ff', borderRadius: '0rem 1.5rem 1.5rem 0rem', textAlign: 'center', border: '1px solid hsl(0, 0%, 15%)', lineHeight: 2.5 }}>
                            <img src="../src/assets/img/icon/ArrowDown.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 送出 */}
                <span className="d-flex justify-content-center py-4">
                    <button onClick={handleCommit} className="DBTN-Black px-4">新增</button>
                </span>
            </form>
        </div>
    )
}

export default AddTagComment
