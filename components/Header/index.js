// import './styles.js'
import React, { useState } from 'react'
import { StyledHeader, NavLinks, Menu, CloseSidebar, Anchor, Title } from './styles'
import { useRouter } from 'next/router'

export default function Header() {
    const [sidebar, setSidebar] = useState(false)
    const { asPath } = useRouter()


    const showSiderbar = () => setSidebar(!sidebar)

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''
    }

    return (
        <StyledHeader>
            <nav>
                {/* <a>Meteora</a> */}
                <Title><img src='./images/Mobile/Logo mobile.png' /></Title>
                <NavLinks sidebar={sidebar ? 1 : 0}>
                    {/* <ul className='links'> */}
                    {/* <li> */}
                    {/* </li> */}
                    {/* <li> */}
                    <CloseSidebar onClick={showSiderbar}><img src='./images/marca-cruzada 1.svg' /></CloseSidebar>
                    <Anchor className={activeLink('') || activeLink('#')} onClick={showSiderbar} href="#">
                        Home
                    </Anchor>
                    <hr />
                    <Anchor onClick={showSiderbar} href="#">
                        Nossas lojas
                    </Anchor>
                    <hr />
                    {/* </li> */}
                    {/* <li> */}
                    <Anchor onClick={showSiderbar} href="#">
                        Novidades
                    </Anchor>
                    <hr />
                    {/* </li> */}
                    {/* <li> */}
                    <Anchor onClick={showSiderbar} href="#">
                        Promoções
                    </Anchor>
                    {/* </li> */}
                    {/* </ul> */}
                </NavLinks>
                <Menu>
                    <img src='./images/Icon Color.svg' onClick={showSiderbar} />
                </Menu>
                <ul className='search'>
                    <li>
                        <input type="text" placeholder="" />
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