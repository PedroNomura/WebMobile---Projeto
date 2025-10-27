"use client";

import { useState } from 'react';
import styles from './Newsletter.module.css'; // Importa o módulo

export default function Newsletter() {
    const [email, setEmail] = useState('');
    // Estado para a mensagem de feedback (substituindo o alert)
    const [message, setMessage] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (email) {
            // Define a mensagem de sucesso
            setMessage(`Obrigado por se inscrever! E-mail cadastrado.`);
            setEmail(''); // Limpa o input
            
            // Limpa a mensagem após 3 segundos
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    };

    return (
        <section className={styles.secaoNewsletter}>
            <section className={styles.conteudoNewsletter}>
                <h2>Fique por Dentro das Novidades</h2>
                <p>Receba ofertas especiais e lançamentos direto no seu e-mail</p>
                <form className={styles.formularioNewsletter} onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Inscrever-se</button>
                </form>
                {/* Renderiza a mensagem de feedback aqui */}
                {message && <p className={styles.mensagemSucesso}>{message}</p>}
            </section>
        </section>
    );
}
