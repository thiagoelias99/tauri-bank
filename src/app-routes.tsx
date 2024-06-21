import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home/home-page'
const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="*" element={<div>Pagina Não Encontrada</div>} />
    </Routes>
  </BrowserRouter>
)
export default AppRoutes