import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddTag_3 from './pages/AddTag_3'
import AddTagClothset from './pages/AddTagClothset'
import AddTagNew from './pages/AddTagNew'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddTagNew />
  </StrictMode>,
)
