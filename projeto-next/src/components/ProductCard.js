"use client"; // Precisa ser client por causa do botão "Adicionar"

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

export default function ProductCard({ produto, descricao, precoAntigo, etiqueta }) {
    const { addToCart } = useAppContext();

    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    return (
        <article className="cartao-produto">
            <figure className="imagem-produto">
                <Image src={produto.imagem} alt={produto.nome} width={300} height={200} style={{ objectFit: 'scale-down', width: '100%', height: '200px' }} />
                {etiqueta && (
                    <figcaption className="etiqueta-produto">{etiqueta}</figcaption>
                )}
            </figure>
            <section className="info-produto">
                <h3>{produto.nome}</h3>
                <p className="descricao-produto">{descricao}</p>
                <section className="preco-produto">
                    {precoAntigo && (
                        <span className="preco-antigo">{precoAntigo}</span>
                    )}
                    <span className="preco-atual">R$ {formatPrice(produto.preco)}</span>
                </section>
                {/* Botão chama a função addToCart do context */}
                <button className="botao-adicionar" onClick={() => addToCart(produto)}>
                    Adicionar ao Carrinho
                </button>
            </section>
        </article>
    );
}