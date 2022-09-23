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
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;

    form{
      display: flex;
      flex-direction: column;

      h3{
        font-size: 20px;
        line-height: 72px;
      }
      
      input[type="email"]{
        height: 46px;
        width: 470px;
        border-radius: 10px;
        margin-bottom: 25px;
      }

      input[type="text"]{
        height: 146px;
        border-radius: 10px;
        margin-bottom: 25px;
      }

      button{
        width: 139px;
        height: 46px;
        background: #BC2F2F;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        color: #fff;
      }
    }
  }
`
