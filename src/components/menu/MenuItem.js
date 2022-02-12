import React, {useState} from "react"
import styled from 'styled-components'

function MenuItem(){
  return(
    <Container>
      <Title title= "Follow us"  />
      <Title  title="Des pépites dans votre boide mail!"/>
      <input type="input" />
      <Title title="Contact" />
      <Contact>
        <div> 19 avenue George V - Paris </div>
        <div> +33(0)627137237 </div>
        <div> lok.vira@gmail.com </div>
      </Contact>
    </Container>
    )
}

const Contact = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  @media(min-width:900px){
    align-items:flex-start;
  }
`
const Title= ({title}) => {
  return (
  <H1>{title}</H1>
  )
}
const H1 = styled.h1`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  font-size:1.5em;
  font-weight:bold;
  @media(min-width:900px){
    align-items:flex-start;
  }
  
  &:after{
    content:'';
    height:4px;
    width:30px;
    background-color:#ff5d7b;
    border-radius:100vh;
  }
`
const Container = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:110px;
  gap:30px;

  @media(min-width:900px){
    flex:1;
    align-items:flex-start;
  }
`

export default MenuItem
