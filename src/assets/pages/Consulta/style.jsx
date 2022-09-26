import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 940px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextBox = styled.div`
  width: 709px;
  height: 153px;
  margin: 93px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0 0 0;

  span {
    font-size: 16px;
    color: #03091e;
  }
`

export const ImgContainer = styled.div`
  width: 776px;
  height: 555px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 67px 0 0 0;
`

export const Columns = styled.div`
  width: 330px;
  height: 555px;
  background-color: #6e9123;
  border-radius: 61px;
`
export const Img = styled.img`
  border-radius: 61px 61px 0 0;
`
export const Title = styled.h1`
  color: #03091e;
  font-size: 48px;
`

export const List = styled.ul`
  list-style: none;
  margin: 8px 0 0 33px;

  li {
    color: #ffff;
    font-size: 16px;
  }

  h1 {
    color: #ffff;
    font-size: 36px;
    padding-bottom: 12px;
  }
`

export const Btn = styled.button`
  width: 171px;
  height: 42px;
  border-radius: 100px;
  color: #ffff;
  background-color: #03091e;
  font-size: 16px;
  margin: 35px 79px 24px 80px;

  &:hover {
    border: 2px solid #c32f27;
    background-color: #c32f27;
    color: #ffff;
  }
`
