"use client";

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o recarregamento da página
        if (email) {
            alert(`Obrigado por se inscrever!\nSeu e-mail ${email} foi cadastrado com sucesso.`);
            setEmail(''); // Limpa o input
        }
    };

    return (
        <section className="secao-newsletter">
            <section className="conteudo-newsletter">
                <h2>Fique por Dentro das Novidades</h2>
                <p>Receba ofertas especiais e lançamentos direto no seu e-mail</p>
                {/* onSubmit substitui o addEventListener */}
                <form className="formulario-newsletter" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Seu e-mail" 
                        required 
                        value={email} // Controlado pelo estado
                        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
                    />
                    <button type="submit">Inscrever-se</button>
                </form>
            </section>
        </section>
    );
}