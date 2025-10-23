"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        // Lógica do carrossel
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
        <section id="inicio" className="secao-principal destinos-nav">
            <section className="conteudo-principal">
                <h2>Bem-vindo à 123 Realiza</h2>
                <p>Sua loja online com os melhores produtos</p>
            </section>
            <figure className="imagem-principal">
                <Image
                    src={imagens[indice]}
                    alt="Produtos em destaque"
                    width={500}
                    height={300}
                    style={{ objectFit: 'scale-down', width: '100%', height: '300px' }}
                    className={isFading ? 'fade-out' : ''}
                    priority
                />
            </figure>
        </section>
    );
}