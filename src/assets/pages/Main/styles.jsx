import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

  div{
    width: 80%;
    text-align: center;
  }
`
export const ContainerFrase = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
width: 100%;
gap: 9vw;

  div{
    padding: 10px;
    font-size: 20px;
    line-height: 20px;
    width: 300px;
  }
  
  strong {
    display: block;
    margin-top: 40px;
    margin-bottom: 15px;
  }

`
