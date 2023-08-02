import React, { useState } from 'react'
import { StyledHeader, NavLinks, Menu, CloseSidebar, Anchor, Title } from './styles'
import { useRouter } from 'next/router'

export default function Header({ onQuery }) {
    function handleInput(e) {
        onQuery(e.target.value);
    }

    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()

    const showSiderbar = () => setSidebar(!sidebar)

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''
    }

    return (
        <StyledHeader>
            <nav>
                <Title><img src='./images/mobile/logo-mobile.png' alt="Logo da loja Meteora" /></Title>
                <NavLinks sidebar={sidebar ? 1 : 0}>
                    <CloseSidebar onClick={showSiderbar}><img src='./images/close-menu-icon.svg' alt="close menu" /></CloseSidebar>
                    <Anchor className={activeLink('') || activeLink('#')} onClick={showSiderbar} href="#">
                        Home
                    </Anchor>
                    <hr />
                    <Anchor onClick={showSiderbar} href="#">
                        Nossas lojas
                    </Anchor>
                    <hr />
                    <Anchor onClick={showSiderbar} href="#">
                        Novidades
                    </Anchor>
                    <hr />
                    <Anchor onClick={showSiderbar} href="#">
                        Promoções
                    </Anchor>
                </NavLinks>
                <Menu>
                    <img src='./images/menu-bar-icon.svg' alt="menu" onClick={showSiderbar} />
                </Menu>
                <ul className='search'>
                    <li>
                        <input type="text" placeholder="Digite o produto" onInput={handleInput} />
                    </li>
                    <li>
                        <button>
                            Buscar
                        </button>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}