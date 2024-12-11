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
    <div className="position-relative px-5 d-flex flex-column align-items-center" style={{ height: '505px' }}>

      {/* 當前狀態 */}
      <span className='text-center fontSet-3 my-3'>新增標註</span>

      {/* 圖片 */}
      <div className="rounded-set-3 overflow-hidden" style={{ width: '300px', height: '395px' }}>
        <img onClick={handleAddTag} className="img-fluid" draggable="false" src="./src/assets/img/outfit.png" />
      </div>

      {/* Tag框 */}
      <div className='position-absolute ' style={{ height: 20 }}>
        {tagList.map(({ content, id }, index) => (
          content &&
          <Draggable bounds={{ top: 45, left: -85, right: 85, bottom: 410 }} defaultPosition={{ x: 0, y: 200 }} >
            {/* Tag組件 */}
            <div className='position-relative rounded-circle ' style={{ width: '20px', height: '20px', backgroundColor: '#5551ff', color: '#5551ff' }} >
              <div className='position-absolute' style={{ top: 30, left:-55, border:'1px solid'}}>
                {/* 刪除按鈕 */}
                <div className='position-absolute rounded-circle' onClick={handleTagDelete} style={{ left:-10, top:-10, width: '20px', height: '20px', backgroundColor: '#f2f2f2'}} id={id}></div>
                {/* 可以拖曳 */}
                <div className='text-center' style={{ width: '130px', height: '30px', backgroundColor: '#8ad72b' }} >{tagList[index].content}</div>
                {/* 編輯按鈕 */}
                <div className='position-absolute' onClick={handleTagEdit} style={{ top:0, right:0, width: '30px', height: '30px', backgroundColor: '#4a4198' }} id={id} ></div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>

      {/* 上滑視窗 */}
      <div>
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