import {
    Container,
    GamesTitle,
    SubGamesTitle,
    SeeMoreButton,
    GamesContainer
} from './fromSoftwareHome-style';

import SteamIcon from '../../assets/logo-steam-white.png';

import FromSoftwareGamesComponent from '../../components/promo/fromSoftwareComponent/fromSoftwareComponent';

const publisherGames = [{
    icon: SteamIcon,
    title: 'Steam',
    banner: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000008122/453d17f26995df6bd67d698c90ba2fd27157a61875e1a9730545da23474c6aaf',
    name: 'DARK SOULS™: REMASTERED',
    system: 'Windows',
    discount: '-40%',
    price: 'R$ 92,94'
},

{
    icon: SteamIcon,
    title: 'Steam',
    banner: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236430/header.jpg?t=1726158600',
    name: 'Dark Souls II',
    system: 'Windows',
    discount: '-50%',
    price: 'R$ 77,45'
},

{
    icon: SteamIcon,
    title: 'Steam',
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg?t=1733509027',
    name: 'Dark Souls III',
    system: 'Windows',
    discount: '-35%',
    price: 'R$ 149,44'
},

{
    icon: SteamIcon,
    title: 'Steam',
    banner: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg',
    name: 'Elden Ring',
    system: 'Windows',
    discount: '-55%',
    price: 'R$ 103,45'
}
]

export default function fromSoftwareGamesHome() {

    return (
        <Container>
            <GamesTitle>Jogos da FromSoftware com até 65% de desconto!</GamesTitle>
            <SubGamesTitle>Se seu controle não pediu aposentadoria após você rolar tanto, então tá jogando errado!</SubGamesTitle>
            <SeeMoreButton><span>Ver mais</span></SeeMoreButton>
            <GamesContainer>
                {publisherGames.map((publisherGames) => (
                    <FromSoftwareGamesComponent publisherGames={publisherGames} />
                ))}
            </GamesContainer>
        </Container>
    )
}