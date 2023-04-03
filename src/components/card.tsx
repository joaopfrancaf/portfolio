import { CardDivStyled, CardTitletyled, CardButtonstyled } from "../styles/components/card";
import Image from "next/image";

import Mala from '../assets/folder.svg'
import Star from '../assets/star.svg'
import Pin from '../assets/map-pin.svg'

export default function Card() {
    return (
      <CardDivStyled>
        <CardTitletyled>
            <Image src={Mala} alt={""} />
            <h3>My-onix</h3>
        </CardTitletyled>
        <p>Consulte os códigos de erro que aparecem no painel do veículo Onix.</p>
        <CardButtonstyled>
            <button><Image src={Star} alt={""} /></button>100
            <button><Image src={Pin} alt={""} /></button>100
            <input type="radio" id="age1" name="age" value="30"/><label>JavaScript</label>
        </CardButtonstyled>
      </CardDivStyled>
    )
  }