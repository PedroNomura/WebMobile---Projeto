// lib/data.js


const staticProducts = [
    { 
        id: "samsung_galaxy", 
        nome: "Smartphone Samsung Galaxy", 
        preco: 999.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/samsung_galaxy_d9pmpr.png",
        descricao: "Smartphone com tela de 6.1 polegadas e câmera tripla",
        precoAntigo: "R$ 1.299,99",
        etiqueta: "Oferta"
    },
    { 
        id: "camiseta_polo", 
        nome: "Camiseta Polo Masculina", 
        preco: 89.99,
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/polo_fecfhr.png",
        descricao: "Camiseta polo de algodão 100% em diversas cores",
        precoAntigo: null, 
        etiqueta: null
    },
    { 
        id: "notebook_lenovo", 
        nome: "Notebook Lenovo IdeaPad", 
        preco: 2299.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/lenovo_lrxmde.png",
        descricao: "Notebook com processador Intel Core i5 e 8GB RAM",
        precoAntigo: null,
        etiqueta: "Novo"
    },
    { 
        id: "kit_jardim", 
        nome: "Kit Jardim Completo", 
        preco: 79.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690662/kit_cyxwle.png",
        descricao: "Kit com ferramentas básicas para jardinagem",
        precoAntigo: null,
        etiqueta: null
    },
    { 
        id: "tenis_nike", 
        nome: "Tênis Esportivo Nike", 
        preco: 299.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690663/nike_fsadbp.png",
        descricao: "Tênis para corrida com tecnologia Air Max",
        precoAntigo: null,
        etiqueta: null
    },
    { 
        id: "kit_maquiagem", 
        nome: "Kit Maquiagem Completo", 
        preco: 129.99, 
        imagem: "https://res.cloudinary.com/dsyxtpek7/image/upload/v1762690663/maquiagem_qsrvzb.png",
        descricao: "Kit com batom, base, rímel e sombras variadas",
        precoAntigo: null,
        etiqueta: null
    },
];



export async function getAllProducts() {
    return Promise.resolve(staticProducts);
}

export async function getProductById(id) {
    const product = staticProducts.find(p => p.id === id);
    
    if (product) {
        return Promise.resolve(product);
    } else {
        return Promise.resolve(null);
    }
}