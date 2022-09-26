import styled from 'styled-components'
import banner from '../../img/Sbackground.png'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1070px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height:auto;
    width: auto;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1349px;
  height: 1070px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height:auto;
    width:auto;
  }
`

export const ContentText = styled.div`
  width: 765px;
  height: 563px;
  margin: 138px 0 0 211px;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
    margin: 40px;
  }
`
export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 96px;
`

export const Span = styled.span`
    font-size: 20px;
    line-height: 40px;
    display: block;
    margin-bottom: 25px;
`

export const ImgContainer = styled.div`
  width: 967px;
  height: 369px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    height: auto;
    gap: 50px;
  }
`
export const Img = styled.img`
  width: 272px;
  height: 369px;
`
