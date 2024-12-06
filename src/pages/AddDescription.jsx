import React, { useState, useRef } from 'react'
import MyLayout from '../layouts/MyLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

function AddDescription() {
    const inputRef = useRef(null);
    const [select, setSelect] = useState('')
    const [sceneList, setSceneList] = useState(['約會', '上班', '逛街', '會議', '運動'])

    function handleClick() {
        // 把輸入的值放到陣列
        setSceneList([...sceneList, inputRef.current.value])
        // 把輸入框清空
        inputRef.current.value = null;
    }

    // 把選到的物件排除
    function handleDel() {
        setSceneList(sceneList.filter((value) => {
            return value != select
        }))
    }
    // 挑出選擇的物件
    function handelSelect() {
        // 選到不同的時候
        // event.target.setAttribute('style','border:1px solid')
        console.log(event.target);

        event.target.setAttribute('style', 'border:1px solid')

        setSelect(event.target.innerText);
    }

    return (
        <MyLayout>
            <div className="d-flex flex-column container" style={{ width: '375px', backgroundColor: '#ededed' }}>
                <div className='row'>
                    <p className='text-center fontSet-3 py-4'>標註衣服</p>
                </div>

                <div className='row mb-5'>
                    <div className='col'>
                        <img className='w-100 rounded-5' src="./src/assets/img/picture1.jpg" />
                    </div>

                    <div className='col sceneBox '>
                        <div className='row rounded-4' style={{ backgroundColor: '#cccccc' }}>
                            {/* 輸入 */}
                            <div className='d-flex pt-3 mb-3 d-flex justify-content-between'>
                                <input className='rounded-4 ps-3' type="text" ref={inputRef} placeholder='請輸入場合' style={{ width: '100px', border: '0px', backgroundColor: '#f2f2f2' }} />
                                <span>
                                    <button className='rounded-circle' onClick={handleClick}>+</button>
                                    <button className='rounded-circle' onClick={handleDel}>x</button>
                                </span>
                            </div>
                            <hr />
                            <div className='d-flex w-100 pb-3 flex-wrap'>
                                {sceneList.map((val) => {
                                    return <div className='px-3 hashTag me-2 mb-2' onClick={handelSelect}>{val}</div>
                                })}
                            </div>
                        </div>
                        <div className='row rounded-4' style={{ backgroundColor: '#cccccc' }}>
                            {/* 輸入 */}
                            <div className='d-flex pt-3 mb-3 d-flex justify-content-between'>
                                <input className='rounded-4 ps-3' type="text" ref={inputRef} placeholder='請輸入場合' style={{ width: '100px', border: '0px', backgroundColor: '#f2f2f2' }} />
                                <span>
                                    <button className='rounded-circle' onClick={handleClick}>+</button>
                                    <button className='rounded-circle' onClick={handleDel}>x</button>
                                </span>
                            </div>
                            <hr />
                            <div className='d-flex w-100 pb-3 flex-wrap'>
                                {sceneList.map((val) => {
                                    return <div className='px-3 hashTag me-2 mb-2' onClick={handelSelect}>{val}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 d-flex flex-column description rounded-4 mb-4'>
                    <label htmlFor="" className='fontSet-2 ps-4 pt-3' style={{height:'34px'}}>新增描述</label>
                    <hr />
                    <textarea name="" id="" className='fontSet-2 ps-4 rounded-4' style={{outline: 'none',border:'0px', backgroundColor:'#cccccc', resize: 'none'}}></textarea>
                </div>


            </div>

        </MyLayout>
    )
}

export default AddDescription
