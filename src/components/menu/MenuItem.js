import styled from 'styled-components';

function MenuItem() {
  return (
    <Container>
      <H1>Follow us</H1>
      <H1>Des pépites dans votre boide mail!</H1>
      <input type="input" />
      <H1>Contact</H1>

      <Contact>
        <div> +33(0)627137237 </div>
        <div>
          {' '}
          <a href="mailto:lok.vira@gmail.com">lok.vira@gmail.com </a>
        </div>
      </Contact>
    </Container>
  );
}

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: inherit;
  }

  @media (min-width: 900px) {
    align-items: flex-start;
  }
`;

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 900px) {
    align-items: flex-start;
  }

  &:after {
    content: '';
    height: 4px;
    width: 30px;
    background-color: #ff5d7b;
    border-radius: 100vh;
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;
  gap: 30px;

  @media (min-width: 900px) {
    flex: 1;
    align-items: flex-start;
  }
`;

export default MenuItem;
