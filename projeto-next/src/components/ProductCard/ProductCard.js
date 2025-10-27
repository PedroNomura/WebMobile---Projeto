"use client";

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import styles from './ProductCard.module.css'; // Importa o módulo

export default function ProductCard({ produto, descricao, precoAntigo, etiqueta }) {
    const { addToCart } = useAppContext();

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    return (
        <article className={styles.cartaoProduto}>
            <figure className={styles.imagemProduto}>
                <Image src={produto.imagem} alt={produto.nome} width={300} height={200} style={{ objectFit: 'scale-down', width: '100%', height: '200px' }} />
                {etiqueta && (
                    <figcaption className={styles.etiquetaProduto}>{etiqueta}</figcaption>
                )}
            </figure>
            <section className={styles.infoProduto}>
                <h3>{produto.nome}</h3>
                <p className={styles.descricaoProduto}>{descricao}</p>
                <section className={styles.precoProduto}>
                    {precoAntigo && (
                        <span className={styles.precoAntigo}>{precoAntigo}</span>
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
