// import './styles.js'
import { StyledHeader} from './styles'

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <ul className='links'>
                    <li>
                        {/* <a>Meteora</a> */}
                        <a><img src='./images/Mobile/Logo mobile.png' /></a>
                    </li>
                    <li>
                        <a href="">
                            Nossas lojas
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Novidades
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Promoções
                        </a>
                    </li>
                </ul>
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