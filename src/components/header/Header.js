import logo from '../../logo.png';
import React from "react"
import styled from 'styled-components'
import {selectMenu} from '../../features/menu/menuSlice'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../features/menu/menuSlice'


function Header(){
  const menu = useSelector(selectMenu)
  const dispatch = useDispatch()

  return(
    <Container>
      <img src={logo} className="App-logo" alt="logo" />
      <nav className='menu'>
        <div className='lang'>fr</div>
        <div className='lang'>en</div>
        <div className={menu? 'hamburger-menu active':'hamburger-menu' }  onClick={()=>dispatch(toggle())}>
          <div></div>
        </div>

      </nav>
    </Container>
    )
}
const Container = styled.header`
  display:flex;
  position:fixed;
  z-index:1000;
  top:0;
  width:100vw;
  padding: 20px max(20px, calc((100vw - 900px)/2));
  align-items:center;
  color:white;

  img{
    display:block;
    height:40px;
  }
  .menu{
    display:flex;
    font-size:16px;
    margin-left:auto;
    gap:1em;
    align-items:center;
    .lang{
      display:flex;
      align-items:center;
      text-transform:uppercase;
      font-weight:bold;
      cursor:pointer;
    }
  }
  .hamburger-menu{
    position:relative;
    display:flex;
    margin-left:2em;
    align-items:center;
    
    height:1.5em;
    cursor:pointer;
    >div{
      position:relative;
      width:2em;
      aspect-ratio:13;
      background:white;
      border-radius:100vh;
      :before, :after{
        position:absolute;
        content:'';
        width:100%;
        height:100%;
        border-radius:100vh;
        background:white;
      }
      :before{
        transform:translateY(-.5em)
      }
      :after{
        transform:translateY(.5em)
      }

      
    }
    &.active{
      >div{
        background:transparent;
        transition:.1s;
        :before{
          transform:rotate(-45deg);
          transition: .2s .1s;
        }
        :after{
          transform:rotate(45deg);
          transition: .2s .1s;
        }
      }
    }

  }

`

export default Header
