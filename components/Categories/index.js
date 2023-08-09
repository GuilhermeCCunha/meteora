import Image from "next/image"
import { CategoriesDiv, StyledCategories, Title, Subtitles, Item } from "./styles"

export default function Categories({ category, setCategory }) {

    return (
        <StyledCategories>
            <Title>Busque por categoria:</Title>
            <CategoriesDiv>

                <Item onClick={() => category === "Camisetas" ? setCategory("") : setCategory("Camisetas")}>
                    <Image
                        src="/images/desktop/categorias/categoria-camiseta.png"
                        alt="Categoria camisetas"
                        width={160}
                        height={157}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                        gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                    />
                    <Subtitles>Camisetas</Subtitles>
                </Item>

                <Item onClick={() => category === "Bolsas" ? setCategory("") : setCategory("Bolsas")}>
                    <Image
                        src="/images/desktop/categorias/categoria-bolsa.png"
                        alt="Categoria bolsas"
                        width={160}
                        height={157}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                        gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                    />
                    <Subtitles>Bolsas</Subtitles>
                </Item>

                <Item onClick={() => category === "Calçados" ? setCategory("") : setCategory("Calçados")}>
                    <Image
                        src="/images/desktop/categorias/categoria-calcados.png"
                        alt="Categoria calçados"
                        width={160}
                        height={157}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                        gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                    />
                    <Subtitles>Calçados</Subtitles>
                </Item>

                <Item onClick={() => category === "Calças" ? setCategory("") : setCategory("Calças")}>
                    <Image
                        src="/images/desktop/categorias/categoria-calca.png"
                        alt="Categoria calças"
                        width={160}
                        height={157}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                        gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                    />
                    <Subtitles>Calças</Subtitles>
                </Item>

                <Item onClick={() => category === "Casacos" ? setCategory("") : setCategory("Casacos")} >
                    <Image
                        src="/images/desktop/categorias/categoria-casacos.png"
                        alt="Categoria casacos"
                        width={160}
                        height={157}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                        gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                    />
                    <Subtitles>Casacos</Subtitles>
                </Item>

                <Item onClick={() => category === "Óculos" ? setCategory("") : setCategory("Óculos")} >
                    <Image
                        src="/images/desktop/categorias/categoria-oculos.png"
                        alt="Categoria óculos"
                        width={160}
                        height={157}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                        gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                    />
                    <Subtitles>Óculos</Subtitles>
                </Item>

            </CategoriesDiv>
        </StyledCategories>
    )
}