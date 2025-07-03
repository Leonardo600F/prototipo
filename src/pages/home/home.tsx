import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Products from '../../components/products/products';
import FromSoftwareGames from '../fromSoftwareHome/fromSoftwareHome';
import BestSellersGames from '../bestSellersGamesHome/bestSellersGamesHome';
import BundleHome from '../bundleHome/bundleHome';

import {
    HomeContainer,
    MainContainer,
    InfoContainer,
    VerifiedIconContainer,
    ShieldIconContainer,
    ControllerIconContainer,
    InfoIcons,
    InfoSpan
} from './home-style';

import VerifyIcon from '../../assets/icon-verify.png';
import ShieldIcon from '../../assets/icon-shield.png';
import ControllerIcon from '../../assets/icon-controller-colored.png';

export default function Home() {

    return (
        <HomeContainer>

            <Header />

            <MainContainer>
                <Products />

                <InfoContainer>
                    <VerifiedIconContainer alt="" src={VerifyIcon} />
                    <span>Loja</span>
                    <span>100% Oficial</span>

                    <ShieldIconContainer alt="" src={ShieldIcon} />
                    <span>Experiência</span>
                    <span>Segura e Simples</span>

                    <ControllerIconContainer alt="" src={ControllerIcon} />
                    <span>Se divirta</span>
                    <span>Com os jogos</span>

                </InfoContainer>

                <FromSoftwareGames />

                <BundleHome />

                <BestSellersGames />

            </MainContainer>

            <Footer />

        </HomeContainer >
    )
}