import { StyledLinksDiv } from "@/styles/components/links";
import Image from "next/image";

import GithubIcon from '../assets/github.svg'

export default function Links () {
    return (
        <StyledLinksDiv>
            <ul>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>Brasil</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>aaa</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>Git</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>Joj</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>Brasil</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>bbbbbbb</p>
                </li>
                <li>
                    <Image src={GithubIcon} alt={""} width={20}/>
                    <p>www.brasil.com.br</p>
                </li>
            </ul>
        </StyledLinksDiv>
    )
}