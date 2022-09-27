import React from 'react'
import { TopHeader, Img, Nav, Button } from './styles.jsx'
import Logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  const pathname = String(window.location.pathname)
    .toLowerCase()
    .replace('/', '')

  return (
    <TopHeader>
      <Link to='/'>
        <Img src={Logo} alt='Larssia Longobardi' />
      </Link>
      <Nav pathname={pathname}>
        <Link id='link-home' to='/'>
          Home
        </Link>
        <Link id='link-servicos' to='/Servicos'>
          Serviços
        </Link>
        <Link id='link-consultas' to='/Consultas'>
          Consultas
        </Link>
        <Link id='link-contato' to='/Contato'>
          Contato
        </Link>
        <Button
          onClick={() => {
            window.location.href = 'https://wa.me/5519998731628'
          }}
        >
          Agendar
        </Button>
      </Nav>
    </TopHeader>
  )
}
