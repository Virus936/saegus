import React, {useState} from "react"
import Saegus from '../../components/content/Saegus'
import Consultant from '../../components/content/Consultant.js'
import Invite from '../../components/content/Invite'
import Story from '../../components/story/Story'
import MainPage from '../../components/content/MainPage'
import Hero from '../../components/content/Hero'

function Home(){
  return(
    <MainPage id='homepage'>
      <Hero />
      <Saegus />
      <Consultant />
      <Invite />
      <Story />


    </MainPage>
    )
}

export default Home
