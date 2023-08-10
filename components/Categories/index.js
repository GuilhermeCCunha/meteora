import Image from "next/image"
import { CategoriesDiv, StyledCategories, Title, Subtitles, Item } from "./styles"
import { CATEGORIES } from './categoriesList';

export default function Categories({ category, setCategory }) {

    return (
        <StyledCategories>
            <Title>Busque por categoria:</Title>
            <CategoriesDiv>
                {CATEGORIES.map(CATEGORY =>
                    <Item key={CATEGORY.id} onClick={() => category === CATEGORY.name ? setCategory("") : setCategory(CATEGORY.name)}>
                        <Image
                            src={CATEGORY.iconUrl}
                            alt={CATEGORY.description}
                            width={160}
                            height={157}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
                            gAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/Z/pPwAHdgLdvIWTjAAAAABJRU5ErkJggg=="
                        />
                        <Subtitles>{CATEGORY.name}</Subtitles>
                    </Item>
                )}

            </CategoriesDiv>
        </StyledCategories>
    )
}