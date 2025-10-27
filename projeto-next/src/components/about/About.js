// 1. Importa o módulo CSS
import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={`${styles.secaoSobre} destinos-nav`}>
      <section className={styles.conteudoSobre}>
        <h2>Sobre a 123 Realiza</h2>
        <p>
          Somos uma loja online comprometida em oferecer os melhores produtos com
          qualidade e preços acessíveis. Nossa missão é facilitar suas compras e
          proporcionar uma experiência única de e-commerce.
        </p>
        <section className={styles.diferenciais}>
          <section className={styles.diferencial}>
            <h3>Entrega Rápida</h3>
            <p>Entregamos seus produtos com segurança e agilidade</p>
          </section>
          <section className={styles.diferencial}>
            <h3>Qualidade Garantida</h3>
            <p>Produtos selecionados com rigoroso controle de qualidade</p>
          </section>
          <section className={styles.diferencial}>
            <h3>Atendimento 24/7</h3>
            <p>Suporte disponível para ajudar você a qualquer momento</p>
          </section>
        </section>
      </section>
    </section>
  );
}