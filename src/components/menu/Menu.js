import styled from 'styled-components';
import Nav from './Nav';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <Container className="menu">
      <Nav />
      <MenuItem />
    </Container>
  );
}

const Container = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  scrollbar-width: none;
  background-color: #16283b;
  color: white;
  transform: translateX(100%);
  overflow-y: scroll;

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    background-color: #192d42;
    padding: 20px max(20px, calc((100vw - 900px) / 2));
  }
`;

export default Menu;
