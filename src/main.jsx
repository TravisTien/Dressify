import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import './css/Dressify.css'
import EditImg from './EditImg.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='d-flex flex-column justify-content-between' style={{ height: '100vh' }}>
      <div>
        <img src='../src/assets/img/ToolBarDown.png' />
        <img src='../src/assets/img/Header.png' />
      </div>

      <EditImg />

      <div>
        <img src='../src/assets/img/Navbar.png' />
        <img src='../src/assets/img/ToolBarUp.png' />
      </div>
    </div>
  </StrictMode>,
)
