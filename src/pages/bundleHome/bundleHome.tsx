import {
    Container,
    BundleContainer
} from './bundleHome-style';

import SteamIcon from '../../assets/logo-steam-white.png';

import BundleComponent from '../../components/bundleComponent/bundleComponent';

const bundle = [{
    banner: 'https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/vpZlDgH5QSi3XRuSB0qi',
    plataformIcon: SteamIcon,
    plataformName: 'Steam',
    title: 'Pacote dos jogos de Dragon Ball para PC!',
    discount: '-40%',
    oldPrice: 'R$ 600,00',
    price: 'R$ 360,00'
}]

export default function BundleHome() {

    return (
        <Container>
            <BundleContainer>
                {bundle.map((bundle) => (
                    <BundleComponent bundle={bundle} />
                ))}
            </BundleContainer>
        </Container>
    )

}