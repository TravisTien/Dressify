import React from 'react'
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Main.css'

// Swiper 的東東
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function AddTagCloset({ setIsSliderVisible, tagList, setTagListShow, selectID }) {
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
        setFilter(val === 'ALL' ? [...clothes] : [result()]);
    }

    // 選到的物件 title 放到 useState裡面
    function handleSelect() {
        // 把單品名稱放到，你點擊的 tag list 中
        tagList.current[selectID].content= event.target.getAttribute('dataTitle')
        
        // 把修改完的 array 放到 要渲染的
        setTagListShow(tagList.current)
        setIsSliderVisible(false);
    }

    return (
        <div className=' d-flex flex-column align-items-center rounded-5 container position-absolute bottom-0 end-0' style={{ width: '375px', backgroundColor: '#ededed', border: '1px solid red', height: '492px', overflowY: 'auto' }}>
            <div className='row'>
                <p className='text-center fontSet-3 py-4'>標註衣服</p>
            </div>

            {/* 按鈕 */}
            <div className='px-4 w-100 d-flex fontSet-2 justify-content-between mb-2'>
                <button className="DBTN-Select px-3 "> 從我的衣櫃</button>
                <button className="DBTN px-3"> 新增標註</button>
            </div>
            <div className='ps-4 w-100 mb-5'>
                <select className='col px-2' onChange={handle} >
                    <option value="ALL" defaultValue>顯示全部</option>
                    {clothes.map(({ type }) => <option key={type} value={type}>{type}</option>)}
                </select>
                <span className='col'></span>
            </div>

            {/* 把每個類型的單品顯示出來 */}
            {filter.map(({ items, type }) => <div className='row w-100 px-4' key={type}>
                <p className='fontSet-2 text-end pe-5'>{type}</p>
                <hr />
                {/* 圖片 */}
                <Swiper
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={10}
                    grabCursor={true}
                    className='mySwiper mb-5'
                    style={{ width: '375px' }}
                >
                    {items.map((value) => {
                        return (
                            <SwiperSlide style={{ width: '100%' }}>
                                <img onClick={handleSelect} dataTitle={value.title} className='rounded-set-3' style={{ width: '100%' }} src={value.image} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>)}

        </div>
    )
}

export default AddTagCloset
