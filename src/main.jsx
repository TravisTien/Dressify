import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Image from './pages/Image'
import ImgEdit from './pages/ImgEdit'
import AddTag from './pages/AddTag'
import AddTagCloset from './pages/AddTagCloset'
import AddTagComment from './pages/AddTagComment'
import OutfitDescription from './pages/OutfitDescription'
import Outfit from './pages/Outfit'
import OutfitEdit from './pages/OutfitEdit'

// Demo區
import ReactDraggable from './demo/ReactDraggable'
import CanvasDemo2 from './demo/CanvasDemo2.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Image",
    element: <Image />
  },
  {
    path: "/ImgEdit",
    element: <ImgEdit />
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