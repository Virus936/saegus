import styled from 'styled-components';

function Nav() {
  return (
    <Container>
      <ListElement className="active" title="saegus" />
      <ListElement title="offres" />
      <ListElement title="références" />
      <ListElement title="témoignages" />
      <ListElement title="jobs" />
      <ListElement title="partenaires" />
      <ListElement title="blog" />
      <ListElement title="actualités" />
      <ListElement title="contact" />
    </Container>
  );
}

const ListElement = ({ title, className }) => {
  return (
    <List className={className}>
      <a href="#">{title}</a>
    </List>
  );
};
const List = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  font-weight: bold;
  font-size: 2em;
  cursor: pointer;
  text-transform: capitalize;

  @media (min-width: 900px) {
    align-items: flex-end;
  }
  &:after {
    position: absolute;
    bottom: -5px;
    content: '';
    background: white;
    width: 0;
    height: 4px;
    transition: 0.3s;
    border-radius: 100vh;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: #ff5d7b;
    &:after {
      background-color: #ff5d7b;
      border-radius: 100vh;
    }
  }
  a {
    text-decoration: inherit;
    color: inherit;
  }
`;

const Container = styled.nav`
  background-color: #192d42;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding-top: 110px;
  padding-bottom: 30px;

  @media (min-width: 900px) {
    flex: 1;
    align-items: flex-end;
  }
`;

export default Nav;
