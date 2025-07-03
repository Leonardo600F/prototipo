import { useState } from 'react';

import {
    Container,
    FavoriteButton,
    FavoriteIcon,
    PromoBannerContainer,
    PlataformContainer,
    PlataformIcon,
    ImageBannerContainer,
    ImageBanner,
    GameName,
    OperationalSystemContainer,
    DiscountContainer,
    BuyContainer,
    ShoppingIconContainer

} from './fromSoftwareComponent-style';

import ShoppingIcon from '../../../assets/icon-shopping-add.png';
import HeartIconTransparent from '../../../assets/icon-heart-transparent.png';
import HeartIcon from '../../../assets/icon-heart.png';

export default function FromSoftwareGamesComponent({ publisherGames }: any) {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <Container>

            <PromoBannerContainer>

                <PlataformContainer>
                    <PlataformIcon alt='' src={publisherGames.icon} />
                    <span>{publisherGames.title}</span>
                </PlataformContainer>

                <ImageBannerContainer>
                    <ImageBanner alt="" src={publisherGames.banner} />
                    <FavoriteButton
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <FavoriteIcon
                            alt='Adicionar à lista de desejos'
                            src={isHovered ? HeartIcon : HeartIconTransparent}
                            style={{ marginLeft: '8px', marginTop: '10px' }}
                        />
                    </FavoriteButton>
                </ImageBannerContainer>

                <GameName>{publisherGames.name}</GameName>

                <OperationalSystemContainer>
                    <span>{publisherGames.system}</span>
                </OperationalSystemContainer>

                <DiscountContainer>
                    <span>{publisherGames.discount}</span>
                </DiscountContainer>

                <BuyContainer>
                    <ShoppingIconContainer alt='' src={ShoppingIcon} />
                    <span>{publisherGames.price}</span>
                </BuyContainer>

            </PromoBannerContainer>

        </Container>

    )
}