"use client";

import { useAppContext } from "@/context/AppContext";

export default function Header() {
    // Pega as funções do nosso Context
    const { toggleMenu, toggleCart } = useAppContext();
    
    return (
        <header>
            <nav>
                <section className="logotipo">
                    <h1>123 Realiza</h1>
                </section>
                <section className="container-busca">
                    <input type="text" placeholder="Buscar produtos..." name="campo-busca" className="campo-busca" />
                    <button type="button" className="botao-busca">Buscar</button>
                </section>
                <ul className="menu-navegacao">
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#categorias">Categorias</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    {/* onClick foi substituído por toggleCart */}
                    <li><a href="#" className="icone-carrinho" onClick={(e) => { e.preventDefault(); toggleCart(); }}>🛒</a></li>
                    <li><a href="#conta" className="icone-conta">👤</a></li>
                </ul>
                {/* onClick foi substituído por toggleMenu */}
                <section className="botao-menu-mobile" onClick={toggleMenu}>
                    ☰
                </section>
            </nav>
        </header>
    );
}