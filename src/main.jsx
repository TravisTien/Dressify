import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddTag_3 from './pages/AddTag_3'
import AddTagClothset from './pages/AddTagClothset'
import AddTagNew from './pages/AddTagNew'
import AddDescription from './pages/AddDescription'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddDescription />
  </StrictMode>,
)
