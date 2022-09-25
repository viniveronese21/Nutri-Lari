import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Container, ContainerForm, Form, Feedback } from './styles'

export default function Contato() {
  return (
    <>
      <Header/>
      <Container>
        <h1>Entre em contato</h1>
        <ContainerForm>
          <Form>
            <h3>Da um toque!</h3>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="Mensagem"/>
            <button>Enviar</button>
          </Form>
          <Feedback>
            <h3>Feedback</h3>
            <p>
              Nos ajude a proporcionar uma melhor
              experiencia para você.
              <strong>Dicas, opiniões, elogios, criticas.</strong>
            </p>
          </Feedback>
        </ContainerForm>
      </Container>
      <Footer/>
    </>
  )
}
//
//
//
