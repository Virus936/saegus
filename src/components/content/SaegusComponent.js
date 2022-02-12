import React, {useEffect, useRef} from "react"
import Observe from '../../effect/Effect'
import styled from 'styled-components'

function SaegusComponent({title, image, desc}){
  const ref = useRef(null)
  useEffect(() => {Observe(ref)})

  return(
    <Container ref={ref}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </Container>
    )
}
const Container = styled.div`
  padding:50px;
  transition:.5s;
  img{
    display:block;
    width:100%;
    border-radius:5px;
  }
  *{
    margin-bottom:20px;
  }
  
  @media(min-width:1000px){
    display:grid;
    padding:0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2,auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
    margin:-10px;
    h1,p{
      width:400px;
    }
    h1{
      align-self:end;
    }
    img{
      width:80%;
      align-self:center;
    }

    &:nth-child(even){
      img { 
        grid-area: 1 / 1 / 3 / 2;
        
      }
      h1 { grid-area: 1 / 2 / 2 / 3; }
      p { grid-area: 2 / 2 / 3 / 3; } 
    }
    &:nth-child(odd){
      h1 { grid-area: 1 / 1 / 2 / 2; }
      p { grid-area: 2 / 1 / 3 / 2; }
      img { grid-area: 1 / 2 / 3 / 3; } 
      h1,p,img{
        justify-self:end;
      }
    }
  }
`

SaegusComponent.defaultProps = {
  image:"https://saegus.com/wp-content/uploads/2017/11/gptw_31.jpg",
  desc:"Chez Saegus, nous mettons un point d’honneur à conjuguer les valeurs d’excellence et de fun, car pour nous l’une n’est valable qu’avec l’autre. Cette conviction nous a conduits à réinventer le conseil aux entreprises pour leur faire découvrir, essayer et adopter le meilleur des usages du digital, sans slide. Nous avons résolument choisi de faire vivre une expérience nouvelle à nos clients en leur proposant une approche pragmatique et plus ludique du conseil.",
  title:"Une pincée de fun, et une grande dose d'excellence !"
}

export default SaegusComponent
