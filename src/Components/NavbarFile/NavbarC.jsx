import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import theme from '../config';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

export default function NavbarC() {
  const [nav, setNav] = useState(false);

  return (
    <Parent className='parent' >
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="logo" />
            Travelo
          </div>
          <div className="toggle">
            {nav ? <VscChromeClose onClick={() => setNav(!nav)} style={{cursor:'pointer'}} /> : <GiHamburgerMenu style={{cursor:'pointer'}} onClick={() => setNav(!nav)} />}
          </div>
        </div>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommended">Recommended</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
      <ResponsiveNav state={nav}>
        <ul>
          <li>
            <a href="#hero" onClick={() => setNav(false)}>Home</a>
          </li>
          <li>
            <a href="#services" nClick={() => setNav(false)}>Services</a>
          </li>
          <li>
            <a href="#recommended" nClick={() => setNav(false)}>Recommended</a>
          </li>
          <li>
            <a href="#testimonials" nClick={() => setNav(false)}>Testimonials</a>
          </li>
        </ul>
      </ResponsiveNav>
    </Parent>
  )
}
const Parent = styled.div`
  position:relative;
  `
const Nav = styled.nav`
  display:flex;
  align-items: center;
  justify-content: space-between;
  transition: ${theme.transition};
  .brand{
    .container{
      display:flex;
      align-items: center;
      justify-content: center;
      gap:.6rem;
      font-size: ${theme.mFontS};
      font-weight: 900;
      text-transform: uppercase;
      cursor:pointer;
    }
    .toggle{display:none}
  }

  ul{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    li{
      list-style: none;
      a{
        text-decoration: none;
        color:${theme.blueColor};
        transition: ${theme.transition};
        font-size:${theme.mFontS};
        &:hover{
          color:${theme.blueColorHover};
        }
      }
      &:first-of-type{
        color:${theme.blueColorHover};
        font-weight: bold;
      }
    }
  }
  button{
    background-color: ${theme.milkyColor};
    color:white;
    font-size:${theme.mFontS};
    padding:.5rem 1rem;
    border:none;
    border-radius: 1rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover{
      background-color: ${theme.blueColorHover};
    }
  }
  @media screen and (min-width: 280px) and (max-width:1080px){
    .brand{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width:100%;
      .toggle{
        display:block;
      }
    }
    ul, button{display:none}
  }
`;
const ResponsiveNav = styled.div`
  position: absolute;
  z-index: 10;
  width:100%;
  display:flex;
  height:35vh;
  align-items: center;
  transition: ${theme.transition};
  top:${({state}) => state ? '50px' : '-500px'};
  ul{
    overflow: hidden;
    width: 100%;
    padding:1rem;
    list-style: none;
    background-color: white;
    display:flex;
    flex-direction: column;
    gap:1rem;
    li{
      overflow: hidden;
      margin: 0.2rem .5rem 0;
      border-bottom: .1rem solid ${theme.blueDarkColor};
      a{
        text-decoration: none;
        color:${theme.blueColor};
        transition: ${theme.transition};
        font-size: ${theme.mFontS};
        :hover{
          color:${theme.blueColorHover}
        }
      }
      &:first-of-type{
        a{
          font-weight: 900;
          color:${theme.blueColorHover}
        }
      }
    }
  }
`