# Meteora - 7º Challenge Front-end Alura

Projeto criado para o [challenge front-end 7ª edição](https://www.alura.com.br/challenges/front-end-7).

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Meteora -** Challenge Front End
| :label: Tecnologias | React, JavaScript, Next.js, Styled Components, MongoDB, SwiperJS
| :rocket: URL         | https://meteora-kohl.vercel.app/
| :fire: Desafio     | [**Design no Figma**](https://www.figma.com/file/2TLgt8UjsWUViWlmpXu5Fz/Loja-Meteora?type=design&node-id=2386%3A3188&t=KAouN13HHl42mSWm-1)

![](public/images/imagem-ilustrativa-do-projeto.png#vitrinedev)

<!-- Inserir imagem com a #vitrinedev ao final do link -->

<!-- ![](https://via.placeholder.com/1200x500.png?text=imagem+lindona+do+meu+projeto#vitrinedev) -->

- A lista de produtos que é exibida no site está armazenada no MongoDB Atlas. 

## Detalhes do projeto

O objetivo do desafio é criar o front-end da loja virtual fictícia de roupas **Meteora**.

### Demonstração do filtro de categoria

<br/>

<img src="public/images/filter-by-category1.gif"/>

### Demonstração do filtro da barra de pesquisa
- filtrando por nome do produto 

<br/>

<img src="public/images/filter-by-name.gif"/>

### Demonstração do zoom no modal do produto

<br/>

<img src="public/images/image-zoom.gif"/>

- Eu usei o react-image-magnify para criar este efeito de zoom.

### Outras Páginas

#### Página Erro 404

<img src="public/images/404-page.gif"/>

#### Página Em breve

<img src="public/images/soon-page.gif"/>

- No lugar das páginas **Nossas Lojas**, **Novidades** e **Promoções**, eu redirecionei para a página **Em breve**, pois essas páginas não faziam parte do desafio, o layout base que está no Figma só possui a página Home.

- Observe que somente na página **Home** que a barra de pesquisa é renderizada. Nas páginas **Erro 404** e **Em breve**, a barra de pesquisa não é renderizada, pois não há produtos para pesquisar.