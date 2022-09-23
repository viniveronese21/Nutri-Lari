import styled from 'styled-components'

export const TopHeader = styled.header`
  background-color: #c2c2c2;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`

export const Img = styled.img`
  display: flex;
  padding: 25px 0 25px 175px;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 75px;
  padding-right: 170px;

  a {
    text-decoration: none;
    color: #ffff;
  }
`
export const Button = styled.button`
  width: 164px;
  height: 43px;
  border: 2px solid #ffffff;
  border-radius: 22px;
  cursor: pointer;
  color: #ffff;
  background: none;
`
