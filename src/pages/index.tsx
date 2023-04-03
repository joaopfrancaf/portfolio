import Links from '../components/links'
import AvatarProfile from '../components/avatarprofile'
import {ContainerStyled, MainStyled, SideStyled} from '../styles/pages/index' 
import Tecnologias from '../components/tecnologias'
import Experiencias from '../components/experiencias'
import SearchBar from '@/components/searchbar'
import Card from '../components/card'

export default function Home() {
  return (
  
    <ContainerStyled>

      <SideStyled>
        <AvatarProfile/>
        <Links/>
        <Tecnologias/>
        <Experiencias/>
      </SideStyled>

    

      <MainStyled>
        <SearchBar/>
        <Card/>
        <Card/>
        <SearchBar/>
      </MainStyled>

    </ContainerStyled>
  )
}
