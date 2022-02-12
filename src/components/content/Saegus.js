import styled from 'styled-components'
import Title from '../title/Title'
import SaegusComponent from './SaegusComponent'

const components = [
  {
    image:"https://saegus.com/wp-content/uploads/2017/11/gptw_31.jpg" ,
    desc:"Chez Saegus, nous mettons un point d’honneur à conjuguer les valeurs d’excellence et de fun, car pour nous l’une n’est valable qu’avec l’autre. Cette conviction nous a conduits à réinventer le conseil aux entreprises pour leur faire découvrir, essayer et adopter le meilleur des usages du digital, sans slide. Nous avons résolument choisi de faire vivre une expérience nouvelle à nos clients en leur proposant une approche pragmatique et plus ludique du conseil.",
    title:"Une pincée de fun, et une grande dose d'excellence !"
  },
  {

    image:"https://saegus.com/wp-content/uploads/2017/11/gptw_36.jpg" ,
    desc:"Nous avons la conviction que l’innovation est d’abord une culture ! Les Saegusiens sont tous des intrapreneurs aux profils très différents mais complémentaires, libres et invités à conduire des projets internes qu’ils peuvent mener en parallèle de leurs activités quotidiennes. Nous sommes une grande famille et avançons ensemble pour créer toujours plus de valeur. Efficacité et rapidité sont les maîtres mots pour nos projets. Dans un monde qui bouge toujours plus vite, nous nous sommes donné comme mission d’aller rapidement vers la preuve par le résultat !",
    title:"Une vision commune",
  },
  {

    image:"https://saegus.com/wp-content/uploads/2017/11/gptw_24.jpg" ,
    desc:"Puisque nous revendiquons l’intrapreneuriat, nous avons imaginé une méthodologie innovante qui permet de donner aux idées d’aujourd’hui une chance de devenir les produits et services stratégiques de demain. Nous l’avons déployé en interne avant de le déployer chez nos clients. Son nom : Intracubation. Notre promesse ? Donner la possibilité aux intrapreneurs au sein de grandes entreprises d’innover comme s’ils lançaient leur Startup au sein de votre entreprise ; une interprétation expérimentale du Design thinking et du Lean startup qui accélère leur appropriation.",
    title:"Un esprit intrapreneur"
  }
]

function Saegus(){
  return(
    <Container id="trigger">
      <Title 
        title="Saegus, c'est aussi"
        number="01"
      />
      {components.map((e,i) => <SaegusComponent className='element' 
        key={i}
        image={ e.image } 
        title={ e.title } 
        desc={ e.desc }
      />)}
    </Container>
    )
}
const Container = styled.section`
  position:relative;
  background:#f9f9f9;

`

export default Saegus
