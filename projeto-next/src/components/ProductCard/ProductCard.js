
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