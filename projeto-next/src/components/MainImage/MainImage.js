"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MainImage.module.css';


export default function Hero({ images }) {
    const [indice, setIndice] = useState(0); 
    const [isFading, setIsFading] = useState(false)
    const imageList = images && images.length > 0 ? images : ["/img/lenovo.png"];
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true); 

            setTimeout(() => {
                setIndice((prevIndice) => (prevIndice + 1) % imageList.length);
                setIsFading(false); 
            }, 1000); 

        }, 5000); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <section 
            id="inicio" 
            className={`${styles.secaoPrincipal} destinos-nav`}
        >
            <section className={styles.conteudoPrincipal}>
                <h2>Bem-vindo à 123 Realiza</h2>
                <p>Sua loja online com os melhores produtos</p>
            </section>
            <figure className={styles.imagemPrincipal}>
                <Image
                    src={imageList[indice]}
                    alt="Produtos em destaque"
                    width={500}
                    height={300}
                    style={{ objectFit: 'scale-down', width: '100%', height: '300px' }}
                    className={`${styles.imagemHero} ${isFading ? styles.fadeOut : ''}`}
                    priority
                />
            </figure>
        </section>
    );
}
