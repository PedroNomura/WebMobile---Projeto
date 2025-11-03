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