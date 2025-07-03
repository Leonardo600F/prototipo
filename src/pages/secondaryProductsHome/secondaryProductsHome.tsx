import {
    Container,
    ProductsContainer
} from './secondaryProductsHome-style';


import SecondaryProductsComponent from '../../components/secondaryProductsComponent/secondaryProductsComponent';
import SteamIcon from '../../assets/logo-steam-white.png';

const secondaryProducts = [{
    plataformIcon: SteamIcon,
    plataformName: 'Steam',
    banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg?t=1720558643',
    text: 'Isto é barriga, Senhor Cinema! 🤠',
    discount: '-50%',
    price: 'R$ 149,95'
},
{
    plataformIcon: SteamIcon,
    plataformName: 'Steam',
    banner: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/0kRqUeSBIbQzz7cen3c989c6.jpg',
    text: 'Não é com aquele do SBT! 👀',
    discount: '-45%',
    price: 'R$ 112,50'
}]

export default function secondaryProductsHome() {

    return (

        <Container>
            <ProductsContainer>{secondaryProducts.map((secondaryProducts) => (
                <SecondaryProductsComponent secondaryProducts={secondaryProducts} />
            ))}</ProductsContainer>
        </Container>
    )
}