import styled from 'styled-components'

const StoryHead = ({title}) => {
  return (
    <Head>
      <h1>{title}</h1>
    </Head>
  )
}
const Head = styled.header`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  z-index:1;
  background:url("https://saegus.com/wp-content/uploads/2017/11/gptw_18-1024x576.jpg");
  background-size:cover;
  height:300px;
  color:white;
  h1{
    
    text-transform:uppercase;
    text-align:center;
  }

`

export default StoryHead
