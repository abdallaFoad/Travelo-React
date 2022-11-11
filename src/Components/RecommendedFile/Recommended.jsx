import React, { useState } from 'react'
import styled from "styled-components";
import theme from '../config';
import { dataTap1, dataTap2, dataTap3, dataTap4 } from './allData';
import Destination from './Destination';


export default function Recommend() {
  
  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  const [tab, setTab] = useState('tab1');
  const changeTap = (tab) => {
    setTab(tab)
  }

let result;
/*Start If Condition ***********/
if (tab === 'tab1') {
result = dataTap1.map((dest) => {
    return (
      <Destination image={dest.image} title={dest.title} subTitle={dest.subTitle} duration={dest.duration} />
    )
  })
} else if (tab === 'tab2') {
  result = dataTap2.map((dest) => {
    return (
      <Destination image={dest.image} title={dest.title} subTitle={dest.subTitle} duration={dest.duration} />
    )
  })
} else if (tab === 'tab3') {
result = dataTap3.map((dest) => {
    return (
      <Destination image={dest.image} title={dest.title} subTitle={dest.subTitle} duration={dest.duration} />
    )
  })
} else {
   result = dataTap4.map((dest) => {
    return (
      <Destination image={dest.image} title={dest.title} subTitle={dest.subTitle} duration={dest.duration} />
    )
  })
}
  /*End If Condition ***********/
  

return (
    <Section id='recommended'>
      <div className="title">
        <h1>Recommended Destinations</h1>
      </div>
      <div className="packages">
        <ul>
          {
            packages.map((pkg, i) => {
              return (
                <li
                  className={active === i + 1 ? 'active' : ''}
                  onClick={() => {
                    setActive(i + 1);
                    changeTap(`tab${i+1}`)
                  }}
                >{pkg}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="destinations">
        {result}
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
        font-size: ${theme.mFontS};
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: ${theme.transition};
      cursor: pointer;
      &:hover {
        transform:${theme.mainTransform};
        box-shadow: ${theme.hoverBoxShadow};
      }
      img {
        width: 100%;
        border-radius: 6px;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
        .km{
          color:${theme.blueColor};
          font-weight:600
        }
        .destDist{
          font-weight: 600;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.2rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
