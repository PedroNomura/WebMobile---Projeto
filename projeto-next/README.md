# 123 Realiza

## Integrantes

<table style="width: 100%; display:flex; border-collapse: collapse; text-align: center; align-items: center;">
  <thead>
    <tr>
      <th style="padding: 10px; text-align: center;"><a href="https://github.com/ManoTilts" target="_blank">Felipe Mazzeo Barboza</th>
      <th style="padding: 10px; text-align: center;"><a href="https://github.com/KonradoRibeiro" target="_blank">Konrado Ribeiro Filho</th>
      <th style="padding: 10px; text-align: center;"><a href="https://github.com/PedroNomura" target="_blank">Pedro Nomura Picchioni</th>
      <th style="padding: 10px; text-align: center;"><a href="https://github.com/Victor-Vaglieri" target="_blank">Victor Vaglieri de Oliveira </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px; text-align: center; vertical-align: middle;">
        <a href="https://github.com/ManoTilts" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/99353851?v=4" style="width: 150px; height: 150px; display: block; margin: 0 auto; border-radius: 50%;" />
        </a>
      </td>
      <td style="padding: 10px; text-align: center; vertical-align: middle;">
        <a href="https://github.com/KonradoRibeiro" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/182453931?v=4" style="width: 150px; height: 150px; display: block; margin: 0 auto; border-radius: 50%;" />
        </a>
      </td>
      <td style="padding: 10px; text-align: center; vertical-align: middle;">
        <a href="https://github.com/PedroNomura" target="_blank">
          <img alt="image" src="https://github.com/user-attachments/assets/7fc79409-a4ae-481e-b24e-6916fcf71f0e"src="" style="width: 150px; height: 150px; display: block; margin: 0 auto; border-radius: 50%;" />
        </a>
      </td>
      <td style="padding: 10px; text-align: center; vertical-align: middle;">
        <a href="https://github.com/Victor-Vaglieri" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/127432508?v=4" style="width: 150px; height: 150px; display: block; margin: 0 auto; border-radius: 50%;" />
        </a>
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th style="padding: 10px; text-align: center;">10402808</th>
      <th style="padding: 10px; text-align: center;">10435499</th>
      <th style="padding: 10px; text-align: center;">10401616</th>
      <th style="padding: 10px; text-align: center;">10400787</th>
    </tr>
  </tfoot>
</table>


