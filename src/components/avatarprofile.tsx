import {StyledAvatarDiv} from '../styles/components/avatarprofile'
import Image from 'next/image'

import AvatarImage from '../assets/Ellipse 1.png'

export default function AvatarProfile() {
    return (
      <StyledAvatarDiv>
        <Image src={AvatarImage} alt={''} width={128}/>
        <span>João Inacio Neto</span>
        <p>Full Stack Developer</p>
      </StyledAvatarDiv>
    )
}
  