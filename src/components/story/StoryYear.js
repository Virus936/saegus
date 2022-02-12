import React, {useEffect, useRef} from "react"
import styled from 'styled-components'
import StoryMonth from './StoryMonth'
import Observe from '../../effect/Effect'

function StoryYear({year, stories}){
  const ref = useRef(null)
  useEffect(()=>Observe(ref))
  return(
    <Container>
      <Year ref={ref}>{year}</Year>
      {
        stories&& stories.map((story, i) => <StoryMonth 
          key={i} 
          month={story.month} 
          img={story.img}
          desc ={story.desc} 

          />)
      }
    </Container>
    )
}
const Year = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin:40px;
  height:100px;
  aspect-ratio:1.4;
  background: linear-gradient(120deg, rgba(255,109,136,1) 0%, rgba(255,151,139,1) 100%);
  border-radius:10px;
  z-index:3;
  transition:.5s;
`

const Container = styled.div`

  display:flex;
  position:relative;
  flex-direction:column;
  align-items:center;
  gap:80px;

  &:first-of-type{
    margin-top:100px;
  }

`

export default StoryYear
