import { StyledLinksDiv } from "@/styles/components/links";
import Image from "next/image";

import GithubIcon from '../assets/github.svg'
import Br from '../assets/map-pin.svg'
import Mala from '../assets/briefcase.svg'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Email from '../assets/folder.svg'
import Globe from '../assets/globe.svg'

export default function Links () {
    return (
        <StyledLinksDiv>
            <ul>
                <li>
                    <Image src={Br} alt={""} width={20}/>
                    <p>Brasil</p>
                </li>
                <li>
                    <Image src={Mala} alt={""} width={20}/>
                    <p>RocketSeat</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>Git</p>
                </li>
                <li>
                    <Image src={Linkedin} alt={""} width={20}/>
                    <p>Joj</p>
                </li>
                <li>
                    <Image src={Twitter} alt={""} width={20}/>
                    <p>Brasil</p>
                </li>
                <li>
                    <Image src={Globe} alt={""} width={20}/>
                    <p>sfaasggas</p>
                </li>
                <li>
                    <Image src={Email} alt={""} width={20}/>
                    <p>www.brasil.com.br</p>
                </li>
            </ul>
        </StyledLinksDiv>
    )
}