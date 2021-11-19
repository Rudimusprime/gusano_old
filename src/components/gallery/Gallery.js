import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close'
import {BrowserRouter as Router} from "react-router-dom";
import './Gallery.css';

import Img1 from '../../gallery/Ajmal-logo-1.svg'
import Img2 from '../../gallery/Ajmal-logo-2.svg'
import Img3 from '../../gallery/Ajmal-logo-3.svg'
import Img4 from '../../gallery/Ajmal-logo-4.svg'
import Img5 from '../../gallery/APAutomatyka-podkladka-kalendarz.svg'
import Img6 from '../../gallery/Architektura-altanka-dom-garaż-letniskowy-ogrodzenie-kolaż.svg'
import Img7 from '../../gallery/BamBee-logo-mascot-3D.svg'
import Img8 from '../../gallery/BamBee-logo.svg'
import Img9 from '../../gallery/CHOAM-Diuna-Dune-3D.svg'
import Img10 from '../../gallery/CHOAM-Diuna-Dune.svg'
import Img11 from '../../gallery/Gitara-1973-Gibson-LesPaul-Custom-James-Hatfield-1.svg'
import Img12 from '../../gallery/Gitara-1973-Gibson-LesPaul-Custom-James-Hatfield-2.svg'
import Img13 from '../../gallery/Hairless-Horseman-Cosmetics-Etykiety-Balsam-Olejek-CohibaWood.svg'
import Img14 from '../../gallery/Hairless-Horseman-Cosmetics-Etykiety-Balsam-Olejek-MaltBourbon.svg'
import Img15 from '../../gallery/Hairless-Horseman-Cosmetics-Etykiety-Pomada.svg'
import Img16 from '../../gallery/Hairless-Horseman-Cosmetics-Etykiety-ShavingGel-AfterShave-GingerandPepper.svg'
import Img17 from '../../gallery/Hairless-Horseman-Cosmetics-Logo-1.svg'
import Img18 from '../../gallery/Hairless-Horseman-Cosmetics-Logo-2.svg'
import Img19 from '../../gallery/Hairless-Horseman-Cosmetics-Motocyklista.svg'
import Img20 from '../../gallery/Hairless-Horseman-Cosmetics-Nalepka-Bourbon_Obszar roboczy 1.svg'
import Img21 from '../../gallery/Hairless-Horseman-Cosmetics-Nalepka-CohibaWood_Obszar roboczy 1.svg'
import Img22 from '../../gallery/Infografika-konstrukcja-dach-przekrój-ciesielka.svg'
import Img23 from '../../gallery/Infografika-konstrukcja-dach-przekrój-InterLers-wiązary-ciesielka.svg'
import Img24 from '../../gallery/Infografika-konstrukcja-dach-przekrój-InterLers-wiązary.svg'
import Img25 from '../../gallery/kawa-kawiarka.svg'
import Img26 from '../../gallery/Krolik-Atak-Krolika-Okladka-Cover-Bunny-Terror.svg'
import Img27 from '../../gallery/LOCUM-Zakładka-3D.svg'
import Img28 from '../../gallery/Lokum-plakat-logo-01.svg'
import Img29 from '../../gallery/Malakos-Logo_Obszar roboczy 1.svg'
import Img30 from '../../gallery/Mały-Ksiaze-Little-Princ.svg'
import Img31 from '../../gallery/MotoGuzzi-NevadaClassic750e-Maciej-Janczak-01.svg'
import Img32 from '../../gallery/MotoGuzzi-NevadaClassic750e-Maciej-Janczak-Rushguerd-ExtremeHobby-lidor.svg'
import Img33 from '../../gallery/MotoGuzzi-NevadaClassic750e-Maciej-Janczak-tshirt.svg'
import Img34 from '../../gallery/Pan-tu-nie-stal-plakat.svg'
import Img35 from '../../gallery/PB-Pedagog-Biznesu-logo_Obszar roboczy 4.svg'
import Img36 from '../../gallery/pennywise-clown-klaun-derry.svg'
import Img37 from '../../gallery/Puzel-Design-puzzel_Obszar roboczy 1.svg'
import Img38 from '../../gallery/Red-Motion-logo_Obszar roboczy 1.svg'
import Img39 from '../../gallery/Robak-Bug-Kowal-bezskrzydly.svg'
import Img40 from '../../gallery/Yamaha-XV 1900 Stratoliner-Maciej-Janczak-01.svg'

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
            desc: "",
        },
        {
            id: 2,
            imgSrc: Img2,
            desc: "",
        },
        {
            id: 3,
            imgSrc: Img3,
            desc: "",
        },
        {
            id: 4,
            imgSrc: Img4,
            desc: "",
        },
        {
            id: 5,
            imgSrc: Img5,
            desc: "",
        },
        {
            id: 6,
            imgSrc: Img6,
            desc: "",
        },
        {
            id: 7,
            imgSrc: Img7,
            desc: "",
        },
        {
            id: 8,
            imgSrc: Img8,
            desc: "",
        },
        {
            id: 9,
            imgSrc: Img9,
            desc: "",
        },
        {
            id: 10,
            imgSrc: Img10,
            desc: "",
        },
        {
            id: 11,
            imgSrc: Img11,
            desc: "",
        },
        {
            id: 12,
            imgSrc: Img12,
            desc: "",
        },
        {
            id: 13,
            imgSrc: Img13,
            desc: "",
        },
        {
            id: 14,
            imgSrc: Img14,
            desc: "",
        },
        {
            id: 15,
            imgSrc: Img15,
            desc: "",
        },
        {
            id: 16,
            imgSrc: Img16,
            desc: "",
        },
        {
            id: 17,
            imgSrc: Img17,
            desc: "",
        },
        {
            id: 18,
            imgSrc: Img18,
            desc: "",
        },
        {
            id: 19,
            imgSrc: Img19,
            desc: "",
        },
        {
            id: 20,
            imgSrc: Img20,
            desc: "",
        },
        {
            id: 21,
            imgSrc: Img21,
            desc: "",
        },
        {
            id: 22,
            imgSrc: Img22,
            desc: "",
        },
        {
            id: 23,
            imgSrc: Img23,
            desc: "",
        },
        {
            id: 24,
            imgSrc: Img24,
            desc: "",
        },
        {
            id: 25,
            imgSrc: Img25,
            desc: "",
        },
        {
            id: 26,
            imgSrc: Img26,
            desc: "",
        },
        {
            id: 27,
            imgSrc: Img27,
            desc: "",
        },
        {
            id: 28,
            imgSrc: Img28,
            desc: "",
        },
        {
            id: 29,
            imgSrc: Img29,
            desc: "",
        },
        {
            id: 30,
            imgSrc: Img30,
            desc: "",
        },
        {
            id: 31,
            imgSrc: Img31,
            desc: "",
        },
        {
            id: 32,
            imgSrc: Img32,
            desc: "",
        },
        {
            id: 33,
            imgSrc: Img33,
            desc: "",
        },
        {
            id: 34,
            imgSrc: Img34,
            desc: "",
        },
        {
            id: 35,
            imgSrc: Img35,
            desc: "",
        },
        {
            id: 36,
            imgSrc: Img36,
            desc: "",
        },
        {
            id: 37,
            imgSrc: Img37,
            desc: "",
        },
        {
            id: 38,
            imgSrc: Img38,
            desc: "",
        },
        {
            id: 39,
            imgSrc: Img39,
            desc: "",
        },
        {
            id: 40,
            imgSrc: Img40,
            desc: "",
        },
    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
        console.warn(imgSrc);
    }
    return (
        <Router>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc}
                     onClick={() => setModel(false)}/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics"
                             key={index}
                             onClick={() =>
                                 getImg(item.imgSrc)}>
                            <img src={item.imgSrc}
                                 style={{width: '100%'}}/>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </Router>
    )
}
export default Gallery;