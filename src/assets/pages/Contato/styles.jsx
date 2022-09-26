import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #FCF2EA;

  h1{
    width: 423px;
    height: 72px;
    font-size: 48px;
    line-height: 72px;
    text-align: center;
    color: #03091E;
    margin-top: 60px;
    margin-bottom: 66px;

    @media (max-width: 768px) {
      font-size: 30px;
      width: auto;
    }
  }

`
export const ContainerForm = styled.div`
  display: flex;
  align-items: baseline;
  padding: 40px;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  h3{
    font-size: 20px;
    margin-bottom: 30px;
  }

  input[type="email"]{
    height: 46px;
    width: 470px;
    border-radius: 10px;
    margin-bottom: 25px;
    padding-left: 20px;

    @media (max-width: 768px) {
    width: auto;
  }

  }

  input[type="text"]{
    height: 146px;
    border-radius: 10px;
    margin-bottom: 25px;
    padding-left: 20px;
  }

  button{
    width: 139px;
    height: 46px;
    background: #c32f27;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin-bottom: 60px;

      &:hover {
        background: #8a0404;
      }
  }
  
  @media (max-width: 768px) {
    width: 50%;
  }

`
export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 420px;
  height: 180px;
  margin-left: 50px;

    h3{
      margin-bottom: 20px;
      font-size: 20px;
      line-height: 72px;
    }

    p{
      font-size: 20px;
      line-height: 30px;
    }

    strong{
      display: block;
  }

  @media (max-width: 768px) {
    display: block;
    width: auto;
    height: auto;
  }

`
