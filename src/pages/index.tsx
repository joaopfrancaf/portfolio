import Links from '../components/links'
import AvatarProfile from '../components/avatarprofile'
import {CardDiv, ContainerStyled, MainStyled, SideStyled} from '../styles/pages/index' 
import Tecnologias from '../components/tecnologias'
import Experiencias from '../components/experiencias'
import SearchBar from '@/components/searchbar'
import Card from '../components/card'
import Post from '@/components/post'

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

        <CardDiv>
          <Card/>
          <Card/>
        </CardDiv>
        
        <SearchBar/>

        <Post/>
      </MainStyled>

    </ContainerStyled>
  )
}
