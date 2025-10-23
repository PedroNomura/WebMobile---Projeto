"use client";

import { useAppContext } from "@/context/AppContext";

export default function MobileMenu() {
    const { isMenuOpen, toggleMenu, toggleCart } = useAppContext();

    // Função para fechar menu e abrir carrinho
    const handleCartClick = (e) => {
        e.preventDefault();
        toggleMenu();
        toggleCart(); 
    };
    
    return (
        <nav className={`overlay-menu-mobile ${isMenuOpen ? 'ativo' : ''}`} id="menu-mobile">
            <section className="conteudo-menu-mobile">
                <button className="fechar-menu-mobile" id="fechar-menu" onClick={toggleMenu}>✕</button>
                <ul className="lista-menu-mobile">
                    <li><a href="#inicio" onClick={toggleMenu}>Início</a></li>
                    <li><a href="#produtos" onClick={toggleMenu}>Produtos</a></li>
                    <li><a href="#categorias" onClick={toggleMenu}>Categorias</a></li>
                    <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
                    <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
                    <li><a href="#carrinho" className="icone-carrinho" onClick={handleCartClick}>🛒 Carrinho</a></li>
                    <li><a href="#conta" onClick={toggleMenu}>👤 Conta</a></li>
                </ul>
            </section>
        </nav>
    );
}