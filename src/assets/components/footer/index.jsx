import React from 'react'
import { Container, Colum, Img, Span, Social, SocialIcons} from './style'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { SiInstagram, SiWhatsapp} from 'react-icons/si'
import { AiOutlineYoutube } from 'react-icons/ai'
import Icon from '../../img/Icon.png'

export default function Footer() {
  return(
    <Container>
      <Colum>

        <Span>
          <Img src={Icon} />
          <h3>ENTRE EM CONTATO</h3>
        </Span>

        <Span><HiOutlineMail size={25}/>
          <a href="mailto:larissalongobardinutri@gmail.com">larissalongobardinutri@gmail.com</a>
        </Span>

        <Span><HiOutlinePhone size={25}/>
          <a href="tel:+5519998731628">(19) 9 9873-1628</a>
        </Span>

      </Colum>

      <Colum>
        <Social>
          <h3>REDES SOCIAIS</h3>

          <SocialIcons>
            <SiInstagram size={30}/>
            <AiOutlineYoutube size={40}/>
            <SiWhatsapp size={30}/>
          </SocialIcons>
        </Social>
      </Colum>
    </Container>
  )
}
