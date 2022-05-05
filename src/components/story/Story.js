import styled from 'styled-components';
import StoryHead from './StoryHead';
import StoryYear from './StoryYear';

const stories = [
  {
    year: 2014,
    stories: [
      {
        month: 'décembre',
        desc:
          'Notre date de naissance ! On a vu le jour grâce à nos 3 truculents associés fondateurs 🙂',
        image:
          'https://saegus.com/wp-content/uploads/2017/11/IMG_6137-150x150.jpg',
      },
    ],
  },
  {
    year: 2015,
    stories: [
      {
        month: 'janvier',
        desc: 'Premier contrat signé avec un groupe du CAC40',
      },
      {
        month: 'avril',
        desc:
          'Début du partenariat avec une grande mutuelle, laquelle nous a confié plus tard la création d’une cellule digitale. Une grande première 🙂',
      },
      {
        month: 'septembre',
        desc: 'Foreseeds is born !',
      },
      {
        month: 'décembre',
        desc:
          'Grande fête en compagnie de nos parrains et marraines à l’occasion de nos 1 an',
      },
      {
        month: 'décembre',
        desc: 'Déjà 20 collaborateurs !',
        img:
          'https://saegus.com/wp-content/uploads/2017/11/20Consultants2-150x150.png',
      },
    ],
  },
  {
    year: 2016,
    stories: [
      {
        month: 'janvier',
        desc:
          'Création de nos centres d’excellence : Tech-Inno, Agile et Design',
      },
      {
        month: 'mars',
        desc: 'Inauguration de nos nouveaux locaux avec tous les Saegusiens',
        img:
          'https://saegus.com/wp-content/uploads/2017/11/MG_8338-150x150.jpg',
      },
      {
        month: 'août',
        desc: 'Création de notre offre Intracubation',
      },
      {
        month: 'décembre',
        desc: 'PREMIÈRE SAEGUS ACADEMY ! PROMO GANDHI',
        img: 'https://saegus.com/wp-content/uploads/2017/11/gandhi-150x150.png',
      },
      {
        month: 'décembre',
        desc: 'On compte maintenant 40 Saegusiens !',
        img:
          'https://saegus.com/wp-content/uploads/2017/11/40Consultants-150x150.png',
      },
    ],
  },
  {
    year: 2016,
    stories: [
      {
        month: 'janvier',
        desc:
          'Création de nos centres d’excellence : Tech-Inno, Agile et Design',
      },
      {
        month: 'mars',
        desc: 'Inauguration de nos nouveaux locaux avec tous les Saegusiens',
        img:
          'https://saegus.com/wp-content/uploads/2017/11/MG_8338-150x150.jpg',
      },
      {
        month: 'août',
        desc: 'Création de notre offre Intracubation',
      },
      {
        month: 'décembre',
        desc: 'PREMIÈRE SAEGUS ACADEMY ! PROMO GANDHI',
        img: 'https://saegus.com/wp-content/uploads/2017/11/gandhi-150x150.png',
      },
      {
        month: 'décembre',
        desc: 'On compte maintenant 40 Saegusiens !',
        img:
          'https://saegus.com/wp-content/uploads/2017/11/40Consultants-150x150.png',
      },
    ],
  },
];

function Story() {
  return (
    <Container>
      <StoryHead title="et une histoire" />
      {stories &&
        stories.map((story, i) => (
          <StoryYear key={i} year={story.year} stories={story.stories} />
        ))}
      <div className="timeline"></div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #192d42;
  .timeline {
    width: 2px;
    height: 100%;
    background: rgba(200, 200, 200, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
  }
`;

export default Story;
