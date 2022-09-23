import styled from 'styled-components'

export const TopHeader = styled.header`
  background-image: url(https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?cs=srgb&dl=pexels-pixabay-327098.jpg&fm=jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`

export const Img = styled.img`
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

  a:hover{
    color: #ffeb8a;
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

  &:hover {
    border: 2px solid #ffeb8a;
    color: #ffeb8a;
  }
`

