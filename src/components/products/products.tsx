import { useState } from 'react';

import {
    MainProductContainer,
    ProductContainer,
    InformationContainer,
    SteamContainer,
    SteamIconContainer,
    TitleSpan,
    SecondarySpan,
    InformationSpanThree,
    BuyButton,
    WishlistIcon,
    FavoriteButton,
    HeartIconContainer
} from './products-style'

import SecondaryProducts from '../../pages/secondaryProductsHome/secondaryProductsHome';

import AddToCartIcon from '../../assets/icon-shopping-add.png';
import HeartIconTransparent from '../../assets/icon-heart-transparent.png';
import HeartIcon from '../../assets/icon-heart.png';
import SteamIcon from '../../assets/logo-steam-white.png';

export default function Products() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <MainProductContainer>

                <ProductContainer>
                    <InformationContainer>

                        <SteamContainer>
                            <SteamIconContainer alt='Steam Icon' src={SteamIcon} />
                            <span>Steam</span>
                        </SteamContainer>

                        <TitleSpan>Coleção Marvel's Spider-Man</TitleSpan>
                        <SecondarySpan>O Empire States confirmou?</SecondarySpan>
                        <InformationSpanThree>R$ 650,00</InformationSpanThree>

                        <BuyButton>
                            <WishlistIcon alt='Lista de desejos' src={AddToCartIcon} />
                            <span>Comprar</span>
                        </BuyButton>

                        <FavoriteButton
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <HeartIconContainer
                                alt='Adicionar à lista de desejos'
                                src={isHovered ? HeartIcon : HeartIconTransparent}
                            />
                        </FavoriteButton>

                    </InformationContainer>
                </ProductContainer>

                <SecondaryProducts />

            </MainProductContainer>
        </>
    );
}