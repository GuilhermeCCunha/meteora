import React, { useState } from 'react'
import { StyledHeader, NavLinks, Menu, CloseSidebar, Anchor, Title } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header({ onQuery }) {
    function handleInput(e) {
        onQuery(e.target.value);
    }

    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()

    const router = useRouter();
    const showSearch = router.pathname === '/' ? true : false;
    const showSiderbar = () => setSidebar(!sidebar)

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''
    }

    return (
        <StyledHeader $showSearch={showSearch} >
            <nav>
                <Title><img src='./images/mobile/logo-mobile.png' alt="Logo da loja Meteora" /></Title>
                <NavLinks sidebar={sidebar ? 1 : 0}>
                    <CloseSidebar onClick={showSiderbar}><img src='./images/close-menu-icon.svg' alt="close menu" /></CloseSidebar>
                    <Link href="/">
                        <Anchor className={activeLink('')} onClick={showSiderbar}>Home</Anchor>
                    </Link>
                    <hr />
                    <Link href="/soon">
                        <Anchor onClick={showSiderbar}>Nossas lojas</Anchor>
                    </Link>
                    <hr />
                    <Link href="/soon">
                        <Anchor onClick={showSiderbar}>Novidades</Anchor>
                    </Link>
                    <hr />
                    <Link href="/soon">
                        <Anchor onClick={showSiderbar}>Promoções</Anchor>
                    </Link>
                </NavLinks>
                <Menu>
                    <img src='./images/menu-bar-icon.svg' alt="menu" onClick={showSiderbar} />
                </Menu>
                {showSearch &&
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
                }
            </nav>
        </StyledHeader>
    )
}