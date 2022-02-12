import React, {useEffect, useRef} from "react"
import styled from 'styled-components'
import Observe from '../../effect/Effect'

function StoryMonth({month, desc, img}){
  const ref = useRef(null)
  useEffect(()=>Observe(ref))

  return(
    <Container ref={ref}>
      <h1>{month}</h1>
      <p>{desc}</p>
      {img&& <img src={img} alt="" /> }
    </Container>
    )
}

const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  background:#192d42;
  z-index:3;
  width:300px;
  text-align:center;
  transition:.5s;
  @media(min-width:800px){
    &:nth-of-type(even){
      transform:translateX(60%);
      &:before{

        @media(min-width:800px){
          position:absolute;
          top:50%;

          left:-35px;
        }
      }
    }
    &:nth-of-type(odd){
      transform:translateX(-60%);
      &:before{

        @media(min-width:800px){
          position:absolute;

          top:50%;
          right:-35px;
        }
      }
    }
  }

  h1{
    color:#ff5d7b;
  }

  img{
    aspect-ratio:1;
    width:70px;
    border-radius:100vh;

  }
  &:before{
    content:'';
    width:10px;
    aspect-ratio:1;
    background:#ff5d7b;
    border-radius:100vh;
  }

  

`

export default StoryMonth
