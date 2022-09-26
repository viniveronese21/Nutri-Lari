import styled from 'styled-components'

export const TopHeader = styled.header`
  background-color: #fafafa;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    display: block;
    height: 100%;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`

export const Img = styled.img`
  padding: 25px 0 25px 125px;

  @media (max-width: 768px) {
    padding: 10px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
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

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 20px;
  }
`

