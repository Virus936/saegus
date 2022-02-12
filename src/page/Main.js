import styled from 'styled-components'
import Home from './home/Home'
import Menu from '../components/menu/Menu'
import {useSelector} from 'react-redux'
import {selectMenu} from '../features/menu/menuSlice'

function Main(){
  const menu = useSelector(selectMenu)
  return(
    <Container menu={menu} >
      <Home  />
      <Menu  />
    </Container>
  )
}


const Container = styled.div`
  position:relative;
  ${({menu}) => menu?'transform:translateX(-100%) ;':''}
  transition:.4s transform;
`

export default Main
