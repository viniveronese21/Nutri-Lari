import styled from 'styled-components'
import Background from '../../img/background.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`
export const ContainerFrase = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
width: 100%;
gap: 9vw;

  div{
    padding: 10px;
    font-size: 19px;
    line-height: 20px;
    width: 300px;

  }
  
  strong {
    display: block;
    font-size: 21px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
`
export const ContainerHeader = styled.div`
width: 100%;
height: 1000px;
margin-bottom: 40px;
background-image: url(${Background});
background-repeat: no-repeat;
background-size: cover;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 200px;
    margin-top: 200px;
    color: #FFFFFF;
  }

  h1{
    width: 694px;
    font-size: 54px;
    line-height: 123%;
    margin-bottom: 20px;
  }

  span{
    width: 260px;
    height: 60px;
    font-size: 20px;
    margin-bottom: 70px;
  }

  button{ 
    width: 282px;
    height: 52px;
    background: #C32F27;
    border-radius: 22px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;

      &:hover {
        opacity: 0.9;
        transition: 1s all;
      }
  }
`