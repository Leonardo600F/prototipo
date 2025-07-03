import {
    Container,
    BestSellersTitle,
    SeeMoreButton,
    BestSellersContainer
} from './bestSellersGamesHome-style';

import BestSellersGamesComponent from '../../components/bestSellersGamesComponent/bestSellersGamesComponent';

import SteamIcon from '../../assets/logo-steam-white.png';

const bestGames = [{
    icon: SteamIcon,
    position: '1',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/639761776f34380014ef29ae/banners/bozjaqcwxkttukbcvkoa.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'The Last of Us - Part I',
    system: 'Windows',
    discount: '-57%',
    price: 'R$ 106,20'
},

{
    icon: SteamIcon,
    position: '2',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbaf169702d0a9cb55f00/banners/pcqddpt6bo50hlebrxol.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'LEGO Batman',
    system: 'Windows',
    discount: '-95%',
    price: 'R$ 4,49'
},

{
    icon: SteamIcon,
    position: '3',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/647e58dc234f4100143829a3/banners/pf4dvirwwuhwnp1nbk45.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'HELLDIVERS 2',
    system: 'Windows',
    discount: '-32%',
    price: 'R$ 135,60'
},

{
    icon: SteamIcon,
    position: '4',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/67812a13541e8b0939f62caa/banner/kaadyurc88eawo6o2se6.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'The Last of Us - Part II Remastered',
    system: 'Windows',
    discount: '-16%',
    price: 'R$ 167,91'
},

{
    icon: SteamIcon,
    position: '5',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbcb269702d0a9c600801/banners/lsv97mpj5fk77u9ghc1a.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'Middle-earth: Shadow of Mordor - Game of the Year Edition',
    system: 'Windows',
    discount: '-95%',
    price: 'R$ 4,49'
},

{
    icon: SteamIcon,
    position: '6',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbc1e69702d0a9c62d400/banners/jtqzsafetae2lo5vhysp.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'LEGO The Hobbit',
    system: 'Windows',
    discount: '-95%',
    price: 'R$ 4,49'
},

{
    icon: SteamIcon,
    position: '7',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbb9f69702d0a9c7da700/banners/hsiewkvv7acngp7xbbeb.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'Batman: Arkham Knight',
    system: 'Windows',
    discount: '-90%',
    price: 'R$ 8,99'
},

{
    icon: SteamIcon,
    position: '8',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/557dbb7669702d0a9c3a9900/banners/xtesdj70q0taq7r3apmr.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'LEGO Harry Potter Years 5-7',
    system: 'Windows',
    discount: '-90%',
    price: 'R$ 8,99'
},

{
    icon: SteamIcon,
    position: '9',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/681ba3eedb7e0c9fa0feb41c/banner/dc1mdthvx5isbd7e97xx.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: '9 Kings',
    system: 'Windows',
    discount: '-35%',
    price: 'R$ 25,99'
},

{
    icon: SteamIcon,
    position: '10',
    banner: 'https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/66280fc1cd9b470c7837a0c7/banners/gacchajknvhyhbtb7tqj.jpg',
    plataform: 'Steam',
    bundle: 'Pacote',
    name: 'Sonic Frontiers',
    system: 'Windows',
    discount: '-70%',
    price: 'R$ 86,70'
},

]

export default function BestSellersGamesHome() {
    return (
        <Container>
            <BestSellersTitle>Mais Vendidos</BestSellersTitle>
            <SeeMoreButton>
                <span>Ver mais</span>
            </SeeMoreButton>
            <BestSellersContainer>
                {bestGames.map((bestGames) => (
                    <BestSellersGamesComponent bestGames={bestGames} />
                ))}
            </BestSellersContainer>
        </Container>
    )
}