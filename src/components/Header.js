import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import { Fade } from 'react-reveal'
import CloseIcon from '@material-ui/icons/Close'
function Header() {
  const [burgerStatus,setBurgerStatus] = useState(false)
  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>

        <Menu>
          <a href='#'>Model S </a>
          <a href='#'>Model 3</a>
          <a href='#'>Model X</a>
          <a href='#'>Model Y</a>
        </Menu>
        <RgtMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RgtMenu>

        {/* <Fade bottom> */}
            <BurgerNav show={burgerStatus}>
                <CloseWrap>                
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrap>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadaster</a></li>
                <li><a href='#'>Demo Drive</a></li>
            </BurgerNav>
        {/* </Fade> */}
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0; 
    right: 0;
    justify-content: space-between;
    z-index: 1;
    
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 130px;
  // flex-wrap: nowrap;

  a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
      display: none;
  }


`

const RgtMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  // right: 0;
  a {
    font-weight: 600;
    text-transform: uppercase;
    // padding: 0 10px;
    margin-right: 10px;
   
}
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.5s;
    li {
        padding: 15px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .2);
    }

    a {
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    // margin-right: 50px; 
    cursor: pointer;
`

const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`