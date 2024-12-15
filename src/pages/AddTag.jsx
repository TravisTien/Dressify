import React, { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import '../css/CssReset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Dressify.css'


// 各別頁面
import MyLayout from '../layouts/MyLayout';
import AddTagControl from "./AddTagControl";
import TravisContext from "../contexts/TravisContext";



function AddTag() {
  const { CroppedSrc, imageSrc, setTagList, tagList, filterStyle } = useContext(TravisContext)
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectID, setSelectID] = useState('');
  const [idCounter, setIdCounter] = useState(tagList.length); //讓標籤有獨一 ID

  // 新增標籤
  function handleAddTag() {
    setTagList([...tagList, {
      id: idCounter,
      content:'這是什麼服飾',
      x: 150,
      y: 100
    }]);

    setIdCounter(idCounter + 1);
    console.log(tagList);
  }
  // 編輯標籤
  function handleTagEdit(event) {
    // 選擇到的 id
    setSelectID((event.target.id))
    setIsSliderVisible(true)
  }
  // 刪除標籤
  function handleTagDelete(event) {
    
    let selectId = parseInt(event.target.id)
    console.log(selectId);

    // 過濾掉刪除的標籤
    let newArray = tagList.filter(({ id }) => id !== selectId)
    setTagList(newArray)
  }
  // 更新標籤位置
  const handleTagStop = (event, data) => {
    event.stopPropagation()
    let selectId = parseInt(data.node.id) //找到 陣列中的編號
    let newArray = tagList.map((tag) => tag.id === selectId ? { ...tag, x: data.x, y: data.y } : tag)
    setTagList(newArray)
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
    <div className="d-flex flex-column px-5" style={{ height: '543px' }}>
      <span className='text-center text-s letterSpacing-2 mt-4 mb-3'>穿搭照片</span>

      {/* 圖片 */}
      <div className="w-100 rounded-set-3 overflow-hidden mb-4" style={{ position: 'relative' }}>
        <div style={filterStyle} className="w-100 rounded-set-3 overflow-hidden">
          <img className="img-fluid" src={CroppedSrc || imageSrc} />
        </div>
      </div>

      {/* Tag框 */}
      <div className='position-absolute ' style={{ top: 105, height: '395px', width: '300px' }} onClick={handleAddTag}>
        {tagList.map(({ content, id, x, y }, index) => (
          content &&
          <Draggable key={id} onStop={handleTagStop} position={{ x, y }} bounds='parent'  >
            {/* Tag組件 */}
            <div id={id} className='position-relative rounded-circle' onClick={(event) => event.stopPropagation()} style={{ width: '15px', height: '15px', backgroundColor: 'var(--color-highlight)', border: '1px solid var(--color-white)', color: '#5551ff', cursor: 'move' }} >
              {/* Tag框 */}
              <div className='position-absolute rounded-pill' style={{ top: 30, left: -55, border: '1px solid', backgroundColor: 'var(--color-white)', width:'145px'}}>
                {/* 刪除按鈕 */}
                <div className='position-absolute rounded-circle' onClick={handleTagDelete} style={{ left: -12, top: -10, width: '20px', height: '20px', cursor: 'pointer'}} id={id}>
                  <img src="src/assets/img/icon/cross-circle-white.svg" alt=""  width='25px' id={id}/>
                </div>
                {/* 拖曳 */}
                <div className='text-center text-m' style={{ lineHeight: '30px', width: '130px', height: '30px', color: 'var(--color-black)', cursor: 'move'}} >{tagList[index].content}</div>
                {/* 編輯 */}
                <div className='position-absolute' onClick={handleTagEdit} style={{ top: -6, right: 6, width: '30px', height: '30px', transform: 'rotate(180deg)', cursor: 'pointer'}} id={id} >
                  <img src="src/assets/img/icon/angle-left.svg" alt=""  width='15px'/>
                </div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>

      {/* 上滑視窗 */}
      <div>
        {isSliderVisible &&
          <AddTagControl setIsSliderVisible={setIsSliderVisible} selectID={selectID} />
        }
      </div>

      {/* 上下頁 */}
      <div className="d-flex justify-content-between  w-100">
        <button className="text-m btn rounded-pill px-3" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }} onClick={handlePrev}>上一步</button>
        <button className="text-m btn rounded-pill px-3" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }} onClick={handleNext}>下一步</button>
      </div>
    </div>
  </MyLayout>)
}

export default AddTag