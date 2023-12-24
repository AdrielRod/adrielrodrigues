// RN - REACT NATIVE
// TS - TYPESCRIPT
// SC - STYLED COMPONENTS
// AS - ASYNC STORAGE
// FB - FIREBASE
// AM - ADMOB
// RC - REVENUE CAT
// OS - ONE SIGNAL
// CS - CSS

import Foto from '../assets/images/foto.png'
import FotoApp from '../assets/images/fotoApp.png'
import Batedeira from '../assets/images/batedeira.png'
import BatedeiraApp from '../assets/images/batedeiraApp.png'
import Chamado from '../assets/images/chamado.png'
import ChamadoApp from '../assets/images/chamadoApp.png'
import Mesa from '../assets/images/mesa.png'
import MesaApp from '../assets/images/mesaApp.png'
import Spells from '../assets/images/spells.png'
import SpellsApp from '../assets/images/spellsApp.png'
import FotoWeb from '../assets/images/fotoweb.png'
import FotoWebApp from '../assets/images/fotoWebApp.png'

export const data = [
    {
        id: '1',
        nome: "Batedeira App",
        descricao: "App para vendas de açai de uma determinada região, onde o cliente já tinha algumas telas feitas. Fui responsável de adicionar algumas funcionalidades e correção de alguns bugs, como por exemplo: Sistema de progresso, Sistema de contagem de litros vendidos, Pontuação cliente, Alteração em personalização de perfil. Feito com: React Native, Typescript, Styled Components, Async Storage e Firebase.",
        tecnologias: ['RN', 'TS', 'SC', 'AS', 'FB'],
        emProgresso: false,
        temLink: false,
        web: false,
        app: true,
        tipo: 'freelancer',
        deploy: '',
        git: '',
        image: Batedeira,
        imageApp: BatedeiraApp,
    },
    {
        id: '2',
        nome: "Foto Auto - App",
        descricao: "App para a plataforma de um curso online, focado comunidade entre alunos. Fui encarregado de desenvolver partes do sistema. Fiz alguns ajustes de telas e correção de alguns bugs. Desenvolvi uma sistema de filtro de palavras nos chats, além de um CRUD em determinada tela do aplicativo. Feito com: React Native, Typescript, Styled Components, Async Storage e Firebase.",
        tecnologias: ['RN', 'TS', 'SC', 'AS', 'FB'],
        emProgresso: false,
        temLink: false,
        web: false,
        app: true,
        tipo: 'freelancer',
        deploy: '',
        git: '',
        image: Foto,
        imageApp: FotoApp,
    },
    {
        id: '3',
        nome: "Spells of Iracema",
        descricao: "O aplicativo visa ajudar jogadores de RPG de mesa D&D 5e a gerenciarem melhor os seus feitiços, além de poderem salvar e pesquisar mais magias do sistema. No app, eles podem criar personagens de suas mesas e personaliza-los com sua classe e raça. Depois, eles podem consultar uma lista de feitiços. Feito com: React Native, Styled Components, Async Storage, Firebase.",
        tecnologias: ['RN', 'SC', 'AS', 'FB'],
        emProgresso: false,
        temLink: true,
        web: false,
        app: true,
        tipo: 'pessoal',
        deploy: 'https://play.google.com/store/apps/details?id=com.guaxz.SpellsOfIracema',
        git: '',
        image: Spells,
        imageApp: SpellsApp,
    },
    {
        id: '4',
        nome: "Minha Mesa: RPG",
        descricao: "Aplicativo tem como função ajudar jogadores e mestres de RPG a encontrarem mesas e divulgarem, gerando assim a possibilidade do aumento de pessoas nessa cultura RPGista. O aplicativo tem assinatura mensal e também anúncios. Conta com mais ou menos 15 telas e chats para conversação. Além disso, ele possui sistemas de notificação quando alguma mesa é publicada e serviços premium. Feito com: React Native, Styled Components, Async Storage, Firebase, AdMob, RevenueCat e OneSignal.",
        tecnologias: ['RN', 'SC', 'AS', 'FB', 'AM', 'OS', 'RC'],
        emProgresso: false,
        temLink: true,
        web: false,
        app: true,
        tipo: 'pessoal',
        deploy: 'https://play.google.com/store/apps/details?id=com.guaxz.MinhaMesa',
        git: '',
        image: Mesa,
        imageApp: MesaApp,
    },
    {
        id: '4',
        nome: "Sistema de Chamados",
        descricao: "Controle e gerenciamento de chamados. No site você pode logar ou criar uma conta. Cadastrar um tipo de cliente e depois registrar chamados com diferentes tipo. De conexão usei o firestore e também o storage para armazenar a imagem do usuário. Feito com: React JS, Firebase e CSS",
        tecnologias: ['RJ', 'FB', 'CS'],
        emProgresso: false,
        temLink: true,
        web: true,
        app: false,
        tipo: 'pessoal',
        deploy: 'https://adriel-chamados.netlify.app/',
        git: 'https://github.com/AdrielRod/web-sistemachamados',
        image: Chamado,
        imageApp: ChamadoApp,
    },
    {
        id: '5',
        nome: "Foto Auto - Web",
        descricao: "Uma plataforma web para o curso online, focado na gestão administrativa da comunidade do App. Fui encarregado de desenvolver completamente o dashboard do site. Nele, o admin conseguiria administrar os cargos dos alunos, inspecionar o chat, fazer post na comunidade, gerenciar e assegurar as imagens enviadas no aplicativo. Feito com: React JS, Styled Components, Firebase",
        tecnologias: ['RJ', 'SC', 'FB'],
        emProgresso: false,
        temLink: false,
        web: true,
        app: false,
        tipo: 'freelancer',
        deploy: '',
        git: '',
        image: FotoWeb,
        imageApp: FotoWebApp,
    },
]