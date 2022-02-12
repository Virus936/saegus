import React, {useState} from "react"
import styled from 'styled-components'

function Title({title, number}){
  return(
    <Container>
        <h1>{title}</h1>
        {number&& <span> {number} </span> }
    </Container>
    )
}

const Container = styled.div`
  position:relative;
  display:flex;
  width:100vw;
  

  justify-content:center;
  align-items:center;

  text-align:center;
  h1{
    position:absolute;
    margin:auto;
    text-transform:uppercase;

  }
  span{
    font-size:4em;
    letter-spacing:.2em;
    margin:10px auto;
    color:#ddd;
  }
`
Title.defaultProps = {
  number:'',
}
export default Title
