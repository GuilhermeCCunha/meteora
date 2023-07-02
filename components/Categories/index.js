import Image from "next/image"
import { CategoriesDiv, StyledCategories, Title, Subtitles, Item } from "./styles"

export default function Categories() {

    return (
        <StyledCategories>
            <Title>Busque por categoria:</Title>
            <CategoriesDiv>

                <Item href="#">
                    <Image
                        src="/images/Desktop/Categorias/Categoria camiseta.png"
                        alt="Categoria camisetas"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Camisetas</Subtitles>
                </Item>

                <Item href="#">
                    <Image
                        src="/images/Desktop/Categorias/Categoria Bolsa.png"
                        alt="Categoria bolsas"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Bolsas</Subtitles>
                </Item>

                <Item href="#">
                    <Image
                        src="/images/Desktop/Categorias/Categoria Calçados.png"
                        alt="Categoria calçados"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Calçados</Subtitles>
                </Item>

                <Item href="#">
                    <Image
                        src="/images/Desktop/Categorias/Categoria calça.png"
                        alt="Categoria calças"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Calças</Subtitles>
                </Item>

                <Item href="#">
                    <Image
                        src="/images/Desktop/Categorias/Categoria casacos.png"
                        alt="Categoria casacos"
                        width={160}
                        height={157}
                    />
                    <Subtitles>Casacos</Subtitles>
                </Item>

                <Item href="#">
                    <Image
                        src="/images/Desktop/Categorias/Categoria óculos.png"
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