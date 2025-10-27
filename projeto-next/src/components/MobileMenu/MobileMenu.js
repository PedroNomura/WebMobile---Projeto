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
