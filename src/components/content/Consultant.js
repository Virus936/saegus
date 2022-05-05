import Title from '../title/Title';
import styled from 'styled-components';
import ConsultantComponents from './ConsultantComponents';

const consultants = [
  {
    nom: 'Sakura',
    poste: 'Consultante Agile',
  },
  {
    nom: 'Hinata',
    poste: 'Consultante Digital',
  },
  {
    nom: 'Naruto',
    poste: 'Deputy leader Design',
  },
  {
    nom: 'Itachi',
    poste: 'Consultante Agile',
  },
  {
    nom: 'Jiraya',
    poste: 'Responsable Avant-Ventes et Customer Success',
  },
  {
    nom: "Ino'",
    poste: 'Manager et Product Owner',
  },
  {
    nom: 'Shikamaru',
    poste: 'Manager Digital Engagement',
  },
];

function Consultant() {
  return (
    <Container>
      <Title number="02" title="Consultant expérimentés" />
      {consultants.map((e, i) => (
        <ConsultantComponents key={i} nom={e.nom} poste={e.poste} />
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #f9f9f9;
  gap: 15px;
  padding: 50px;
`;

export default Consultant;
