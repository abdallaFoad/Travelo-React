import React from 'react'
import styled from 'styled-components';
import data from './allData';
import theme from '../config';


export default function Testimonials() {
  return (
    <Section id='testimonials'>
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        {
          data.map((d) => {
            return (
              <div className="testimonial" key={d.id}>
                <p>{d.description}</p>
                <div className="info">
                  <img src={d.img} alt={`imgInfo${d.id}`} />
                  <div className="details">
                    <h4>{d.name}</h4>
                    <span>{d.job}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding:5rem 0;
  .title{
    text-align: center;
    margin-bottom:2rem;
  }
  .testimonials{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(321px, 1fr));
    align-items: center;
    gap:2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition:${theme.transition};
      cursor: pointer;
      &:hover {
        transform: ${theme.mainTransform};
        box-shadow:${theme.hoverBoxShadow};
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
          border:2px solid white;
          outline:1px solid ${theme.blueDarkColor}
        }
        .details {
          span {
          font-size: 0.9rem;
          color:${theme.blueColor}
       }
    }
  }
}
}
@media screen and (min-width:280px) and (max-width:768px){
  .testimonials{
    display:flex;
    flex-direction: column;
  }
}
`