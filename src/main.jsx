import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

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
import {TravisContextProvider} from './contexts/TravisContext.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Image",
    element: <TravisContextProvider><Image /></TravisContextProvider>
  },
  {
    path: "/ImgEditList",
    element: <TravisContextProvider><ImgEditList /></TravisContextProvider>
  },
  {
    path: "/ImgEditCrop",
    element: <TravisContextProvider><ImgEditCrop /></TravisContextProvider>
  },
  {
    path: "/ImgEditBrightness",
    element: <TravisContextProvider><ImgEditBrightness /></TravisContextProvider>
  },
  {
    path: "/ImgEditContrast",
    element: <TravisContextProvider><ImgEditContrast /></TravisContextProvider>
  },
  {
    path: "/ImgEditSaturate",
    element: <TravisContextProvider><ImgEditSaturate /></TravisContextProvider>
  },
  {
    path: "/AddTag",
    element: <TravisContextProvider><AddTag /></TravisContextProvider>
  },
  {
    path: "/AddTagCloset",
    element: <TravisContextProvider><AddTagCloset /></TravisContextProvider>
  },
  {
    path: "/AddTagComment",
    element: <TravisContextProvider><AddTagComment /></TravisContextProvider>
  },
  {
    path: "/OutfitDescription",
    element: <TravisContextProvider><OutfitDescription /></TravisContextProvider>
  },
  {
    path: "/Outfit",
    element: <Outfit />
  },
  {
    path: "/OutfitEdit",
    element: <OutfitEdit />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)