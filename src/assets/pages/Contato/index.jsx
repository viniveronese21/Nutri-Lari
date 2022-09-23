import React from 'react'
import { Container } from './styles'

export default function Contato() {
  return (
    <Container>
      <h1>Entre em contato</h1>
      <div>
        <form>
          <h3>Da um toque!</h3>
          <input type="email" placeholder="Email"/>
          <input type="text" placeholder="Mensagem"/>
          <button>Enviar</button>
        </form>
        <div>
          <h3>Feedback</h3>
          <p>
            Nós ajude a proporcionar uma melhor
            experiencia para você.
            <strong>Dicas, opiniões, elogios, criticas.</strong>
          </p>
        </div>
      </div>

    </Container>
  )
}
