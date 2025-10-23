import ProductCard from "./ProductCard";

// Seus produtos, agora como um array de dados
// Caminhos das imagens atualizados para /public
const produtos = [
    { id: "samsung_galaxy", nome: "Smartphone Samsung Galaxy", preco: 999.99, imagem: "/img/samsung galaxy.png" },
    { id: "camiseta_polo", nome: "Camiseta Polo Masculina", preco: 89.99, imagem: "/img/polo.png" },
    { id: "notebook_lenovo", nome: "Notebook Lenovo IdeaPad", preco: 2299.99, imagem: "/img/lenovo.png" },
    { id: "kit_jardim", nome: "Kit Jardim Completo", preco: 79.99, imagem: "/img/kit.png" },
    { id: "tenis_nike", nome: "Tênis Esportivo Nike", preco: 299.99, imagem: "/img/nike.png" },
    { id: "kit_maquiagem", nome: "Kit Maquiagem Completo", preco: 129.99, imagem: "/img/maquiagem.png" },
];

// Detalhes extras do seu HTML
const productDetails = {
    samsung_galaxy: { desc: "Smartphone com tela de 6.1 polegadas e câmera tripla", oldPrice: "R$ 1.299,99", tag: "Oferta" },
    camiseta_polo: { desc: "Camiseta polo de algodão 100% em diversas cores" },
    notebook_lenovo: { desc: "Notebook com processador Intel Core i5 e 8GB RAM", tag: "Novo" },
    kit_jardim: { desc: "Kit com ferramentas básicas para jardinagem" },
    tenis_nike: { desc: "Tênis para corrida com tecnologia Air Max" },
    kit_maquiagem: { desc: "Kit com batom, base, rímel e sombras variadas" },
};


export default function ProductList() {
    return (
        <section id="produtos" className="produtos-destaque destinos-nav">
            <h2>Produtos em Destaque</h2>
            <section className="grade-produtos">
                {/* Mapeamos o array de produtos */}
                {produtos.map(produto => (
                    <ProductCard
                        key={produto.id}
                        produto={produto}
                        // Passamos os detalhes extras como props
                        descricao={productDetails[produto.id].desc}
                        precoAntigo={productDetails[produto.id].oldPrice}
                        etiqueta={productDetails[produto.id].tag}
                    />
                ))}
            </section>
        </section>
    );
}