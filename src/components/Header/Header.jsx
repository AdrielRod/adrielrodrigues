import React, { useState, useEffect } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css' 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    useEffect(() => {
        Aos.init({
            duration: 800,
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
            <div className={`header-container ${isMenuOpen ? 'open' : 'close'}`}>

                {isMenuOpen ? null : (
                    <div className="header-title">
                        <p className="title-gr poppins">{"{"}</p>
                        <p className="title-text poppins">Adriel</p>
                        <p className="title-gr poppins">{"}"}</p>
                    </div>
                )}


                <button
                    className={`menu-toggle poppins ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}>
                    <MdOutlineMenu />
                </button>

                {isMenuOpen ? (
                    <div className={`hr-button ${isMenuOpen ? 'open' : 'close'}`}>
                        <p className="hr-txt poppins">Sobre</p>
                        <p className="hr-txt poppins">Tecnologias</p>
                        <p className="hr-txt poppins">Projetos</p>
                    </div>
                ) : null}
            </div>
        )
    } else {
        return (
            <div  className={`header-container`} id='#'>
                <div className="header-title" data-aos="fade-down">
                    <p className="title-gr poppins" >{"{"}</p>
                    <p className="title-text poppins" >Adriel</p>
                    <p className="title-gr poppins" >{"}"}</p>
                </div>

                <div className={`hr-button`} data-aos="fade-left">
                    <a href="#sobre">
                        <p className="hr-txt poppins" >Sobre</p>
                    </a>
                    <a href="#tech">
                        <p className="hr-txt poppins" >Tecnologias</p>
                    </a>
                    <a href="#projetos">
                        <p className="hr-txt poppins" >Projetos</p>
                    </a>
                </div>
            </div>)
    }
};

export default Header;
