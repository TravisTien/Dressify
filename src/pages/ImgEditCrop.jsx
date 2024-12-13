import React from 'react'
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'


function ImgEditCrop() {
    function handleSave() {
    }

    function handlePrev() {
        setType('list')
    }

    return (<>
        <span className='text-center fontSet-3 my-3'>裁切</span>

        <div className="w-100 d-flex justify-content-between mt-4">
            <button className="btn btn-dark rounded-set-3" onClick={handlePrev}>取消修改</button>
            <button className="btn btn-dark rounded-set-3" onClick={handleSave}>儲存修改</button>
        </div>
    </>)
}

export default ImgEditCrop
