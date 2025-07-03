import {
    FooterContainer,
    SocialMediaContainer,
    SocialMediaSpan,
    SocialMediaColumn,
    GeneralMediaContainer,
    SocialMediaIcon,
    SocialMediaTitle,
    InfoContainer,
    InfoSpan,
    InfoColumn,
    HelpContainer,
    HelpSpan,
    HelpColumn,
    FooterLine,
    SecondFooterLine,
    LogoContainer,
    Logo,
    CopyrightSpan
} from './footer-style';

import FacebookLogo from '../../assets/logo-facebook.png';
import InstagramLogo from '../../assets/logo-instagram.png';
import XLogo from '../../assets/logo-x-black.png';

export default function Footer() {

    return (
        <>
            <FooterLine />

            <FooterContainer>
                <SocialMediaContainer>
                    <SocialMediaSpan>Siga-nos</SocialMediaSpan>

                    <SocialMediaColumn>

                        <GeneralMediaContainer>
                            <SocialMediaIcon alt='' title='Facebook' src={FacebookLogo} />
                            <SocialMediaTitle>Facebook</SocialMediaTitle>
                        </GeneralMediaContainer>

                        <GeneralMediaContainer>
                            <SocialMediaIcon alt='' title='Instagram' src={InstagramLogo} />
                            <SocialMediaTitle>Instagram</SocialMediaTitle>
                        </GeneralMediaContainer>

                        <GeneralMediaContainer>
                            <SocialMediaIcon alt='' title='X' src={XLogo} />
                            <SocialMediaTitle>X</SocialMediaTitle>
                        </GeneralMediaContainer>

                    </SocialMediaColumn>

                </SocialMediaContainer>

                <InfoContainer>

                    <InfoSpan>Informações</InfoSpan>

                    <InfoColumn>
                        <span>Sobre</span>
                        <span>Segurança</span>
                        <span>Política de Privacidade</span>
                    </InfoColumn>

                </InfoContainer>

                <HelpContainer>
                    <HelpSpan>Ajuda</HelpSpan>

                    <HelpColumn>
                        <span>Suporte</span>
                        <span>Procon-SP</span>
                        <span>Termos de Uso</span>
                    </HelpColumn>

                </HelpContainer>

                <SecondFooterLine />

                <LogoContainer>
                    <Logo title="Página inicial">Huntter</Logo>
                </LogoContainer>

                <CopyrightSpan>© 2025</CopyrightSpan>

            </FooterContainer >

        </>

    )
}