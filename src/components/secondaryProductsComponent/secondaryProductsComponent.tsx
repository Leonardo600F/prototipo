import { useState } from 'react';

import {
    Container,
    ImageContainer,
    SteamContainer,
    SteamIconContainer,
    InformationContainer,
    TitleSpan,
    DiscountContainer,
    BuyContainer,
    FavoriteButton,
    ShoppingIconContainer,
    Icon

} from './secondaryProductsComponent-style';

import ShoppingIcon from '../../assets/icon-shopping-add.png';
import HeartIconTransparent from '../../assets/icon-heart-transparent.png';
import HeartIcon from '../../assets/icon-heart.png';

export default function SecondaryProductsComponent({ secondaryProducts }: any) {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <Container>
            <ImageContainer alt="" src={secondaryProducts.banner} />

            <SteamContainer>
                <SteamIconContainer alt="Jogo Steam" src={secondaryProducts.plataformIcon} />
                <span>{secondaryProducts.plataformName}</span>
            </SteamContainer>

            <InformationContainer>

                <TitleSpan>{secondaryProducts.text}</TitleSpan>

                <DiscountContainer>
                    <span>{secondaryProducts.discount}</span>
                </DiscountContainer>

                <BuyContainer>
                    <ShoppingIconContainer alt="Carrinho de compras" src={ShoppingIcon} />
                    <span>{secondaryProducts.price}</span>
                </BuyContainer>

                <FavoriteButton
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Icon
                        alt='Adicionar à lista de desejos'
                        src={isHovered ? HeartIcon : HeartIconTransparent}
                    />
                </FavoriteButton>

            </InformationContainer>

        </Container>


    )
}

/* 



            <InformationContainer>

                <FavoriteButton
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Icon
                        alt='Adicionar à lista de desejos'
                        src={isHovered ? HeartIcon : HeartIconTransparent}
                    />
                </FavoriteButton>

            </InformationContainer>
*/