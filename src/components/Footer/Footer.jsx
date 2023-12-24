import './styles.css'
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact, FaWhatsapp } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { MdEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import Aos from 'aos';
import 'aos/dist/aos.css' 
import { useEffect } from 'react';

export default function Footer() {


    useEffect(()=>{
        Aos.init({
            duration: 800,
        });
    }, [])
    return (
        <div className="ft-container">
            <h1 className='ft-title dm' data-aos="zoom-out-right">Contato</h1>
            <div className='ft-item' > 
                <MdEmail size={30} color='#fff'/>
                <p className='ft-txt'>adrielgomes604@gmail.com</p>
            </div>
            <a href="https://github.com/AdrielRod" target='_blank' className='ft-a' >
                <div className='ft-item'>
                    <FaGithub size={30} color='#fff'/>
                    <p className='ft-txt'>Adriel Rod</p>
                </div>
            </a>
            <a href="https://wa.link/5bn0g6" target='_blank' className='ft-a' >
                <div className='ft-item'>
                    <FaWhatsapp size={30} color='#fff'/>
                    <p className='ft-txt'>+55 (85) 9 9165-0427</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/adriel-rodrigues/" target='_blank' className='ft-a' >
                <div className='ft-item'>
                    <CiLinkedin size={30} color='#fff'/>
                    <p className='ft-txt'>Adriel Rodrigues</p>
                </div>
            </a>
        </div>
    )
}