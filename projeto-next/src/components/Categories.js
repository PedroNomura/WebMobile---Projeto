import Image from "next/image";

export default function Categories() {
    return (
        <section id="categorias" className="secao-categorias destinos-nav">
            <h2>Categorias</h2>
            <section className="grade-categorias">
                <article className="item-categoria">
                    <Image src="/img/computer.png" alt="Eletrônicos" width={50} height={50} />
                    <h3>Eletrônicos</h3>
                </article>
                <article className="item-categoria">
                    <Image src="/img/t-shirt.png" alt="Roupas" width={50} height={50} />
                    <h3>Roupas</h3>
                </article>
                <article className="item-categoria">
                    <Image src="/img/house.png" alt="Casa & Jardim" width={50} height={50} />
                    <h3>Casa & Jardim</h3>
                </article>
                <article className="item-categoria">
                    <Image src="/img/running.png" alt="Esportes" width={50} height={50} />
                    <h3>Esportes</h3>
                </article>
                <article className="item-categoria">
                    <Image src="/img/open-book.png" alt="Livros" width={50} height={50} />
                    <h3>Livros</h3>
                </article>
                <article className="item-categoria">
                    <Image src="/img/make-up.png" alt="Beleza" width={50} height={50} />
                    <h3>Beleza</h3>
                </article>
            </section>
        </section>
    );
}