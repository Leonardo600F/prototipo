import { useState, useRef } from "react";

import {
    Container,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    ClearButton,
    CloseImg,
    ProductsIconContainer,
    GamesContainer,
    DropDownMenuIconContainer,
    GiftsContainer,
    UserContainer,
    ShoppingContainer,
    ShoppingIconContainer,
    LoginContainer,
    LoginIconContainer,
    SearchInput,
    SearchIconButton,
    SearchIcon,
    GamesDropDownMenu,
    GiftCardsDropDownMenu,
    GamesDropDownMenuContent,
    GiftCardsDropDownMenuContent,
    Logo
} from './header-style';

import LensIcon from '../../assets/icon-search.png';
import LensIconRed from '../../assets/icon-search-red.png';
import CloseIcon from "../../assets/icon-close.png";
import GamesIcon from '../../assets/icon-controller.png';
import GiftCardsIcon from '../../assets/icon-gift-card.png';
import ShoppingIcon from '../../assets/icon-shopping.png';
import LoginIcon from '../../assets/icon-login.png';
import XboxBlackIcon from '../../assets/logo-xbox-black.png';
import PlaystationBlackIcon from '../../assets/logo-playstation-black.png';
import NintendoBlackIcon from '../../assets/logo-nintendo-black.png';
import SteamLogo from '../../assets/logo-steam-black-2.png';
import PlayStoreLogo from '../../assets/logo-play-black.png';
import EpicGamesLogo from '../../assets/logo-epic-games-black.png';

export default function Header() {

    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [clearButton, setClearButton] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const search = () => {
        setOpenSearchBar(true);
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    function handleInput(inputValue: string) {
        setInputValue(inputValue);
        if (inputValue === '') {
            setClearButton(false);
        } else {
            setClearButton(true);
        }
    }

    const clearInput = () => {
        setInputValue('');
        setClearButton(false);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <Container>

            <LogoContainer>
                <Logo title="Página inicial">Huntter</Logo>
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer openSearchBar={openSearchBar} onFocus={() => setOpenSearchBar(true)} onBlur={() => setOpenSearchBar(false)}>
                    <SearchInput
                        ref={inputRef}
                        value={inputValue}
                        placeholder='Procurando por algo específico?'
                        onChange={(e) => {
                            handleInput(e.target.value)
                        }}

                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setOpenSearchBar(false)
                            }
                        }} />


                    <ClearButton
                        clearButton={clearButton}
                        onClick={clearInput}>

                        <CloseImg src={CloseIcon} />

                    </ClearButton>

                    <SearchIconButton title="Pesquisar">
                        <SearchIcon alt='' src={openSearchBar ? LensIconRed : LensIcon} />
                    </SearchIconButton>

                </SearchInputContainer>
            </SearchContainer>

            <GamesContainer>
                <ProductsIconContainer alt='' src={GamesIcon} />
                <span>Jogos</span>
                <GamesDropDownMenu>

                    <GamesDropDownMenuContent>
                        <DropDownMenuIconContainer alt="" src={XboxBlackIcon} />
                        <span>Xbox</span>
                    </GamesDropDownMenuContent>

                    <GamesDropDownMenuContent>
                        <DropDownMenuIconContainer alt="" src={PlaystationBlackIcon} />
                        <span>Playstation</span>
                    </GamesDropDownMenuContent>

                    <GamesDropDownMenuContent>
                        <DropDownMenuIconContainer alt="" src={NintendoBlackIcon} />
                        <span>Nintendo</span>
                    </GamesDropDownMenuContent>

                </GamesDropDownMenu>
            </GamesContainer>

            <GiftsContainer>
                <ProductsIconContainer alt='' src={GiftCardsIcon} />
                <span>Gift Cards</span>
                <GiftCardsDropDownMenu>

                    <GiftCardsDropDownMenuContent>
                        <DropDownMenuIconContainer alt="" src={SteamLogo} />
                        <span>Steam</span>
                    </GiftCardsDropDownMenuContent>

                    <GiftCardsDropDownMenuContent>
                        <DropDownMenuIconContainer alt="" src={EpicGamesLogo} />
                        <span>Epic Games</span>
                    </GiftCardsDropDownMenuContent>

                    <GiftCardsDropDownMenuContent>
                        <DropDownMenuIconContainer alt="" src={PlayStoreLogo} />
                        <span>Play Store</span>
                    </GiftCardsDropDownMenuContent>

                </GiftCardsDropDownMenu>
            </GiftsContainer>

            <UserContainer>
                <ShoppingContainer>
                    <ShoppingIconContainer alt='' src={ShoppingIcon} />
                </ShoppingContainer>

                <LoginContainer>
                    <LoginIconContainer alt="" src={LoginIcon} />
                    <span>Entrar</span>
                </LoginContainer>
            </UserContainer>

        </Container>
    )
}