"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MainImage.module.css'; // Importa o módulo

const imagens = [
    "/img/lenovo.png",
    "/img/samsung galaxy.png",
    "/img/polo.png",
    "/img/kit.png",
    "/img/nike.png",
    "/img/maquiagem.png"
];

export default function Hero() {
    const [indice, setIndice] = useState(0); 
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); 

            setTimeout(() => {
                setIndice((prevIndice) => (prevIndice + 1) % imagens.length);
                setIsFading(false); 
            }, 1000); 

        }, 5000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <section 
            id="inicio" 
            // 'destinos-nav' (global) é mantido, 'secaoPrincipal' (módulo) é adicionado
            className={`${styles.secaoPrincipal} destinos-nav`}
        >
            <section className={styles.conteudoPrincipal}>
                <h2>Bem-vindo à 123 Realiza</h2>
                <p>Sua loja online com os melhores produtos</p>
            </section>
            <figure className={styles.imagemPrincipal}>
                <Image
                    src={imagens[indice]}
                    alt="Produtos em destaque"
                    width={500}
                    height={300}
                    style={{ objectFit: 'scale-down', width: '100%', height: '300px' }}
                    // Classe do módulo para o fade-out
                    className={`${styles.imagemHero} ${isFading ? styles.fadeOut : ''}`}
                    priority
                />
            </figure>
        </section>
    );
}
