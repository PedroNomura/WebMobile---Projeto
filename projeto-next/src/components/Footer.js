export default function Footer() {
    return (
        <footer id="contato" className="destinos-nav">
            <section className="conteudo-rodape">
                <section className="secao-rodape">
                    <h3>123 Realiza</h3>
                    <p>Sua loja online de confiança</p>
                    <section className="links-sociais">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                    </section>
                </section>
                
                <section className="secao-rodape">
                    <h3>Atendimento</h3>
                    <ul>
                        <li>Telefone: (11) 99999-9999</li>
                        <li>E-mail: contato@123realiza.com.br</li>
                        <li>WhatsApp: (11) 99999-9999</li>
                    </ul>
                </section>
                
                <section className="secao-rodape">
                    <h3>Formas de Pagamento</h3>
                    <section className="metodos-pagamento">
                        <span>Cartão de Crédito</span>
                        <span>PIX</span>
                        <span>Boleto</span>
                    </section>
                </section>
            </section>
            
            <section className="base-rodape">
                <p>&copy; 2024 123 Realiza. Todos os direitos reservados.</p>
            </section>
        </footer>
    );
}