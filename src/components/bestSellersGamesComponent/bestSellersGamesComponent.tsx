import { useState } from 'react';

import {
    Container,
    BannerContainer,
    PositionContainer,
    PlataformContainer,
    GameContainer,
    PlataformIcon,
    ImageContainer,
    TitleSpan,
    OperationalSystemContainer,
    InfoContainer,
    DiscountContainer,
    PriceContainer,
    BuyContainer,
    ShoppingIconContainer,
    FavoriteButton,
    FavoriteIcon
} from './bestSellersGamesComponent-style';

import ShoppingIcon from '../../assets/icon-shopping-add.png';
import HeartIconTransparent from '../../assets/icon-heart-transparent.png';
import HeartIcon from '../../assets/icon-heart.png';

export default function BestSellersGamesComponent({ bestGames }: any) {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <Container>
            <BannerContainer>
                <PositionContainer><span>{bestGames.position}</span></PositionContainer>

                <GameContainer>

                    <PlataformContainer>
                        <PlataformIcon alt='' src={bestGames.icon} />
                        <span>{bestGames.plataform}</span>
                    </PlataformContainer>

                    <ImageContainer alt="" src={bestGames.banner} />

                </GameContainer>

                <TitleSpan>{bestGames.name}</TitleSpan>

                <OperationalSystemContainer>
                    <span>{bestGames.system}</span>
                </OperationalSystemContainer>

                <InfoContainer>

                    <DiscountContainer>
                        <span>{bestGames.discount}</span>
                    </DiscountContainer>

                    <PriceContainer>
                        {bestGames.price}
                    </PriceContainer>

                    <BuyContainer>
                        <ShoppingIconContainer alt='' src={ShoppingIcon} />
                        <span>Comprar</span>
                    </BuyContainer>

                    <FavoriteButton
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <FavoriteIcon
                            alt='Adicionar à lista de desejos'
                            src={isHovered ? HeartIcon : HeartIconTransparent}
                            style={{ marginLeft: '8px', marginTop: '10px' }}
                        />
                    </FavoriteButton>

                </InfoContainer>



            </BannerContainer>
        </Container>
    )
}

/* 
                <TitleSpan>{bestGames.name}</TitleSpan>

                <OperationalSystemContainer>
                    <span>{bestGames.system}</span>
                </OperationalSystemContainer>

                <InfoContainer>

                <DiscountContainer>
                    <span>{bestGames.discount}</span>
                </DiscountContainer>

                <PriceContainer>
                    {bestGames.price}
                </PriceContainer>

                <BuyContainer>
                    <ShoppingIconContainer alt='' src={ShoppingIcon} />
                    <span>Comprar</span>
                </BuyContainer>

                <FavoriteButton
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <FavoriteIcon
                        alt='Adicionar à lista de desejos'
                        src={isHovered ? HeartIcon : HeartIconTransparent}
                        style={{ marginLeft: '8px', marginTop: '10px' }}
                    />
                </FavoriteButton>

                </InfoContainer>
                */