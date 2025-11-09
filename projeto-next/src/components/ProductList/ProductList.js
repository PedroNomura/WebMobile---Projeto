import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css"

export default function ProductList({ produtos }) {
    return (
        <section id="produtos" className={`${styles.secaoProdutos} destinos-nav`}>
            <h2>Produtos em Destaque</h2>
            <section className={styles.gradeProdutos}>
                {produtos.map(produto => (
                    <ProductCard
                        key={produto.id}
                        produto={produto} 
                    />
                ))}
            </section>
        </section>
    );
}