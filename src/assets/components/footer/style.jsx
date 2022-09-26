import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    text-align: center
  }
`
export const Colum = styled.div`
  margin: 20px 0 20px 0;
  width: 500px;
  padding: 65px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center
  }
`

export const Span = styled.span`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;

  a{
    text-decoration: none;
    color: #101010;
  }
`

export const Img = styled.img`
  height: 40px;
  width: 40px;
`

export const Social = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const SocialIcons = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content:  center;
  gap: 48px;
  margin: 35px ;
`
