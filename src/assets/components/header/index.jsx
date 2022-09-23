import React from 'react'
import { TopHeader, Img, Nav, Button } from './styles.jsx'
import Logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <TopHeader>
      <Img src={Logo} alt='Larssia Longobardi' />
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/Servicos'>Serviços</Link>
        <Link to='/Consultas'>Consultas</Link>
        <Link to='/Contato'>Contato</Link>
        <Button className='Bnt-hover'>Agendar</Button>
      </Nav>
    </TopHeader>
  )
}
