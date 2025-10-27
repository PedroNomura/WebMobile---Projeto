"use client";

import { useAppContext } from "@/context/AppContext";
import styles from './Header.module.css'; // Importa o módulo CSS

export default function Header() {
    const { toggleMenu, toggleCart } = useAppContext();
    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <section className={styles.logotipo}>
                    <h1>123 Realiza</h1>
                </section>
                <section className={styles.containerBusca}>
                    <input type="text" placeholder="Buscar produtos..." name="campo-busca" className={styles.campoBusca} />
                    <button type="button" className={styles.botaoBusca}>Buscar</button>
                </section>
                <ul className={styles.menuNavegacao}>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#categorias">Categorias</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#" className={styles.iconeCarrinho} onClick={(e) => { e.preventDefault(); toggleCart(); }}>🛒</a></li>
                    <li><a href="#conta" className={styles.iconeConta}>👤</a></li>
                </ul>
                <section className={styles.botaoMenuMobile} onClick={toggleMenu}>
                    ☰
                </section>
            </nav>
        </header>
    );
}
