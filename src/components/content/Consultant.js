import React, {useState} from "react"
import Title from '../title/Title'
import styled from 'styled-components'
import ConsultantComponents from './ConsultantComponents'

const consultants = [{
    nom:"Aurore" ,
    poste:"Consultante Agile" 
  }, {
    nom:"Céline" ,
    poste:"Consultante Digital" 
  }, {
    nom:"Clem" ,
    poste:"Deputy leader Design" 
  }, {
    nom:"Geo" ,
    poste:"Consultante Agile" 
  }, {
    nom:"Marco" ,
    poste:"Responsable Avant-Ventes et Customer Success" 
  }, {
    nom:"Steph'" ,
    poste:"Manager et Product Owner" 
  }, {
    nom:"Thib" ,
    poste:"Manager Digital Engagement" 
  },
]

function Consultant(){
  return(
    <Container >
      <Title 
        number='02'
        title='Consultant expérimentés'
      />
      {
        consultants.map((e,i) => <ConsultantComponents 
      key={i} 
      nom={e.nom} 
      poste={e.poste}  
      /> )
      }
    </Container>

    )
}

const Container = styled.section`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  background:#f9f9f9;
  gap:15px;
  padding:50px;
`

export default Consultant
