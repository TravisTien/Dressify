import MyLayout from '../layouts/MyLayout';
import AddTagControl from "./AddTagControl";
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Draggable from 'react-draggable';
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

function AddTag() {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectID, setSelectID] = useState('')

  // 標籤 array
  const [tagList, setTagList] = React.useState([
    {
      id: 0,
      content: "_",
    }
  ]);

  // 新增標籤
  function handleAddTag() {
    setTagList([...tagList, { id: (tagList.length), content: '_' }]);
  }

  // 編輯標籤
  function handleTagEdit() {
    // 選擇到的 id
    setSelectID((event.target.id))
    // console.log(tagList);

    setIsSliderVisible(true)
  }

  // 刪除標籤
  function handleTagDelete() {
    // 你選擇的ID
    let sID = parseInt(event.target.id)

    // 排除你選擇的，其餘的返還
    let newArray = tagList.filter((val) => {
      console.log(val);
      return val.id !== sID
    })
    setTagList(newArray);
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
      <div className="position- rounded-set-3 overflow-hidden" style={{ width: '300px', height: '395px' }}>
        <img onClick={handleAddTag} className="img-fluid" src="./src/assets/img/outfit.png" />
      </div>

      {/* Tag框 */}
      <div className='position-absolute'>
        {tagList.map (({ content, id }, index) => (
          content &&
          <Draggable defaultPosition={{ x: 100, y: 50 }} >
            {/* Tag組件 */}
            <div className='position-relative d-flex' style={{ width: '120px', height: '20px', backgroundColor: 'black', color: 'white' }} >{tagList[index].content}
              {/* 刪除按鈕 */}
              <div onClick={handleTagDelete} style={{ width: '50px', height: '20px', backgroundColor: '#fd971f' }} id={id} ></div>
              {/* 可以拖曳 */}
              <div style={{ width: '100px', height: '20px', backgroundColor: '#8ad72b' }} ></div>
              {/* 編輯按鈕 */}
              <div onClick={handleTagEdit} style={{ width: '50px', height: '20px', backgroundColor: '#4a4198' }} id={id} ></div>
            </div>
          </Draggable>
        ))}
      </div>

      {/* 上滑視窗 */}
      <div style={{ height: '492px' }}>
        {isSliderVisible &&
          <AddTagControl tagList={tagList} setTagList={setTagList} setIsSliderVisible={setIsSliderVisible} selectID={selectID} />
        }
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