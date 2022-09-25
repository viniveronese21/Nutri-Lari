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
justify-content: flex-end;
width: 100%;

  strong {
    display: block;
  }

  div{
    width: 250px;
    padding: 10px;
  }

  p{
    display: block;
  }
`
