import React, { useState } from 'react'
import styled from 'styled-components';
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import theme from '../config';

export default function Footer() {
  return (
    <FooterContainer>
      <p>Copyright 	&copy; 2022 Travelo. | All rights reserved</p>
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
      <ul className='social'>
        <li>
          <a
            href="https://www.facebook.com/abdalla.foad.50" target="_blank" rel="noopener noreferrer">
            <BsFacebook  color='#1877F2' />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdofoad1179674/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin color='#0a66c2'/>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/abdallafoad74/?fbclid=IwAR1PuxUuY1Po5h7qefYkmE8FKCyvGQ38Bey3cXBjaK_fmiok34mrWbR8sio" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram color='#E4405F' />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/abdallafoad74?fbclid=IwAR3GwLItlfMdhL6i3QyUUEs8_ZEnRkDPmpuTeTKx4lFA5dWqcLLyAS9Ymzw" target="_blank" rel="noopener noreferrer">
              <BsTwitter color='#1DA1F2'/>
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}


const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #222;
  border-radius: 0.5rem;
  padding: 2.5rem;
  p{
    color:#d0d8ff;
    font-size:1rem;

  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: #d0d8ff;
        transition: ${theme.transition};
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: ${theme.mFontS};
        transition: ${theme.transition};
        :hover {
          color: #d0d8ff;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    p{font-size:.7rem}
    ul {
      flex-direction: column;
      gap:1rem;
      li{
        a{
          font-size:.7rem
        }
      }
    }
    .social {
      flex-direction: row;
    }
  }
    @media screen and (min-width: 769px) and (max-width: 1024px){
      .social{
        margin-left:1rem
      }
    }
`;