import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Logo from '../../img/icons-home.svg'
import { Container, ContainerFrase } from './styles'

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <img src={Logo} alt="logo" />
          <ContainerFrase>
            <div>
              <strong>Acompanhamento</strong>
              <p>O nosso processo é importante.</p>
            </div>
            <div>
              <strong>Consultas Online</strong>
              <p>Consultas no conforto da sua casa.</p>
            </div>
            <div>
              <strong>Fale Conosco</strong>
              <p> Queremos saber a coisa mais valiosa coisa. Sua opinião.</p>
            </div>
          </ContainerFrase>
        </div>
      </Container>
      <Footer />
    </>
  )
}
