import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddTag_3 from './pages/AddTag_3'
import AddTagImport from './pages/AddTagImport'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddTagImport />
  </StrictMode>,
)
