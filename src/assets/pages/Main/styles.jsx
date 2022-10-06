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
  margin-bottom: 6vw;

  div {
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

  @media (max-width: 768px) {
  width: auto;
  flex-direction: column;
}
`
export const ContainerHeader = styled.div`
  width: 100%;
  height: 1000px;
  margin-bottom: 7vw;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin-left: 200px;
    margin-top: 200px;
    color: #FFFFFF;

    @media (max-width: 768px) {
      align-items: center;
      margin: 0;
      text-align: center;
    }
  }

  h1 {
    width: 694px;
    font-size: 54px;
    line-height: 122%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: auto;
      margin-top: 20px;
      font-size: 26px;
    }
  }

  span {
    width: 260px;
    height: 60px;
    font-size: 20px;
    margin-bottom: 70px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  button {
    width: 282px;
    height: 52px;
    background: #c32f27;
    border-radius: 22px;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;

      &:hover {
        opacity: 0.9;
        transition: 1s all;
      }

      @media (max-width: 768px) {
        margin-bottom: 20px;
        width: 50%;
      }
  }

  @media (max-width: 768px) {
  width: 100%;
  height: auto;
}
`
