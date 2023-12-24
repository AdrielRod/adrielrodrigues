import './styles.css'
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import Aos from 'aos';
import 'aos/dist/aos.css' 
import { useEffect } from 'react';

export default function Tech() {


    useEffect(()=>{
        Aos.init({
            duration: 800,
        });
    }, [])
    return (
        <div className="tech-container" id='tech'>
            <h1 className='tech-title dm' data-aos="zoom-out-right">Tecnologias</h1>

            <div className='tech-box'  data-aos="fade-right">
                <div className='item-box' >
                    <AiOutlineHtml5 className='tech-icon' size={70} />
                    <p className='icon-text archivo'>HTML5</p>
                </div>
                <div className='item-box' >
                    <DiCss3Full className='tech-icon' size={70} />
                    <p className='icon-text archivo'>CSS3</p>
                </div>
                <div className='item-box'>
                    <RiJavascriptLine className='tech-icon' size={70} />
                    <p className='icon-text archivo'>JAVASCRIPT</p>
                </div>
                <div className='item-box'>
                    <SiTypescript className='tech-icon' size={55} />
                    <p className='icon-text archivo'>TYPESCRIPT</p>
                </div>
                <div className='item-box' >
                    <FaReact className='tech-icon' size={60} />
                    <p className='icon-text archivo'>REACT</p>
                </div>
                <div className='item-box' >
                    <FaReact className='tech-icon' size={60} />
                    <p className='icon-text archivo'>REACT NATIVE</p>
                </div>
                <div className='item-box'>
                    <SiStyledcomponents className='tech-icon' size={60} />
                    <p className='icon-text archivo'>STYLED</p>
                    <p className='icon-text archivo'>COMPONENTS</p>
                </div>
                <div className='item-box'>
                    <FaGithub className='tech-icon' size={60} />
                    <p className='icon-text archivo'>GITHUB</p>
                </div>
                <div className='item-box' >
                    <IoLogoFirebase className='tech-icon' size={60} />
                    <p className='icon-text archivo'>FIREBASE</p>
                </div>
                <div className='item-box' >
                    <DiMongodb className='tech-icon' size={60} />
                    <p className='icon-text archivo'>MONGO DB</p>
                </div>
            </div>
        </div>
    )
}