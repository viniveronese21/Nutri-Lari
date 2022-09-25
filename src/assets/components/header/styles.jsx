import styled from 'styled-components'

export const TopHeader = styled.header`
  background-color: #fafafa;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`

export const Img = styled.img`
  padding: 25px 0 25px 125px;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-right: 90px;

  a{
    text-decoration: none;
    color: #03091E;
    padding: 2px;

  };


  a:hover{
    border-bottom: 2px solid #03091E;
  };

  ${(props) => `#link-${props.pathname === '' ? 'home' : props.pathname} {border-bottom: 2px solid #03091E;}`}

`

export const Button = styled.button`
  width: 164px;
  height: 43px;
  border: 2px solid #03091E;
  border-radius: 22px;
  cursor: pointer;
  color: #03091E;
  background: none;

  &:hover {
    border: 2px solid #c32f27;
    background-color: #c32f27;
    color: #ffff;
  }
`

