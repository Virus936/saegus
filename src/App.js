import styled from 'styled-components'
import Header from './components/header/Header'
import Main from './page/Main'

function App() {

  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  position:relative;
  overflow:hidden;
`

export default App;
