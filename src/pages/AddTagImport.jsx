import React from 'react'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function AddTagImport() {
    const [clothes, setClothes] = useState([])
    const [filter, setFilter] = useState([])

    // API 取值
    React.useEffect(() => {
        async function callAPI() {
            let response = await fetch("../../public/clothes.json");
            let json = await response.json();
            setClothes(json.categories)
            setFilter(json.categories)
        }
        callAPI()
    }, [])

    // select 改變時，取得選取的值
    function handle() {
        let val = event.target.value
        // 把對應的類型資料拿出來
        function result() { return clothes.find(({ type }) => type == val) }

        // 如果選擇顯示全部，就用原始資料，不然就拿對應類型
        setFilter(val==='ALL' ? [...clothes] : [result()]);
    }

    return (
        <div className='d-flex flex-column align-items-center container' style={{ border: '1px solid red', minHeight: '492px' }}>
            <div className='row'>
                <p className='text-center'>標註衣服</p>
            </div>

            {/* 按鈕 */}
            <div className='row'>
                <button className="btn btn-dark col"> 從我的衣櫃</button>
                <button className="btn btn-dark col"> 新增標註</button>
            </div>
            <div className='row'>
                <select className='form-select col' onChange={handle} >
                    <option value="ALL" defaultValue>顯示全部</option>
                    {clothes.map(({ type }) => <option key={type} value={type}>{type}</option>)}
                </select>
                <span className='col'></span>
            </div>

            {/* 衣櫃內容 */}
            {filter.map((data) => {
                return (
                    <div className='row' key={data.type}>
                        <p>{data.type}</p>
                        <hr />
                        {data.items.map((value) => {
                            // console.log(value);
                            // console.log(value.title);
                            // console.log(value.image);
                            return <img style={{ width: '80px' }} src={value.image} alt="" />
                        })}
                    </div>
                )
            })}

        </div>
    )
}

export default AddTagImport
