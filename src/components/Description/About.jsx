import { useState, useEffect } from 'react';

import './styles.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Tech() {

    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);



    useEffect(() => {

        Aos.init({
            duration: 800,
        })

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
            <div className="description-container">
                <h1 className='description-title dm'>Sobre mim</h1>

                <div className='description-box'>
                    <div className='description-image'></div>


                    <p className='description-subtitle archivo'>Desenvolvedor Mobile & Web</p>
                    <p className='description-text archivo'>Iniciei meus estudos em novembro de 2022. Comecei por lógica, fui para javascript e apenas no meio de janeiro, lancei-me aos estudos em React Native e React JS.</p>
                    <p className='description-text archivo'>Comecei a fazer vários projetos para aperfeiçoar os meus conhecimentos nas tecnologias e logo em abril consegui meu primeiro serviço freelancer. Depois desse mês, consegui realizar mais alguns serviços, no qual pude colocar em prática tudo que havia aprendido.</p>
                    <p className='description-text archivo'>Atualmente, continuo atuando como freelancer em plataformas de serviços, mas procuro constantemente oportunidades para trabalhos remotos e presenciais pela região onde eu moro.</p>

                    <div className='section-datas'>
                        <div className='data-box'>
                            <p className='data-title poppins'>1+</p>
                            <p className='dt-subtitle poppins'>Ano de</p>
                            <p className='dt-subtitle poppins'>experiência</p>
                        </div>

                        <div className='line'></div>

                        <div className='data-box'>
                            <p className='data-title poppins'>4</p>
                            <p className='dt-subtitle poppins'>Clientes</p>
                            <p className='dt-subtitle poppins'>satisfeitos</p>
                        </div>

                        <div className='line'></div>

                        <div className='data-box'>
                            <p className='data-title poppins'>8</p>
                            <p className='dt-subtitle poppins'>Projetos</p>
                            <p className='dt-subtitle poppins'>finalizados</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="description-container" data-aos="fade-right" id='sobre'>
                <h1 className='description-title dm' data-aos="fade-right">Sobre mim</h1>

                <div className='description-box' data-aos="fade-right">
                    <div className='description-image' data-aos="zoom-in"></div>


                    <div className='description-data'>
                        <p className='description-subtitle archivo' data-aos="fade-down">Desenvolvedor Mobile & Web</p>
                        <p className='description-text archivo' data-aos="fade-left">Iniciei meus estudos em novembro de 2022. Comecei por lógica, fui para javascript e apenas no meio de janeiro, lancei-me aos estudos em React Native e React JS.</p>
                        <p className='description-text archivo' data-aos="fade-left">Comecei a fazer vários projetos para aperfeiçoar os meus conhecimentos nas tecnologias e logo em abril consegui meu primeiro serviço freelancer. Depois desse mês, consegui realizar mais alguns serviços, no qual pude colocar em prática tudo que havia aprendido.</p>
                        <p className='description-text archivo' data-aos="fade-left">Atualmente, continuo atuando como freelancer em plataformas de serviços, mas procuro constantemente oportunidades para trabalhos remotos e presenciais pela região onde eu moro.</p>
                        <div className='section-datas' data-aos="fade-up">
                            <div className='data-box'>
                                <p className='data-title poppins'>1+</p>
                                <p className='dt-subtitle poppins'>Ano de</p>
                                <p className='dt-subtitle poppins'>experiência</p>
                            </div>
                            <div className='line'></div>
                            <div className='data-box'>
                                <p className='data-title poppins'>4</p>
                                <p className='dt-subtitle poppins'>Clientes</p>
                                <p className='dt-subtitle poppins'>satisfeitos</p>
                            </div>
                            <div className='line'></div>
                            <div className='data-box'>
                                <p className='data-title poppins'>8</p>
                                <p className='dt-subtitle poppins'>Projetos</p>
                                <p className='dt-subtitle poppins'>finalizados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}