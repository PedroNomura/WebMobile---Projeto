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
