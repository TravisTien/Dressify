import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Image from './pages/Image'
import ImgEditList from './pages/ImgEditList.jsx'
import ImgEditBrightness from './pages/ImgEditBrightness.jsx'
import ImgEditContrast from './pages/ImgEditContrast.jsx'
import ImgEditSaturate from './pages/ImgEditSaturate.jsx'
import ImgEditCrop from './pages/ImgEditCrop.jsx'


import AddTag from './pages/AddTag'
import AddTagCloset from './pages/AddTagCloset'
import AddTagComment from './pages/AddTagComment'
import OutfitDescription from './pages/OutfitDescription'
import Outfit from './pages/Outfit'
import OutfitEdit from './pages/OutfitEdit'

// Demo區
// import ReactDraggable from './demo/ReactDraggable'
// import CanvasDemo2 from './demo/CanvasDemo2.jsx'
// import FilterV5 from "./demo/FilterV5.jsx";
// import FilterCss from "./demo/FilterCss.jsx";
import CropperDemo from "./demo/CropperDemo.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CropperDemo />
  },
  {
    path: "/Image",
    element: <Image />
  },
  {
    path: "/ImgEditCrop",
    element: <ImgEditCrop />
  },
  {
    path: "/ImgEditList",
    element: <ImgEditList />
  },
  {
    path: "/ImgEditBrightness",
    element: <ImgEditBrightness />
  },
  {
    path: "/ImgEditContrast",
    element: <ImgEditContrast />
  },
  {
    path: "/ImgEditSaturate",
    element: <ImgEditSaturate />
  },
  {
    path: "/AddTag",
    element: <AddTag />
  },
  {
    path: "/AddTagCloset",
    element: <AddTagCloset />
  },
  {
    path: "/AddTagComment",
    element: <AddTagComment />
  },
  {
    path: "/OutfitDescription",
    element: <OutfitDescription />
  },
  {
    path: "/Outfit",
    element: <Outfit />
  },
  {
    path: "/OutfitEdit",
    element: <OutfitEdit />
  },
  {
    path: "/OutfitDescription",
    element: <OutfitDescription />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)