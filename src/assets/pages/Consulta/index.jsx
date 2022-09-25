import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {Container, Column, Columns, Img, Texts, List} from './style'
import Online from '../../img/online.png'
import Presencial from '../../img/presencial.png'

export default function Consulta() {
  return (
    <>
      <Header/>

      <Container>

        <Texts>
          <h1>Todas as Formas de consultas</h1>
          <span>As melhores formas de consulta pra se encaixar no que você precisa</span>
        </Texts>

        <Columns>

          <Column>
              <Img src={Online} alt="Online" />
              <h1>ONLINE</h1>
              <List>
                <li>Questionário pré-consulta</li>
                <li>Anamnese</li>
                <li>Avaliação por foto</li>
                <li>Cardápio</li>
              </List>
            </Column>

            <Column>
              <Img src={Presencial}/>
              <h1>PRESENCIAL</h1>
              <List>
                <li>Avaliação Antropométrica </li>
                <li>Pesagem </li>
                <li>Cardápio</li>
                <li>Reunião Semanal</li>
              </List>

            </Column>

        </Columns>

      </Container>

      <Footer/>
    </>
  )
}
