import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 935px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Columns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;

`

export const Column = styled.div`
    background-color: #6BBF7D;
    width: 330px;
    height: 555px;
    border-radius: 60px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1{
      padding: 10px 0 0 30px;
      color: #ffff;
      font-size: 36px;
    }
`

export const Img = styled.img`
    border-radius: 60px 60px 0 0;
`

export const Texts = styled.div`
    margin-bottom: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h1{
      font-size: 48px;
    }

    span{
      font-size: 15px;
    }
`

export const List = styled.ul`
  list-style: none;
  padding: 15px 0 0 30px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  li{
    color: #fff;
    font-size: 16px;
  }
`
