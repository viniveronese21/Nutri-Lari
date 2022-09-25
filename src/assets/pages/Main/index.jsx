import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Acompanhamento from '../../img/acompanhamento.svg'
import Consultas from '../../img/consultas.svg'
import FaleConosco from '../../img/faleConosco.svg'
import { Container, ContainerFrase } from './styles'

export default function Main() {
  return (
    <>
      <Header />
      <Container>


        <ContainerFrase>
          <div>
            <img src={Acompanhamento} alt="Acompanhamento" />
            <strong>Acompanhamento</strong>
            <p>O nosso processo é importante.</p>
          </div>
          <div>
            <img src={Consultas} alt="Consultas" />
            <strong>Consultas Online</strong>
            <p>Consultas no conforto da sua casa.</p>
          </div>
          <div>
            <img src={FaleConosco} alt="FaleConosco" />
            <strong>Fale Conosco</strong>
            <p> Queremos saber a coisa mais valiosa coisa.</p> Sua opinião.
          </div>
        </ContainerFrase>

      </Container>
      <Footer />
    </>
  )
}
