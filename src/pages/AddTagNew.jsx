import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

function AddTagNew() {
    return (
        <div className=' d-flex flex-column align-items-center rounded-5 container' style={{ backgroundColor: '#ededed', border: '1px solid red', minHeight: '492px' }}>
            <div className='row'>
                <p className='text-center fontSet-3 py-4'>標註衣服</p>
            </div>

            {/* 按鈕 */}
            <div className='px-4 w-100 d-flex fontSet-2 justify-content-between mb-2'>
                <button className="DBTN-Select px-3 "> 從我的衣櫃</button>
                <button className="DBTN px-3"> 新增標註</button>
            </div>

            {/* 表單 */}
            <form className='row mt-5 px-4'>
                <div className="w-100 rounded-4" style={{ boxSizing: 'border-box', backgroundColor: '#cccccc' }}>
                    <label className="w-100 rounded-top-4 fontSet-1 ps-4 pt-4" style={{ backgroundColor: '#cccccc', height: '34px' }}>標註內容 :</label>
                    <hr />
                    <textarea name="" id="" className="w-100 rounded-bottom-4 ps-4"
                        style={{
                            backgroundColor: '#cccccc',
                            height: '150px',
                            boxSizing: 'border-box',
                            resize: 'none',
                            border: '0px'
                        }}
                    ></textarea>
                </div>

                <span className="row pb-3 mt-4">
                    <div className="mb-3 col bee">
                        <select defaultValue={2}>
                            <option value="1" >選擇類別：褲子</option>
                            <option value="2" >選擇類別：褲子</option>
                        </select>
                    </div>
                    <div className="mb-3 col bee">
                        <select defaultValue={2}>
                            <option value="1" >選擇尺寸：L</option>
                            <option value="2" >選擇尺寸：M</option>
                        </select>
                    </div>
                </span>

                <span className="row pb-3">
                    <div className="mb-3 col bee">
                        <select defaultValue={2}>
                            <option value="1" >選擇品牌：L</option>
                            <option value="2" >選擇品牌：Beams</option>
                        </select>
                    </div>
                    <span >
                    </span>
                </span>

                <span className="d-flex justify-content-center pb-5">
                    <button className="DBTN px-4">新增</button>
                </span>

            </form>
        </div>
    )
}

export default AddTagNew
