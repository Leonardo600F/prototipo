import { useState } from 'react';

import {
    Container,
    ImageBanner,
    InformationContainer,
    Title,
    DetailsContainer,
    PlataformContainer,
    PlataformIconContainer,
    DiscountContainer,
    PricesContainer,
    BuyContainer,
    ShoppingIconContainer,
    FavoriteButton,
    FavoriteIcon


} from './bundleComponent-style';

import ShoppingIcon from '../../assets/icon-shopping-add.png';
import HeartIcon from '../../assets/icon-heart.png';
import TransparentHeartIcon from '../../assets/icon-heart-transparent.png';


export default function BundleComponent({ bundle }: any) {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <Container>

            <ImageBanner alt="" src={bundle.banner}
            />

            <InformationContainer>

                <Title>{bundle.title}</Title>

                <DetailsContainer>

                    <PlataformContainer>
                        <PlataformIconContainer alt='Plataforma do produto' src={bundle.plataformIcon} />
                        <span>{bundle.plataformName}</span>
                    </PlataformContainer>


                    <DiscountContainer>
                        <span>{bundle.discount}</span>
                    </DiscountContainer>

                    <PricesContainer>
                        <span>{bundle.oldPrice}</span>
                        <span>{bundle.price}</span>
                    </PricesContainer>

                    <BuyContainer>
                        <ShoppingIconContainer alt='Carrinho de compras' src={ShoppingIcon} />
                        <span>Comprar</span>
                    </BuyContainer>

                    <FavoriteButton
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <FavoriteIcon
                            alt='Adicionar à lista de desejos'
                            src={isHovered ? HeartIcon : TransparentHeartIcon}
                        />
                    </FavoriteButton>

                </DetailsContainer>

            </InformationContainer>

        </Container>

    )
}