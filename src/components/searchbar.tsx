import { SearchBarDiv } from "../styles/components/searchbar";

export default function SearchBar() {
    return (
      <SearchBarDiv>
        <input type="text" placeholder="My Projects"/>
        <a href="#">Veja todos</a>
      </SearchBarDiv>
    )
}