<!--
+ [Felipe Mazzeo Barboza](https://github.com/ManoTilts/ManoTilts) - 10402808
+ [Konrado Ribeiro Filho]() - 10435499
+ [Pedro Nomura Picchioni](https://github.com/PedroNomura) - 10401616
+ [Victor Vaglieri de Oliveira](https://github.com/Victor-Vaglieri) - 10400787
-->
---
## Ideação do Projeto

A ideação teve como ponto de partida a identificação de uma necessidade observada em um pequeno comércio pertencente a um familiar de um dos integrantes da equipe. Nesse primeiro momento, observou-se a dificuldade que o comerciante enfrentava para se ajustar às novas exigências do mercado online. Com base nessa observação, decidiu-se que a proposta seria a criação de uma solução digital que viabilizasse a criação de um ambiente online para a exposição dos produtos e realização de vendas. O objetivo principal é montar um sistema que ajude a modernizar suas atividades comerciais e ampliar sua presença no ambiente digital.


---
## Protótipo

### Desktop

<img width="80%" height="80%" alt="image" src="https://github.com/user-attachments/assets/873eeca1-716f-4fcb-9a2f-601a1962b1cd" />

### Mobile

<img width="40%" height="40%" alt="image" src="https://github.com/user-attachments/assets/16625574-be35-490b-8b3e-ae1ef7cf8c7e" />

<!-- <img width="3812" height="2450" alt="image" src="https://github.com/user-attachments/assets/27dcebe8-2896-4c10-bb0e-d42deef97580" /> -->

<!-- caso tenha varias imagens seria bom colocar o que cada uma delas representas, o que o usuario esta fazendo e etc...-->
<!-- do David https://github.com/david-pessoa/web-mobile/blob/main/README.md--> 
---
## Caráter Extensionista

O caráter extensionista do projeto está na busca por resolver um problema identificado em um comércio. A solução tecnológica proposta possui potencial de replicação em outros contextos semelhantes, funcionando como um modelo acessível para pequenos empreendedores que enfrentam dificuldades de inserção no ambiente digital. Dessa forma, a iniciativa demonstra como ferramentas tecnológicas simples e funcionais podem ser aplicadas em comércios locais, contribuindo para o fortalecimento desses negócios e gerando impacto positivo ao responder, de maneira prática, às exigências do mercado atual.

---

## Vantagem da Migração para Componentes ReactJS

+ A migração para componentes ReactJS traz mais organização, desempenho e facilidade de manutenção ao projeto.
+ Com a interface dividida em componentes reutilizáveis, o código fica mais limpo e rápido de atualizar.
+ O uso do Virtual DOM torna as atualizações de tela mais eficientes, melhorando a experiência do usuário.
+ Além disso, o React facilita a escala e evolução do sistema, permitindo adicionar novas funções sem comprometer o restante da aplicação.

---
## Tutorial
### Como Rodar o Projeto

1.  **Clone o repositório**
    Abra seu terminal e use o seguinte comando para baixar o projeto:
    ```bash
    git clone https://github.com/PedroNomura/WebMobile---Projeto.git
    ```

2.  **Acesse o diretório do projeto**
    Navegue para a pasta que acabou de ser criada:
    ```bash
    cd WebMobile---Projeto
    ```

3.  **Instale as dependências**
    Execute o npm (ou seu gerenciador de pacotes preferido) para instalar todos os pacotes necessários:
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento**
    Com tudo instalado, inicie o projeto:
    ```bash
    npm run dev
    ```

5.  ** o resultado**
    Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação rodando.

---

### Estrutura de Pastas

```
src/
├── app/
│   ├── produtos/[id]/
│   │   └── page.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Cart.js
│   ├── Categories.js
│   ├── Footer.js
│   ├── Header.js
│   ├── MainImage.js
│   ├── MobileMenu.js
│   ├── Newsletter.js
│   ├── ProductCard.js
│   ├── ProductList.js
│   └── about/
│       └── About.js
├── lib/
│   └── data.js
└── context/
    └── AppContext.js
```


### Arquitetura e Componentes Principais

### `app/layout.js`

```javascript
import { Inter } from "next/font/google";
import "./globals.css"; 
import { AppProvider } from "@/context/AppContext"; 

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cart from "@/components/Cart/Cart";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "123 Realiza - Sua Loja Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <main>{children}</main>         
          <Footer />
          <Cart />
          <MobileMenu />
        </AppProvider>
      </body>
    </html>
  );
}
```

Este é o **Layout Raiz** (Root Layout) da aplicação. Ele define a estrutura HTML base (`<html>` e `<body>`) que será compartilhada por *todas* as páginas.

* **Propósito**: Configurar o template global do site.
* **Contexto**: Ele envolve toda a aplicação (representada por `children`) com o `AppProvider`. Isso disponibiliza um contexto global (provavelmente para gerenciar o estado do carrinho ou menu) para todos os componentes filhos.
* **Componentes Globais**: Ele renderiza componentes que devem aparecer em todas as páginas, como o `Header` (cabeçalho), `Footer` (rodapé), `Cart` (carrinho) e `MobileMenu`.

### `app/page.js`

```javascript
import MainImage from "@/components/MainImage/MainImage";
import Categories from "@/components/Categories/Categories";
import ProductList from "@/components/ProductList/ProductList";
import Newsletter from "@/components/Newsletter/Newsletter";
import About from "@/components/about/About";
import { getAllProducts } from "@/lib/data";

export default async function Home() {
  const produtos = await getAllProducts();
  const mainImages = produtos.map(produto => produto.imagem);
  return (
    <>
      <MainImage images={mainImages}/>
      <Categories />
      <ProductList produtos={produtos} />
      <Newsletter />
      <About />
    </>
  );
}
```

Este arquivo representa a **página inicial** (homepage) do site, acessível pela rota `/`.

* **Propósito**: Servir como a "vitrine" principal da loja.
* **Estrutura**: O componente Home foi transformado em uma função assíncrona (um React Server Component) para executar a busca de dados no lado do servidor:
  * Ele chama await getAllProducts() para buscar a lista completa de produtos.
  * Ele extrai as URLs das imagens (mainImages) a partir dos produtos.
  * Ele renderiza os componentes da página, passando os dados necessários via props:
    * MainImage: Recebe a lista de imagens (images={mainImages}).
    * Categories: Renderizado de forma estática.
    * ProductList: Recebe a lista completa de produtos (produtos={produtos}).
    * Newsletter: Renderizado de forma estática.
    * About: Renderizado de forma estática.

### `components/Header.js`

```javascript
"use client";

import { useAppContext } from "@/context/AppContext";
import styles from './Header.module.css'; // Importa o módulo CSS

export default function Header() {
    const { toggleMenu, toggleCart } = useAppContext();
    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <section className={styles.logotipo}>
                    <h1>123 Realiza</h1>
                </section>
                <section className={styles.containerBusca}>
                    <input type="text" placeholder="Buscar produtos..." name="campo-busca" className={styles.campoBusca} />
                    <button type="button" className={styles.botaoBusca}>Buscar</button>
                </section>
                <ul className={styles.menuNavegacao}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#categorias">Categorias</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#" className={styles.iconeCarrinho} onClick={(e) => { e.preventDefault(); toggleCart(); }}>🛒</a></li>
                    <li><a href="#conta" className={styles.iconeConta}>👤</a></li>
                </ul>
                <section className={styles.botaoMenuMobile} onClick={toggleMenu}>
                    ☰
                </section>
            </nav>
        </header>
    );
}

```

Um **Componente de Cliente** (`"use client"`) que renderiza o cabeçalho principal do site.

* **Propósito**: Fornecer a navegação principal, a barra de busca e os ícones de conta/carrinho.
* **Funcionalidade**:
    * Utiliza `useAppContext` para acessar as funções `toggleMenu` e `toggleCart` do contexto global.
    * O ícone do carrinho (`🛒`) chama `toggleCart` ao ser clicado para abrir a barra lateral do carrinho.
    * O ícone do menu "hambúrguer" (`☰`) chama `toggleMenu` para exibir o menu de navegação móvel.

### `components/Footer.js`

```javascript
import styles from './Footer.module.css'; // Importa o módulo

export default function Footer() {
    return (
        <footer 
            id="contato" 
            className={`${styles.footer} destinos-nav`}
        >
            <section className={styles.conteudoRodape}>
                <section className={styles.secaoRodape}>
                    <h3>123 Realiza</h3>
                    <p>Sua loja online de confiança</p>
                    <section className={styles.linksSociais}>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </section>
                </section>
                
                <section className={styles.secaoRodape}>
                    <h3>Atendimento</h3>
                    <ul>
                        <li>Telefone: (11) 99999-9999</li>
                        <li>E-mail: contato@123realiza.com.br</li>
                        <li>WhatsApp: (11) 99999-9999</li>
                    </ul>
                </section>
                
                <section className={styles.secaoRodape}>
                    <h3>Formas de Pagamento</h3>
                    <section className={styles.metodosPagamento}>
                        <span>Cartão de Crédito</span>
                        <span>PIX</span>
                        <span>Boleto</span>
                    </section>
                </section>
            </section>
            
            <section className={styles.baseRodape}>
                <p>&copy; 2024 123 Realiza. Todos os direitos reservados.</p>
            </section>
        </footer>
    );
}
```

Um **Componente de Servidor** (padrão) que renderiza o rodapé do site.

* **Propósito**: Exibir informações de contato, links sociais, métodos de pagamento e o aviso de copyright.
* **Funcionalidade**:
    * É um componente estático, sem lógica interativa.
    * Possui o `id="contato"` para que os links de navegação "Contato" rolem para esta seção.

### `components/MainImage.js`

```javascript
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MainImage.module.css'; // Importa o módulo

const imagens = [
    "/img/lenovo.png",
    "/img/samsung galaxy.png",
    "/img/polo.png",
    "/img/kit.png",
    "/img/nike.png",
    "/img/maquiagem.png"
];

export default function Hero() {
    const [indice, setIndice] = useState(0); 
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); 

            setTimeout(() => {
                setIndice((prevIndice) => (prevIndice + 1) % imagens.length);
                setIsFading(false); 
            }, 1000); 

        }, 5000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <section 
            id="inicio" 
            // 'destinos-nav' (global) é mantido, 'secaoPrincipal' (módulo) é adicionado
            className={`${styles.secaoPrincipal} destinos-nav`}
        >
            <section className={styles.conteudoPrincipal}>
                <h2>Bem-vindo à 123 Realiza</h2>
                <p>Sua loja online com os melhores produtos</p>
            </section>
            <figure className={styles.imagemPrincipal}>
                <Image
                    src={imagens[indice]}
                    alt="Produtos em destaque"
                    width={500}
                    height={300}
                    style={{ objectFit: 'scale-down', width: '100%', height: '300px' }}
                    // Classe do módulo para o fade-out
                    className={`${styles.imagemHero} ${isFading ? styles.fadeOut : ''}`}
                    priority
                />
            </figure>
        </section>
    );
}

```

Um **Componente de Cliente** (`"use client"`) que funciona como o banner principal (seção "Hero") da página inicial.

* **Propósito**: Exibir um carrossel de imagens de produtos em destaque.
* **Funcionalidade**:
  * Recebe uma lista de URLs de imagens através da prop images.
  * Possui uma imagem de fallback (reserva) caso a prop images não seja fornecida ou esteja vazia.
  * Usa useState para controlar o indice da imagem atual e o estado de transição (isFading).
  * Usa useEffect para criar um setInterval que troca a imagem a cada 5 segundos, aplicando um efeito de fade-out (.fadeOut) durante a transição.
  * Utiliza o componente next/image para otimização das imagens, com a primeira imagem marcada como priority.

### `components/Categories.js`

```javascript
import Image from "next/image";
import styles from './Categories.module.css'; // Importa o módulo

export default function Categories() {
    return (
        <section 
            id="categorias" 
            // 'destinos-nav' (global) é mantido, 'secaoCategorias' (módulo) é adicionado
            className={`${styles.secaoCategorias} destinos-nav`}
        >
            <h2>Categorias</h2>
            <section className={styles.gradeCategorias}>
                <article className={styles.itemCategoria}>
                    <Image src="/img/computer.png" alt="Eletrônicos" width={50} height={50} />
                    <h3>Eletrônicos</h3>
                </article>
                <article className={styles.itemCategoria}>

                    <Image src="/img/t-shirt.png" alt="Roupas" width={50} height={50} />
                    <h3>Roupas</h3>
                </article>
                <article className={styles.itemCategoria}>
                    <Image src="/img/house.png" alt="Casa & Jardim" width={50} height={50} />
                    <h3>Casa & Jardim</h3>
                </article>
                <article className={styles.itemCategoria}>
                    <Image src="/img/running.png" alt="Esportes" width={50} height={50} />
                    <h3>Esportes</h3>
                </article>
                <article className={styles.itemCategoria}>
                    <Image src="/img/open-book.png" alt="Livros" width={50} height={50} />
                    <h3>Livros</h3>
                </article>
                <article className={styles.itemCategoria}>
                    <Image src="/img/make-up.png" alt="Beleza" width={50} height={50} />
                    <h3>Beleza</h3>
                </article>
            </section>
        </section>
    );
}

```

Um **Componente de Servidor** (padrão) que renderiza a seção de categorias de produtos.

* **Propósito**: Mostrar os principais departamentos da loja de forma visual.
* **Funcionalidade**:
    * Exibe uma grade estática (`grade-categorias`) com ícones (usando `next/image`) e títulos para cada categoria (Eletrônicos, Roupas, etc.).
    * Possui o `id="categorias"` para a navegação interna.

### `components/ProductList.js`

```javascript
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css"

export default function ProductList({ produtos }) {
    return (
        <section id="produtos" className={`${styles.secaoProdutos} destinos-nav`}>
            <h2>Produtos em Destaque</h2>
            <section className={styles.gradeProdutos}>
                {produtos.map(produto => (
                    <ProductCard
                        key={produto.id}
                        produto={produto} 
                    />
                ))}
            </section>
        </section>
    );
}
```

Um **Componente de Servidor** (padrão) que renderiza a listagem dos produtos em destaque na loja.

* **Propósito**: Exibir dinamicamente os produtos disponíveis em destaque na página inicial.
* **Funcionalidade**:
  * Utiliza o componente filho ProductCard para renderizar cada produto individualmente.
  * Recebe a lista de produtos como uma prop (passada por um componente pai, como app/page.js) e faz o mapeamento para gerar a grade.
  * A estrutura visual é organizada por meio das classes definidas em ProductList.module.css.
  * Inclui o identificador id="produtos" para permitir navegação interna (âncora).
  * O layout interno (gradeProdutos) apresenta os cards de produtos em uma grade responsiva.

### `components/ProductCard.js`

```javascript

"use client"; 

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link"; 

import styles from './ProductCard.module.css';

export default function ProductCard({ produto }) { 
    const { addToCart } = useAppContext();

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    return (
        <article className={styles.cartaoProduto}>
            <figure className={styles.imagemProdutoContainer}>
                <Link href={`/produtos/${produto.id}`}>
                    <Image 
                        src={produto.imagem} 
                        alt={produto.nome} 
                        width={300} 
                        height={200} 
                        className={styles.imagemTag} 
                    />
                </Link>
                {produto.etiqueta && (
                    <figcaption className={styles.etiquetaProduto}>{produto.etiqueta}</figcaption>
                )}
            </figure>
            
            <section className={styles.infoProduto}>
                <h3>
                    <Link href={`/produtos/${produto.id}`} className={styles.produtoTitulo}>
                        {produto.nome}
                    </Link>
                </h3>
                <p className={styles.descricaoProduto}>{produto.descricao}</p>
                
                <section className={styles.precoProduto}>
                    {produto.precoAntigo && (
                        <span className={styles.precoAntigo}>{produto.precoAntigo}</span>
                    )}
                    <span className={styles.precoAtual}>R$ {formatPrice(produto.preco)}</span>
                </section>
                
                <button className={styles.botaoAdicionar} onClick={() => addToCart(produto)}>
                    Adicionar ao Carrinho
                </button>
            </section>
        </article>
    );
}
```
Um **Componente de Cliente** que renderiza o cartão individual de cada produto na loja.

* **Propósito**: Exibir informações detalhadas de um produto e permitir sua adição ao carrinho.
* **Funcionalidade**:

  * Importa e utiliza o contexto global da aplicação (`useAppContext`) para acessar a função `addToCart`.
  * Renderiza imagem, nome, descrição, preço e, se houver, etiqueta promocional do produto.
  * Usa o componente `next/link` para criar links dinâmicos para a página de detalhes de cada produto.
  * O preço é formatado por meio da função `formatPrice`, que converte o valor numérico para o formato brasileiro (duas casas decimais e vírgula).
  * O layout e o estilo visual são definidos em `ProductCard.module.css`, garantindo consistência e responsividade.
  * O botão “Adicionar ao Carrinho” chama `addToCart(produto)` ao ser clicado, permitindo interação direta com o sistema de compras.

### `components/Newsletter.js`

```javascript
"use client";

import { useState } from 'react';
import styles from './Newsletter.module.css'; // Importa o módulo

export default function Newsletter() {
    const [email, setEmail] = useState('');
    // Estado para a mensagem de feedback (substituindo o alert)
    const [message, setMessage] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (email) {
            // Define a mensagem de sucesso
            setMessage(`Obrigado por se inscrever! E-mail cadastrado.`);
            setEmail(''); // Limpa o input
            
            // Limpa a mensagem após 3 segundos
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    };

    return (
        <section className={styles.secaoNewsletter}>
            <section className={styles.conteudoNewsletter}>
                <h2>Fique por Dentro das Novidades</h2>
                <p>Receba ofertas especiais e lançamentos direto no seu e-mail</p>
                <form className={styles.formularioNewsletter} onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Inscrever-se</button>
                </form>
                {/* Renderiza a mensagem de feedback aqui */}
                {message && <p className={styles.mensagemSucesso}>{message}</p>}
            </section>
        </section>
    );
}
```

Um **Componente de Cliente** (`"use client"`) que renderiza o formulário de inscrição da newsletter.

* **Propósito**: Capturar o e-mail do usuário para marketing.
* **Funcionalidade**:
    * Usa `useState` para controlar o valor do campo de e-mail (Componente Controlado).
    * Possui uma função `handleSubmit` que é chamada no `onSubmit` do formulário.
    * `handleSubmit` previne o recarregamento da página (`event.preventDefault()`), exibe um `alert` de sucesso e limpa o campo de e-mail.

### `components/Cart.js`

```javascript
"use client";

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import styles from './Cart.module.css'; // Importa o módulo CSS

export default function Cart() {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, cartTotal } = useAppContext();

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    return (
        <section 
            id="carrinho" 
            className={`${styles.lateralCarrinho} ${isCartOpen ? styles.aberto : ''}`}
        >
            <section className={styles.cabecalhoCarrinho}>
                <h2>Carrinho de Compras</h2>
                <button className={styles.fecharCarrinho} onClick={toggleCart}>✕</button>
            </section>
            
            <section className={styles.itensCarrinho}>
                {cartItems.length === 0 ? (
                    <p className={styles.carrinhoVazio}>Seu carrinho está vazio</p>
                ) : (
                    cartItems.map(item => (
                        <article key={item.id} className={styles.itemCarrinhoBloco}>
                            <figure className={styles.imagemItemCarrinho}>
                                <Image src={item.imagem} alt={item.nome} width={80} height={80} />
                            </figure>
                            <section className={styles.detalhesItemCarrinho}>
                                <p className={styles.nomeItemCarrinho}>{item.nome}</p>
                                <p className={styles.precoItemCarrinho}>Preço: R$ {formatPrice(item.preco)}</p>
                                <p className={styles.quantidadeItemCarrinho}>Quantidade: {item.quantidade}</p>
                            </section>
                            <button 
                                className={styles.botaoRemoverItem} 
                                data-id={item.id}
                                onClick={() => removeFromCart(item.id)}
                            >
                                X
                            </button>
                        </article>
                    ))
                )}
            </section>
            
            <section className={styles.rodapeCarrinho}>
                <section className={styles.totalCarrinho}>
                    <span>Total: R$ {formatPrice(cartTotal)}</span>
                </section>
                <button className={styles.botaoFinalizar}>Finalizar Compra</button>
Também corrigi a lógica da classe `aberto` para funcionar corretamente com o módulo.
            </section>
        </section>
    );
}
```

Um **Componente de Cliente** (`"use client"`) que renderiza a barra lateral do carrinho de compras.

* **Propósito**: Mostrar os itens no carrinho, o total, e permitir a remoção de itens.
* **Funcionalidade**:
    * Controlado pelo `AppContext`. Utiliza `useAppContext` para obter `isCartOpen`, `toggleCart`, `cartItems`, `removeFromCart` e `cartTotal`.
    * A visibilidade é controlada pela classe `.aberto`, que é aplicada se `isCartOpen` for `true`.
    * Mapeia os `cartItems` para exibir cada item. Se o carrinho estiver vazio, exibe uma mensagem.
    * O botão "X" em cada item chama `removeFromCart(item.id)`.
    * O total é exibido dinamicamente a partir de `cartTotal`.
    * O botão "✕" no cabeçalho chama `toggleCart` para fechar a barra lateral.

### `components/MobileMenu.js`

```javascript
"use client";

import { useAppContext } from "@/context/AppContext";
import styles from './MobileMenu.module.css'; // Importa o módulo

export default function MobileMenu() {
    const { isMenuOpen, toggleMenu, toggleCart } = useAppContext();

    const handleCartClick = (e) => {
        e.preventDefault();
        toggleMenu();
        toggleCart(); 
    };
    
    return (
        // Aplica as classes do módulo dinamicamente
        <nav 
            className={`${styles.overlayMenuMobile} ${isMenuOpen ? styles.ativo : ''}`} 
            id="menu-mobile"
        >
            <section className={styles.conteudoMenuMobile}>
                <button 
                    className={styles.fecharMenuMobile} 
                    id="fechar-menu" 
                    onClick={toggleMenu}
                >
                    ✕
                </button>
                <ul className={styles.listaMenuMobile}>
                    <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
                    <li><a href="#produtos" onClick={toggleMenu}>Produtos</a></li>
                    <li><a href="#categorias" onClick={toggleMenu}>Categorias</a></li>
                    <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
                    <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
                    <li><a href="#carrinho" className={styles.iconeCarrinho} onClick={handleCartClick}>🛒 Carrinho</a></li>
                    <li><a href="#conta" onClick={toggleMenu}>👤 Conta</a></li>
                </ul>
            </section>
        </nav>
    );
}

```

Um **Componente de Cliente** (`"use client"`) que renderiza o menu de navegação em tela cheia (overlay) para dispositivos móveis.

* **Propósito**: Fornecer a navegação principal em telas menores.
* **Funcionalidade**:
    * Controlado pelo `AppContext`. Utiliza `useAppContext` para obter `isMenuOpen`, `toggleMenu` e `toggleCart`.
    * A visibilidade é controlada pela classe `.ativo`, que é aplicada se `isMenuOpen` for `true`.
    * O botão "✕" chama `toggleMenu` para fechar o menu.
    * Clicar em qualquer link de navegação (como "Início", "Produtos") também chama `toggleMenu` para fechar o menu após a navegação.
    * O link "Carrinho" é especial: ele chama `handleCartClick`, que fecha o menu (`toggleMenu`) e abre o carrinho (`toggleCart`).

### `context/AppContext.js`

```javascript
"use client"; // Context precisa ser um Client Component

import { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemExistente = prevItems.find(item => item.id === product.id);
            if (itemExistente) {
                // Se existe, aumenta a quantidade
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantidade: item.quantidade + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantidade: 1 }];
        });
        if (!isCartOpen) {
            setIsCartOpen(true);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const cartTotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
    }, [cartItems]);


    const value = {
        isMenuOpen,
        toggleMenu,
        isCartOpen,
        toggleCart,
        cartItems,
        addToCart,
        removeFromCart,
        cartTotal
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}
```

Este é um **Componente de Cliente** (`"use client"`) que define o [Contexto React](https://react.dev/learn/passing-data-deeply-with-context) global da aplicação. Ele é responsável por gerenciar e compartilhar estados entre componentes que não são pais/filhos diretos (como o `Header` e o `Cart`).

* **Propósito**: Centralizar o estado da interface (menus, carrinho) e a lógica de negócios do carrinho de compras.

#### `AppProvider`

O componente "provedor" que envolve a aplicação (visto no `app/layout.js`). Ele é quem de fato "guarda" os estados e as funções.

#### `useAppContext`

Um *hook* customizado que os componentes "consumidores" (como `Header.js`, `Cart.js`, `ProductCard.js`, etc.) usam para acessar os valores e funções do contexto.

#### Valores Fornecidos pelo Contexto:

* **Estados (State):**
    * `isMenuOpen`: (Boolean) Controla se o menu mobile está aberto ou fechado.
    * `isCartOpen`: (Boolean) Controla se a barra lateral do carrinho está aberta ou fechada.
    * `cartItems`: (Array) Lista de objetos que representam os produtos no carrinho.

* **Funções (Functions):**
    * `toggleMenu()`: Inverte o valor de `isMenuOpen`.
    * `toggleCart()`: Inverte o valor de `isCartOpen`.
    * `addToCart(product)`: Recebe um objeto de `produto`. Se o produto já estiver no carrinho, incrementa sua `quantidade`. Se for um novo produto, o adiciona ao array com `quantidade: 1`. Também força o carrinho a abrir (`setIsCartOpen(true)`) ao adicionar um item.
    * `removeFromCart(productId)`: Remove um item do array `cartItems` com base no `productId` fornecido.

* **Valores Memoizados (Memo):**
    * `cartTotal`: Um valor calculado usando `useMemo`. Ele "escuta" por mudanças no array `cartItems` e recalcula automaticamente o preço total ( `preço * quantidade` de todos os itens). Isso evita recálculos desnecessários a cada renderização.
 
### `lib/data.js`

```javascript
// lib/data.js


const staticProducts = [
    { 
        id: "samsung_galaxy", 
        nome: "Smartphone Samsung Galaxy", 
        preco: 999.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/samsung_galaxy_d9pmpr.png",
        descricao: "Smartphone com tela de 6.1 polegadas e câmera tripla",
        precoAntigo: "R$ 1.299,99",
        etiqueta: "Oferta"
    },
    { 
        id: "camiseta_polo", 
        nome: "Camiseta Polo Masculina", 
        preco: 89.99,
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/polo_fecfhr.png",
        descricao: "Camiseta polo de algodão 100% em diversas cores",
        precoAntigo: null, 
        etiqueta: null
    },
    { 
        id: "notebook_lenovo", 
        nome: "Notebook Lenovo IdeaPad", 
        preco: 2299.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/lenovo_lrxmde.png",
        descricao: "Notebook com processador Intel Core i5 e 8GB RAM",
        precoAntigo: null,
        etiqueta: "Novo"
    },
    { 
        id: "kit_jardim", 
        nome: "Kit Jardim Completo", 
        preco: 79.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/kit_cyxwle.png",
        descricao: "Kit com ferramentas básicas para jardinagem",
        precoAntigo: null,
        etiqueta: null
    },
    { 
        id: "tenis_nike", 
        nome: "Tênis Esportivo Nike", 
        preco: 299.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690663/nike_fsadbp.png",
        descricao: "Tênis para corrida com tecnologia Air Max",
        precoAntigo: null,
        etiqueta: null
    },
    { 
        id: "kit_maquiagem", 
        nome: "Kit Maquiagem Completo", 
        preco: 129.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690663/maquiagem_qsrvzb.png",
        descricao: "Kit com batom, base, rímel e sombras variadas",
        precoAntigo: null,
        etiqueta: null
    },
];



export async function getAllProducts() {
    return Promise.resolve(staticProducts);
}

export async function getProductById(id) {
    const product = staticProducts.find(p => p.id === id);
    
    if (product) {
        return Promise.resolve(product);
    } else {
        return Promise.resolve(null);
    }
}
```
Um **módulo de dados** que centraliza e exporta as informações estáticas dos produtos da loja.

* **Propósito**: Fornecer uma lista base de produtos para renderização nas páginas e componentes (como `ProductList` e `ProductCard`).
* **Funcionalidade**:
  * Exporta a função async getAllProducts(), que retorna uma Promise que resolve com a lista completa de produtos.
  * Exporta a função async getProductById(id), que retorna uma Promise que resolve com um único produto (baseado no id) ou null se não for encontrado.
  * Utiliza um array interno staticProducts como fonte de dados simulada.
  * As imagens dos produtos (imagem) são URLs absolutas hospedadas em um serviço externo (Cloudinary).

### app/produtos/[id]/page.js

```javascript
"use client";

import { use } from 'react';
import { getProductById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import styles from './Produto.module.css';

const formatPrice = (price) => {
    if (typeof price !== 'number') return '0,00';
    return price.toFixed(2).replace('.', ',');
};

export default function ProdutoPage({ params }) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    const produto = getProductById(id);
    const { addToCart } = useAppContext();

    if (!produto) {
        notFound();
    }

    return (
        <section 
            className={`destinos-nav ${styles.produtoContainer}`}
        >
            <figure>
                <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    width={500}
                    height={500}
                    className={styles.produtoImagem}
                    priority
                />
            </figure>
            <section className={styles.produtoInfo}>
                <Link href="/#produtos" className={styles.linkVoltar}>
                    &larr; Voltar aos produtos
                </Link>
                
                <h1 className={styles.produtoNome}>
                    {produto.nome}
                </h1>
                
                <p className={styles.produtoDescricao}>
                    {produto.descricao}
                </p>

                <section className={`preco-produto ${styles.blocoPreco}`}>
                    {produto.precoAntigo && (
                        <span className={styles.precoAntigo}>
                            {produto.precoAntigo}
                        </span>
                    )}
                    <span className={styles.precoAtual}>
                        R$ {formatPrice(produto.preco)}
                    </span>
                </section>

                <button 
                    className={`botao-adicionar ${styles.botaoComprar}`} 
                    onClick={() => addToCart(produto)}
                >
                    Adicionar ao Carrinho
                </button>
            </section>
        </section>
    );
}
```
Um **Componente de Cliente** que representa a página individual de cada produto, renderizada dinamicamente conforme o identificador (`id`) na URL.

* **Propósito**: Exibir detalhes completos de um produto específico e permitir que o usuário o adicione ao carrinho.
* **Funcionalidade**:

  * Utiliza o hook `use()` para resolver os parâmetros dinâmicos da rota (`params`).
  * Busca os dados do produto correspondente por meio da função `getProductById(id)` importada de `@/lib/data`.
  * Caso o produto não seja encontrado, executa `notFound()` para redirecionar à página 404.
  * Usa `useAppContext()` para acessar a função `addToCart` e possibilitar a adição do produto ao carrinho.
  * Exibe imagem, nome, descrição, preço atual e antigo (se existir), e um botão de compra.
  * Inclui um link de retorno (`Voltar aos produtos`) para navegação fluida entre as páginas.
  * Os estilos são definidos em `Produto.module.css`, enquanto classes globais como `destinos-nav` são aplicadas para consistência no layout.



---


