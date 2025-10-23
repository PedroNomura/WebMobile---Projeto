"use client";

import { useAppContext } from "@/context/AppContext";
import Image from "next/image"; // Use o componente Image do Next.js para otimização

export default function Cart() {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, cartTotal } = useAppContext();

    // Formata o preço para R$ 0,00
    const formatPrice = (price) => {
        return price.toFixed(2).replace('.', ',');
    };

    return (
        // A classe 'aberto' é controlada pelo estado
        <section id="carrinho" className={`lateral-carrinho ${isCartOpen ? 'aberto' : ''}`}>
            <section className="cabecalho-carrinho">
                <h2>Carrinho de Compras</h2>
                <button className="fechar-carrinho" onClick={toggleCart}>✕</button>
            </section>
            
            <section className="itens-carrinho">
                {cartItems.length === 0 ? (
                    <p className="carrinho-vazio">Seu carrinho está vazio</p>
                ) : (
                    // Mapeia os itens do carrinho para renderizar
                    cartItems.map(item => (
                        <article key={item.id} className="item-carrinho-bloco">
                            <figure className="imagem-item-carrinho">
                                {/* Caminho da imagem vem de /public */}
                                <Image src={item.imagem} alt={item.nome} width={80} height={80} />
                            </figure>
                            <section className="detalhes-item-carrinho">
                                <p className="nome-item-carrinho">{item.nome}</p>
                                <p className="preco-item-carrinho">Preço: R$ {formatPrice(item.preco)}</p>
                                <p className="quantidade-item-carrinho">Quantidade: {item.quantidade}</p>
                            </section>
                            {/* Botão de remover agora usa a função do context */}
                            <button 
                                className="botao-remover-item" 
                                data-id={item.id}
                                onClick={() => removeFromCart(item.id)}
                            >
                                X
                            </button>
                        </article>
                    ))
                )}
            </section>
            
            <section className="rodape-carrinho">
                <section className="total-carrinho">
                    {/* Total é calculado dinamicamente */}
                    <span>Total: R$ {formatPrice(cartTotal)}</span>
                </section>
                <button className="botao-finalizar">Finalizar Compra</button>
            </section>
        </section>
    );
}