export const produtos = [
    { 
        id: "samsung_galaxy", 
        nome: "Smartphone Samsung Galaxy", 
        preco: 999.99, 
        imagem: "/img/samsung galaxy.png",
        descricao: "Smartphone com tela de 6.1 polegadas e câmera tripla",
        precoAntigo: "R$ 1.299,99",
        etiqueta: "Oferta"
    },
    { 
        id: "camiseta_polo", 
        nome: "Camiseta Polo Masculina", 
        preco: 89.99, 
        imagem: "/img/polo.png",
        descricao: "Camiseta polo de algodão 100% em diversas cores"
    },
    { 
        id: "notebook_lenovo", 
        nome: "Notebook Lenovo IdeaPad", 
        preco: 2299.99, 
        imagem: "/img/lenovo.png",
        descricao: "Notebook com processador Intel Core i5 e 8GB RAM",
        etiqueta: "Novo"
    },
    { 
        id: "kit_jardim", 
        nome: "Kit Jardim Completo", 
        preco: 79.99, 
        imagem: "/img/kit.png",
        descricao: "Kit com ferramentas básicas para jardinagem"
    },
    { 
        id: "tenis_nike", 
        nome: "Tênis Esportivo Nike", 
        preco: 299.99, 
        imagem: "/img/nike.png",
        descricao: "Tênis para corrida com tecnologia Air Max"
    },
    { 
        id: "kit_maquiagem", 
        nome: "Kit Maquiagem Completo", 
        preco: 129.99, 
        imagem: "/img/maquiagem.png",
        descricao: "Kit com batom, base, rímel e sombras variadas"
    },
];

export function getProductById(id) {
    return produtos.find(p => p.id === id);
}