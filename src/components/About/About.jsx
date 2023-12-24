import { useState, useEffect } from 'react';
import './styles.css'
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css' 


export default function About() {

    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

    useEffect(() => {
        Aos.init({
            duration: 1500,
        }); 

        const atualizarLarguraDaTela = () => {
            setLarguraDaTela(window.innerWidth);
        };

        window.addEventListener('resize', atualizarLarguraDaTela);

        return () => {
            window.removeEventListener('resize', atualizarLarguraDaTela);
        };
    }, []);

    return (
        <div className="about-container">
            <p className="about-title poppins" >Oi, meu nome é</p>
            <p className="about-title-green poppins" >Adriel Rodrigues</p>
            <p className="about-subtitle poppins"  >Desenvolvedor Front End</p>
            <p className="about-description poppins">Sou desenvolvedor mobile e web com 1 ano de experiencia. Meu foco é
                React Native e React JS.</p>
            <a href='https://drive.google.com/file/d/1ICljIyBkuFy4GgmVYMgrPB9nlqpPyNlv/view?usp=sharing' target='_blank'>
                <button className='abt-button'  >
                    {larguraDaTela <= 768 ? ( <p className='poppins'>Download CV</p> ) : (
                        <div className='abt-button2'>
                            <IoMdDownload color='#fff' size={25} className='abt-icon'/>
                            <p className='poppins'>Download CV</p>
                        </div>
                    )}
                    
                </button>
            </a>
            <div className="container-links" >
                <a href="https://www.instagram.com/onlydriel/" target='_blank'>
                    <button className='button-link'>
                        <CiInstagram className='icon-instagram' color='#fff' size={30} style={{ zIndex: 99 }} />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/adriel-rodrigues/" target='_blank'>
                    <button className='button-link'>
                        <CiLinkedin className='icon-linkedin' color='#fff' size={30} style={{ zIndex: 99 }} />
                    </button>
                </a>
                <a href="https://github.com/AdrielRod" target='_blank'>
                    <button className='button-link'>
                        <FaGithub className='icon-git' color='#fff' size={30} style={{ zIndex: 99 }} />
                    </button>
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXSnhBlWncXlDXHwwRFvmSBQDNVbfPzxrCMwkwVvtBFRkhSkqfxZJFngZnRKhwmqwTMpr" target='_blank'>
                    <button className='button-link'>
                        <MdOutlineEmail className='icon-email' color='#fff' size={30} style={{ zIndex: 99 }} />
                    </button>
                </a>
            </div>

        </div>
    )

}