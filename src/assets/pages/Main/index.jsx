import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Acompanhamento from '../../img/acompanhamento.svg'
import Consultas from '../../img/consultas.svg'
import FaleConosco from '../../img/faleConosco.svg'
import { Container, ContainerFrase, ContainerHeader } from './styles'

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <ContainerHeader>
          <div>
            <h1>Cuidando da sua saúde e melhor qualidadede vida</h1>
            <span>Que a alimentação seja o seu único remédio.</span>
            <button
              onClick={() => {
                window.location.href = 'https://wa.me/5519998731628'
              }}
            >
              Agendar Sua Consulta
            </button>
          </div>
        </ContainerHeader>
        <ContainerFrase>
          <div>
            <img src={Acompanhamento} alt='Acompanhamento' />
            <strong>Acompanhamento</strong>
            <p>O nosso processo é importante.</p>
          </div>
          <div>
            <img src={Consultas} alt='Consultas' />
            <strong>Consultas Online</strong>
            <p>Consultas no conforto da sua casa.</p>
          </div>
          <div>
            <img src={FaleConosco} alt='FaleConosco' />
            <strong>Fale Conosco</strong>
            <p> Queremos saber a coisa mais valiosa coisa.</p> Sua opinião.
          </div>
        </ContainerFrase>
      </Container>
      <Footer />
    </>
  )
}
