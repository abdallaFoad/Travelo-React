import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png';


export default function ScrollToTop() {
  const [toTop, setToTop] = useState(true);
  const goTop = () => {
    window.scrollTo({top:0})
  }
  window.addEventListener('scroll', () => {
    window.scrollY > 200 ? setToTop(true) : setToTop(false);
  });
  return (
    <Section toTop={toTop} onClick={ goTop}>
      <img src={logo} alt="logo" />
    </Section>
  )
}

const Section = styled.div`
  display:${({ toTop }) => (toTop ? "block" : "none")};
  position:fixed;
  bottom:1rem;
  right:.5rem;
  padding:.5rem;
  cursor: pointer;
  z-index:10;
  img{
    height:2rem;
  }
`