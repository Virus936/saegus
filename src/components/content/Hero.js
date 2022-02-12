import React, {useEffect, useRef}  from "react"
import styled from 'styled-components'


const computeScale = (total, ref) => {
  return (total - ref)/(2*total) + .5
}
function Hero(){
  const toZoom = useRef(null)

  useEffect(() => {
    const homepage = document.querySelector('#homepage')
      homepage.addEventListener('scroll', () => {
        if(window.innerWidth > 600){
          if (window.innerHeight-homepage.scrollTop > 0) {

            const scale = computeScale(window.innerHeight, homepage.scrollTop)
            toZoom.current.style.transform = `scale(${scale})`
          }
        }else{
          toZoom.current.style.transform = 'scale(1)'
        }
      })
  })

  
  return(
    <Container >
      <div className='element' ref={toZoom}>
        <h1>Saegus</h1>
        <p>Saegus est une consulTech qui réinvente le conseil aux entreprises. Elle s'est donné comme mission de faire découvrir, essayer et adopter le meilleur des usages du digital, sans slide. Pour de vrai.</p>
      </div>
    </Container>
    )
}

const Container = styled.div`
  height:100vh;
  width:100vw;
  position:sticky;
  top:0;
  z-index:-1;
  color:white;
  background:black;

  .element{
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
    background-image:url('https://saegus.com/wp-content/uploads/2017/11/gptw_30-1024x576.jpg') ;
    background-position:center;
    background-size:cover;

    &::before{
      position:absolute;
      content:'';
      width:100%;
      height:100%;
      opacity:.9;
      background-image:linear-gradient(90deg, #421745 0%, #7A6EA0 100%);
    }
    *{
      position:relative;
      z-index:1;
      max-width:700px;
      text-align:center;
      padding:20px;
      
    }
  }
`

export default Hero
