import './styles.css'
import { useState, useEffect } from 'react';
import { DiFirebase, DiGithub } from "react-icons/di";
import { FaCss3, FaGooglePlay, FaReact } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { SiGoogleadmob, SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { MdOutlineSdStorage } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { IoLogoFirebase, IoNotifications } from 'react-icons/io5';

export default function Card({ data }) {

    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

    useEffect(() => {
        Aos.init({
            duration: 1200,
        });

        const atualizarLarguraDaTela = () => {
            setLarguraDaTela(window.innerWidth);
        };

        window.addEventListener('resize', atualizarLarguraDaTela);

        return () => {
            window.removeEventListener('resize', atualizarLarguraDaTela);
        };
    }, []);

    if (larguraDaTela <= 768) {
        return (
            <div className='proj-item'>
                <div className='proj-image' style={{backgroundImage: `url(${data.imageApp})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', width: '100%'}}> </div>
                <p className='item-subtitle archivo' data-aos="fade-left">{data.nome}</p>
                <p className='item-text'> {data.descricao}</p>
                <div className='container-tech'>
                    <div className='container-tech techs'>
                        {data.tecnologias.includes('RN') && (<FaReact size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('RJ') && (<FaReact size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('TS') && (<SiTypescript size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('AS') && (<MdOutlineSdStorage size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('FB') && (<IoLogoFirebase size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('AM') && (<SiGoogleadmob size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('RC') && (<FaGooglePlay size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('OS') && (<IoNotifications size={26} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('CS') && (<FaCss3 size={26} className='proj-icon' color='#fff' />)}
                    </div>
                </div>
                {data.temLink && (
                    <div className='container-tech'>

                        {data.deploy && (
                            <a href={data.deploy} target='_blank'>
                                <button className='deploy-button'>
                                    <FaLink size={20} color='#000' className='proj-icon' />
                                    <p className='deploy-text '>Deploy</p>
                                </button>
                            </a>
                        )}

                        {data.git && (
                            <a href={data.git} target='_blank'>
                                <button className='gt-btn'>
                                    <DiGithub size={30} color='#fff' className='proj-icon' />
                                    <p className='gt-txt '>Git Hub</p>
                                </button>
                            </a>
                        )}
                    </div>
                )}
            </div>
        )
    } else {
        return (
            <div className='proj-item'>
                <div className='proj-image' style={{backgroundImage: `url(${data.image})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat',}} > </div>

                <div className='proj-box-row'>
                    <p className='item-subtitle archivo' >{data.nome}</p>
                    <p className='item-text' >{data.descricao}</p>
                    <div className='container-techs techs'>
                        {data.tecnologias.includes('RN') && (<FaReact size={30} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('RJ') && (<FaReact size={30} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('TS') && (<SiTypescript size={30} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('SC') && (<SiStyledcomponents size={45} className='proj-icon sc' color='#fff' />)}
                        {data.tecnologias.includes('AS') && (<MdOutlineSdStorage size={28} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('FB') && (<IoLogoFirebase size={30} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('AM') && (<SiGoogleadmob size={28} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('RC') && (<FaGooglePlay size={28} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('OS') && (<IoNotifications size={28} className='proj-icon' color='#fff' />)}
                        {data.tecnologias.includes('CS') && (<FaCss3 size={30} className='proj-icon' color='#fff' />)}
                    </div>
                    {data.temLink && (
                        <div className='container-tech '>
                            {data.deploy && (
                                <a href={data.deploy} target='_blank' className='ancora-buttons'>
                                    <button className='deploy-button'>
                                        <FaLink size={20} color='#000' className='proj-icon' />
                                        <p className='deploy-text '>Deploy</p>
                                    </button>
                                </a>
                            )}
                            {data.git && (
                                <a href={data.git} target='_blank' className='ancora-buttons'>
                                    <button className='gt-btn'>
                                        <DiGithub size={30} color='#fff' className='proj-icon' />
                                        <p className='gt-txt '>Git Hub</p>
                                    </button>
                                </a>
                            )}
                        </div>
                    )}
                    
                                </div>
                </div>
        )
    }

}