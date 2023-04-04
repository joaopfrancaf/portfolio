import { ImagDiv, PostDiv, DivText } from "../styles/components/post";

import foto from '../assets/Ellipse 1.png'
import Image from "next/image";

export default function Post() {
    return (
        <PostDiv>
            <ImagDiv>
                <Image src={foto} alt={""} width={128}/>
            </ImagDiv>

            <DivText>
                <div>
                    <h3>Erro adb devices no Genymotion e Android Studio (React Native)</h3>
                    <p>2 anos atrás</p>
                </div>
                <h4>Erro adb devices no Genymotion e Android Studio (React Native)</h4>
            </DivText>
        </PostDiv>
    )
}