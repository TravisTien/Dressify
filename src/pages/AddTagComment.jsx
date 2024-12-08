import React from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

function AddTagComment() {
    return (
        <div className=' d-flex flex-column align-items-center rounded-5 container px-5' style={{ backgroundColor: '#ededed', border: '1px solid #5551ff', height: '492px', width: '375px' }}>
            <p className='text-center fontSet-3 py-4'>標註衣服</p>

            {/* 按鈕 */}
            <div className='w-100 d-flex fontSet-2 justify-content-between mb-2'>
                <button className="DBTN-Select px-3 "> 從我的衣櫃</button>
                <button className="DBTN px-3"> 新增標註</button>
            </div>

            {/* 表單 */}
            <form className='row mt-5'>
                {/* 標註內容 */}
                <div className="w-100 rounded-4" style={{ backgroundColor: '#f2f2f2', border: '1px solid hsl(0, 0%, 15%)' }}>
                    <label className="rounded-top-4 fontSet-1 ps-3 pt-3" style={{ backgroundColor: '#f2f2f2' }}>標註內容 :</label>
                    <hr />
                    <textarea className="w-100 ps-4"
                        style={{
                            backgroundColor: '#f2f2f2',
                            outline: 'none',
                            height: '80px',
                            resize: 'none',
                            border: '0px'
                        }}
                    ></textarea>
                </div>

                {/* 選項 */}
                <div className="d-flex mt-4 px-0 d-flex">
                    <div className="mb-3" style={{ position: 'relative' }}>
                        <select className='px-3 DSelect' defaultValue={2} >
                            <option value="1" >類型：褲子</option>
                            <option value="2" >類型：褲子</option>
                        </select>
                        <div style={{ top: '0px', right: '0px', position: 'absolute', width: '27px', height: '30px', backgroundColor: '#5551ff', borderRadius: '0rem 1.5rem 1.5rem 0rem', textAlign: 'center', border: '1px solid hsl(0, 0%, 15%)', lineHeight: 2.5 }}>
                            <img src="../src/assets/img/icon/ArrowDown.png" alt="" />
                        </div>
                    </div>
                    <div className="mb-3" style={{ position: 'relative' }}>
                        <select className='px-3 DSelect' defaultValue={2} >
                            <option value="1" >類型：褲子</option>
                            <option value="2" >類型：褲子</option>
                        </select>
                        <div style={{ top: '0px', right: '0px', position: 'absolute', width: '27px', height: '30px', backgroundColor: '#5551ff', borderRadius: '0rem 1.5rem 1.5rem 0rem', textAlign: 'center', border: '1px solid hsl(0, 0%, 15%)', lineHeight: 2.5 }}>
                            <img src="../src/assets/img/icon/ArrowDown.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-4 px-0 d-flex">
                    <div className="mb-3" style={{ position: 'relative' }}>
                        <select className='px-3 DSelect' defaultValue={2} >
                            <option value="1" >品牌：Beams</option>
                            <option value="2" >品牌：Beams</option>
                        </select>
                        <div style={{ top: '0px', right: '0px', position: 'absolute', width: '27px', height: '30px', backgroundColor: '#5551ff', borderRadius: '0rem 1.5rem 1.5rem 0rem', textAlign: 'center', border: '1px solid hsl(0, 0%, 15%)', lineHeight: 2.5 }}>
                            <img src="../src/assets/img/icon/ArrowDown.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 送出 */}
                <span className="d-flex justify-content-center py-4">
                    <button className="DBTN-Black px-4">新增</button>
                </span>
            </form>
        </div>
    )
}

export default AddTagComment
