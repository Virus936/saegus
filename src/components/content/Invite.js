import React, {useState} from "react"
import styled from 'styled-components'

function Invite(){
  return(
    <Container>
      Voici un peu qui sont les Saegusiens ! Venez nous rencontrer, nous serons heureux de faire votre connaissance. Qu’en dites-vous ? 
    </Container>
    )
}
const Container = styled.p`
  display:flex;
  flex-direction:column;
  align-items:center;
  position:relative;
  text-align:center;
  margin:auto;
  padding:40px calc((100vw - 640px)/2);
  background:#f9f9f9;
  &:before{
    content:'';
    width:2px;
    height:50px;
    background:#ccc;
    margin:10px;
  }
  
`

export default Invite
