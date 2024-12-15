//CSS、套件
import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

// 各別頁面
import MyLayout from '../layouts/MyLayout';
import TravisContext from "../contexts/TravisContext";


function OutfitDescription() {
    const { imageSrc, filterStyle, CroppedSrc,
        tittle, setTittle,
        comment, setComment,
        season, setSeason,
        sceneList, setSceneList,
    } = useContext(TravisContext)
    let navigate = useNavigate();
    const inputRef = useRef(null);

    // 新增場合
    function handleChange(event) {
        let isExist = sceneList.indexOf(event.target.value) //看清單中有沒有

        // 清單沒有就新增進去
        isExist >= 0 ? console.log('清單中有了') : sceneList.push(event.target.value); setSceneList([...sceneList])
        event.target.value = 'none'
    }
    // 刪除場合
    function handleDel(event) {
        // 把選到的踢出陣列
        setSceneList(sceneList.filter((val) => { return val !== event.target.id }))
    }

    // 改變季節
    const handleSeasonChange = (event) => {
        setSeason(event.target.value)
    }
    // 改變註解
    const handleCommentInput = (event) => {
        setComment(event.target.value)
    }
    // 改變名稱
    const handleTittleInput = (event) => {
        setTittle(event.target.value)
    }

    // 頁面切換
    function handlePrev() {
        navigate(-1)
    }
    function handleNext() {
        navigate("/")
    }

    return (
        <MyLayout>
            <div className="d-flex flex-column container" style={{ width: '270px' }}>
                <p className='text-center fontSet-3 py-4'>標註衣服</p>

                {/* 照片 */}
                <div className='m-auto mb-4' style={{ ...filterStyle, width: '205px' }}>
                    <img className='w-100 rounded-5' src={CroppedSrc || imageSrc} />
                </div>

                {/* 穿搭名稱 */}
                <div className='row mb-3'>
                    <label className='form-label'>穿搭名稱</label>
                    <input onInput={handleTittleInput} value={tittle} className='form-control bg-gray rounded-3' placeholder='輸入穿搭名稱' type="text" />
                </div>

                {/* 備註 */}
                <div className='row mb-3'>
                    <label className='form-label'>備註</label>
                    <textarea onInput={handleCommentInput} value={comment} className='form-control bg-gray' placeholder='新增備註' style={{ resize: 'none' }}></textarea>
                </div>

                <div className='row bg-gray rounded-3 mb-3 pb-3'>
                    <div className='container ps-4'>
                        {/* 季節 */}
                        <div className='row pt-3'>
                            <label className='col-2 col-form-label'>季節</label>
                            <div className='col-8'>
                                <select onChange={handleSeasonChange} className='form-select rounded-3' value={season}>
                                    <option value="season1">春季穿搭</option>
                                    <option value="season2">夏季穿搭</option>
                                    <option value="season3">秋季穿搭</option>
                                    <option value="season4">冬季穿搭</option>
                                </select>
                            </div>
                            <span className='col-4'></span>
                        </div>

                        {/* 場合 */}
                        <div className='row pt-3 mb-3'>
                            <label className='col-2 col-form-label'>場合</label>
                            <div className='col-8'>
                                <select onChange={handleChange} className='form-select rounded-3' name="" id="">
                                    <option value="none">選擇場合</option>
                                    <option value="約會">約會</option>
                                    <option value="工作">工作</option>
                                    <option value="運動">運動</option>
                                    <option value="會議">會議</option>
                                    <option value="逛街">逛街</option>
                                </select>
                            </div>
                            <span className='col-4'></span>
                        </div>

                        {/* 場合tag */}
                        <div className='row g-3 w-100'>
                            {sceneList.map((val) => (
                                <div className='col-4' key={val}>
                                    <div className='d-inline py-1 px-3 rounded-4' style={{ border: '1px solid' }}>
                                        {val}
                                        <img id={val} onClick={handleDel} className='ms-1' src="src\assets\img\icon\cancel.png" style={{ cursor: 'pointer' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 上下頁 */}
                <div className="d-flex justify-content-between my-4 w-100">
                    <button className="DBTN-Black" onClick={handlePrev}>上一頁</button>
                    <button className="DBTN-Black" onClick={handleNext}>儲存</button>
                </div>
            </div>
        </MyLayout>
    )
}

export default OutfitDescription
