import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { ContentText, MainContainer, Container, Title, ImgContainer, Img, Span} from './style'
import Img1 from '../../img/kiwi.png'
import Img2 from '../../img/abacaxi.png'
import Img3 from '../../img/kiwi2.png'


export default function Servicos() {
  return (
    <>
      <Header/>

      <MainContainer>

        <Container>

          <ContentText>

              <Title>Por que ir ao nutricionista?</Title>

              <Span>
                <strong>Cuidar</strong> da sua alimentação afeta diretamente na sua saúde,
                ter habitos alimentares saudáveis traz qualidade de vida. Uma melhor alimentação
                traz benefícios tanto no presente quanto para o futuro. <strong>Ame-se</strong>.
              </Span>
              <br/>
              <br/>
              <Span>
              Um <strong>nutricionista</strong> vai te guiar por onde começar e te dar as melhores maneiras
              específicas para você. Te dará o caminho das pedras da<br/> boa alimentação.
              </Span>

          </ContentText>

          <ImgContainer>
              <Img src={Img1}/>
              <Img src={Img2}/>
              <Img src={Img3}/>
          </ImgContainer>

        </Container>

      </MainContainer>


      <Footer/>
    </>
  )
}
