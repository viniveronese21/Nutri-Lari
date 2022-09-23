import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './assets/pages/Main'
import Servicos from './assets/pages/Servicos'
import Consulta from './assets/pages/Consulta'
import Contato from './assets/pages/Contato'
import Header from './assets/components/header'

export function AppRoute() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Servicos' element={<Servicos />} />
        <Route path='/Consultas' element={<Consulta />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}
