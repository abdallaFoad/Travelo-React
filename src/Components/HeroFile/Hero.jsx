import React from 'react';
import styled from 'styled-components';
import bgImg from '../../assets/hero.png';
import theme from '../config';


export default function Hero() {
  return (
    <Section id='hero'>
      <div className="background">
        <img src={bgImg} alt="bgImg" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Travel to explore</h1>
          <p>Lorem, ipsum dolor sit amet tempora  accusamus laboriosam earum rerum necessitatibus culpa cum quia maiores, tenetur voluptate hic.</p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="location">Where you want to go</label>
            <input
              type="text"
              id='location'
              placeholder='Search your location'
              onFocus={(e) => e.target.placeholder=''}
              onBlur={(e) => e.target.placeholder='Search your location'}
            />
          </div>
          <div className="container">
            <label htmlFor="dateOne">Check-in</label>
            <input type="date" id='dateOne'/>
          </div>
          <div className="container">
            <label htmlFor="dateOne">Check-out</label>
            <input type="date" id='dateOne'/>
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  )
}

const Section  = styled.section`
  position:relative;
  width:100%;
  height:100%;
  margin-top:2rem;
  .background{
    height:100%;
    img{
      width:100%;
      filter: brightness(.6);
    }
  }
  .content{
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    z-index: 3;
    text-align: center;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:1rem;
    .title{
      color:white;
      h1{
        font-size:clamp(1rem, 10vw, 3rem);
        /* font-size:3rem; */
        letter-spacing: .2rem;
        text-transform: uppercase;
      }
      p{
        padding:0 20vw;
        text-align: center;
        margin-top:.5rem;
        font-size:${theme.mFontS};
      }
    }
    .search{
      display:flex;
      background-color: ${theme.whiteColor};
      padding:.5rem;
      border-radius:.5rem;
      .container{
         display:flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         padding:0 1.5rem;
         label{
          font-size:${theme.mFontS};
          color:${theme.blueDarkColor};
         }
         input{
          border:1px solid ${theme.blueColor};
          padding:.3rem .5rem;
          margin-top: .5rem;
          border-radius:.5rem;
          background-color: transparent;
          color:black;
          &[type='date']{
            padding-left:3rem;
            cursor: pointer;
            border:none;
          }
          &::placeholder{
            color:black;
          }
          &:focus{
            outline:none;
          }
         }
      }
      button{
        border:none;
        border-radius: .3rem;
        color:white;
        background-color: ${theme.colorButtonHero};
        padding:1rem;
        cursor: pointer;
        text-transform: uppercase;
        font-size:1.1rem;
        transition: ${theme.transition};
        &:hover{
          background-color: ${theme.blueColorHover};
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 980px){
    height:25rem;
    img{
      height: 100%;
    }
    .content{
      padding:.5rem;
      .title{
        h1{font-size:1rem;}
        p{font-size:.5rem};
        width:100vw
      }
      .search{
        flex-direction: column;
        padding:0 .2rem;
        gap:0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
          label{font-size:1rem}
        }
        button {
          padding: .5rem;
          font-size: .9rem;
          width:fit-content;
          margin: 1rem auto;
        }
      }
    }
  }
`
