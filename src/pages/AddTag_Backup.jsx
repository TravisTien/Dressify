import MyLayout from '../layouts/MyLayout';
import AddTagCloset from "./AddTagCloset";
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function AddTag() {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectID, setSelectID] = useState('')
  const tagList = useRef([

  ])

  // 標籤 array
  const [tagListShow, setTagListShow] = React.useState([
    {
      id: 0,
      editID: "",
      content: "",
      x: 20,
      y: 30
    }
  ]);

  // 點擊新增標籤
  function handleAddTag() {
    let a = Math.floor(Math.random() * 200);
    tagList.current = [ ...tagList.current, { id: (tagList.current.length), content: '_', x: a, y: a }];
    setTagListShow(tagList.current);
  }
  // 進入標籤編輯
  function handleTagEdit() {
    // 選擇到的 id
    setSelectID(event.target.id)
    setIsSliderVisible(true)
  }

  // 頁面跳轉
  let navigate = useNavigate();
  function handlePrev() {
    navigate(-1)
  }
  function handleNext() {
    navigate("/OutfitDescription")
  }

  return (<MyLayout>
    <div className="px-5 d-flex flex-column align-items-center" style={{ height: '505px' }}>

      {/* 當前狀態 */}
      <span className='text-center fontSet-3 my-3'>新增標註</span>

      {/* 圖片 */}
      <div className="rounded-set-3 overflow-hidden" style={{ position: 'relative' }}>
        <img onClick={handleAddTag} className="img-fluid" src="./src/assets/img/outfit.png" />
      </div>

      {/* Tag框 */}
      {tagListShow.map(({content, id, x, y }, index) => (
        content &&
        <div id={id}
          onClick={handleTagEdit}
          style={{ top: x, left: y, width: 50, height: 50, backgroundColor: '#484594' }}
          className='position-absolute'>{tagListShow[index].content}
        </div>
      ))}

      {/* 上滑視窗 */}
      <div style={{ height: '492px' }}>
        {isSliderVisible && <AddTagCloset tagList={tagList} setIsSliderVisible={setIsSliderVisible} setTagListShow={setTagListShow} selectID={selectID} />}
      </div>

      {/* 上下頁 */}
      <div className="d-flex justify-content-between my-4 w-100">
        <button className="DBTN-Black" onClick={handlePrev}>上一步</button>
        <button className="DBTN-Black" onClick={handleNext}>下一步</button>
      </div>
    </div>
  </MyLayout>)
}

export default AddTag