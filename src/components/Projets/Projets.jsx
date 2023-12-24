import './styles.css'
import { useState } from 'react';
import Card from './Card';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'aos/dist/aos.css'
import Aos from 'aos';
import { useEffect } from 'react';
import { data } from '../../data/data';

export default function Projets() {

    const [filter, setFilter] = useState('all')
    const [freelancerItems, setFreelancerItems] = useState([])
    const [pessoalItems, setPessoalItems] = useState([])



    useEffect(() => {
        setFreelancerItems(data.filter((item) => item.tipo == 'freelancer'))
        setPessoalItems(data.filter((item) => item.tipo == 'pessoal'))
        Aos.init({
            duration: 800,
        });
    }, [])

    useEffect(() => {
        if (filter == 'all') {
            setFreelancerItems(data.filter((item) => item.tipo == 'freelancer'))
            setPessoalItems(data.filter((item) => item.tipo == 'pessoal'))
        } else if(filter == 'app'){
            const filtradoFreela = data.filter((item) => item.tipo == 'freelancer')
            const filtradoPessoal = data.filter((item) => item.tipo == 'pessoal')

            setFreelancerItems(filtradoFreela.filter((item) =>  item.app == true))
            setPessoalItems(filtradoPessoal.filter((item) =>  item.app == true))
        } else{


            const filtradoFreela = data.filter((item) => item.tipo == 'freelancer')
            const filtradoPessoal = data.filter((item) => item.tipo == 'pessoal')

            setFreelancerItems(filtradoFreela.filter((item) =>  item.web == true))
            setPessoalItems(filtradoPessoal.filter((item) =>  item.web == true))
        }

        console.log('freela', freelancerItems)
        console.log('pessoaç', pessoalItems)

    }, [filter])

    return (
        <div className="proj-container" id='projetos'>
            <h1 className='proj-title dm'>Projetos</h1>

            <div className='proj-box'>
                <button className={`box-option ${filter == 'all' && 'actived'}`} onClick={() => setFilter('all')}>
                    <p className={`option-text ${filter == 'all' && 'actived-text'}`}>Todos</p>
                </button>
                <button className={`box-option ${filter == 'web' && 'actived'}`} onClick={() => setFilter('web')} >
                    <p className={`option-text ${filter == 'web' && 'actived-text'}`} >Sistemas Web</p>
                </button>
                <button className={`box-option ${filter == 'app' && 'actived'}`} onClick={() => setFilter('app')}>
                    <p className={`option-text ${filter == 'app' && 'actived-text'}`}>Aplicativos</p>
                </button>
            </div>

            <button className='box-subtitle' disabled data-aos="fade-left">
                <p className='proj-subtitle poppins'>Projetos Freelancer</p>
            </button>


            <CCarousel controls transition="slide" wrap={false} interval={5000 * 9000} >
                {freelancerItems.map((item) => (
                    <CCarouselItem>
                        <Card data={item} />
                    </CCarouselItem>
                ))}

            </CCarousel>



            <button className='box-subtitle' disabled>
                <p className='proj-subtitle poppins'>Projetos Pessoais</p>
            </button>

            <CCarousel controls wrap={false} interval={5000 * 9000}>
                {pessoalItems.map((item) => (
                    <CCarouselItem>
                        <Card data={item} />
                    </CCarouselItem>
                ))}

            </CCarousel>

            {/* {filter == 'all' ()}
            {filter == 'web' ()}
            {filter == 'native' ()} */}
        </div>
    )
}