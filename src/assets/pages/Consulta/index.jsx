import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import {
  Container,
  ImgContainer,
  TextBox,
  Columns,
  Img,
  Title,
  List,
  Btn,
} from './style'
import Online from '../../img/online.png'
import Presencial from '../../img/presencial.png'

export default function Consulta() {
  return (
    <>
      <Header />
      <Container>
        <TextBox>
          <Title>Todas as formas de consulta</Title>
          <span>
            As melhores formas de consulta pra se encaixar no que você precisa
          </span>
        </TextBox>
        <ImgContainer>
          <Columns>
            <Img src={Online} />
            <List>
              <h1>ONLINE</h1>
              <li>Questionário pré-consulta</li>
              <li>Anamnese</li>
              <li>Avaliação por foto</li>
              <li>Cardápio</li>
            </List>
            <Btn>AGENDAR</Btn>
          </Columns>
          <Columns>
            <Img src={Presencial} />
            <List>
              <h1>PRESENCIAL</h1>
              <li>Avaliação Antropométrica </li>
              <li>Pesagem</li>
              <li>Cardápio</li>
              <li>Reunião Semanal</li>
            </List>
            <Btn>AGENDAR</Btn>
          </Columns>
        </ImgContainer>
      </Container>
      <Footer />
    </>
  )
}
