import Image from "next/image"
import { CategoriesDiv, StyledCategories, Title, Subtitles, Item } from "./styles"

export default function Categories({ category, setCategory }) {

    return (
        <StyledCategories>
            <Title>Busque por categoria:</Title>
            <CategoriesDiv>

                <Item onClick={() => category === "Camisetas" ? setCategory("") : setCategory("Camisetas")}>
                    <Image
                        src="/images/desktop/Categorias/Categoria camiseta.png"
                        alt="Categoria camisetas"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Camisetas</Subtitles>
                </Item>

                <Item onClick={() => category === "Bolsas" ? setCategory("") : setCategory("Bolsas")}>
                    <Image
                        src="/images/desktop/Categorias/Categoria Bolsa.png"
                        alt="Categoria bolsas"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Bolsas</Subtitles>
                </Item>

                <Item onClick={() => category === "Calçados" ? setCategory("") : setCategory("Calçados")}>
                    <Image
                        src="/images/desktop/Categorias/Categoria Calçados.png"
                        alt="Categoria calçados"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Calçados</Subtitles>
                </Item>

                <Item onClick={() => category === "Calças" ? setCategory("") : setCategory("Calças")}>
                    <Image
                        src="/images/desktop/Categorias/Categoria calça.png"
                        alt="Categoria calças"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Calças</Subtitles>
                </Item>

                <Item onClick={() => category === "Casacos" ? setCategory("") : setCategory("Casacos")} >
                    <Image
                        src="/images/desktop/Categorias/Categoria casacos.png"
                        alt="Categoria casacos"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Casacos</Subtitles>
                </Item>

                <Item onClick={() => category === "Óculos" ? setCategory("") : setCategory("Óculos")} >
                    <Image
                        src="/images/desktop/Categorias/Categoria óculos.png"
                        alt="Categoria óculos"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Óculos</Subtitles>
                </Item>

            </CategoriesDiv>
        </StyledCategories>
    )
}