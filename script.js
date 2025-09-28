document.addEventListener('DOMContentLoaded', function() {

    // --- 1. CONTROLE DO MENU MOBILE ---
    const botaoMenuMobile = document.querySelector('.botao-menu-mobile');
    const overlayMenu = document.querySelector('.overlay-menu-mobile');
    const botaoFecharMenu = document.querySelector('.fechar-menu-mobile');
    const linksMenuMobile = document.querySelectorAll('.lista-menu-mobile a');

    function toggleMenu() {
        overlayMenu.classList.toggle('ativo');
    }

    botaoMenuMobile.addEventListener('click', toggleMenu);
    botaoFecharMenu.addEventListener('click', toggleMenu);

    linksMenuMobile.forEach(link => {
        if (!link.classList.contains('icone-carrinho')) {
            link.addEventListener('click', () => {
                if (overlayMenu.classList.contains('ativo')) {
                    toggleMenu();
                }
            });
        }
    });

    // --- 2. FUNCIONALIDADE DO CARRINHO DE COMPRAS ---
    const botoesAdicionar = document.querySelectorAll('.botao-adicionar');
    const carrinhoLateral = document.querySelector('.lateral-carrinho');
    const botaoFecharCarrinho = document.querySelector('.fechar-carrinho');
    const itensCarrinhoContainer = document.querySelector('.itens-carrinho');
    const totalCarrinhoSpan = document.querySelector('.total-carrinho span');
    const iconesCarrinho = document.querySelectorAll('.icone-carrinho');

    let carrinhoItens = []; 

    function toggleCarrinho() {
        carrinhoLateral.classList.toggle('aberto');
    }

    iconesCarrinho.forEach(icone => icone.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCarrinho();
        if (overlayMenu.classList.contains('ativo')) {
            toggleMenu();
        }
    }));
    botaoFecharCarrinho.addEventListener('click', toggleCarrinho);

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const cartaoProduto = event.target.closest('.cartao-produto');
            const nomeProduto = cartaoProduto.querySelector('h3').innerText;
            const precoProdutoTexto = cartaoProduto.querySelector('.preco-atual').innerText;
            const imagemProdutoSrc = cartaoProduto.querySelector('.imagem-produto img').src;
            const precoProduto = parseFloat(precoProdutoTexto.replace('R$', '').replace(',', '.'));
            const idProduto = nomeProduto; // Usando o nome como ID único para simplificar

            const produto = {
                id: idProduto,
                nome: nomeProduto,
                preco: precoProduto,
                imagem: imagemProdutoSrc
            };
            
            adicionarAoCarrinho(produto);
        });
    });

    function adicionarAoCarrinho(produtoAdicionado) {
        const itemExistente = carrinhoItens.find(item => item.id === produtoAdicionado.id);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinhoItens.push({ ...produtoAdicionado, quantidade: 1 });
        }
        atualizarCarrinho();

        if (!carrinhoLateral.classList.contains('aberto')) {
            toggleCarrinho();
        }
    }

    function atualizarCarrinho() {
        itensCarrinhoContainer.innerHTML = '';

        if (carrinhoItens.length === 0) {
            itensCarrinhoContainer.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
            totalCarrinhoSpan.innerText = 'Total: R$ 0,00';
            return;
        }

        let total = 0;
        carrinhoItens.forEach(item => {
            const itemElemento = document.createElement('div');
            itemElemento.classList.add('item-carrinho-bloco');
            itemElemento.innerHTML = `
                <div class="imagem-item-carrinho">
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>
                <div class="detalhes-item-carrinho">
                    <p class="nome-item-carrinho">${item.nome}</p>
                    <p class="preco-item-carrinho">Preço: R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                    <p class="quantidade-item-carrinho">Quantidade: ${item.quantidade}</p>
                </div>
                <button class="botao-remover-item" data-id="${item.id}">X</button>
            `;
            itensCarrinhoContainer.appendChild(itemElemento);
            
            total += item.preco * item.quantidade;
        });
        totalCarrinhoSpan.innerText = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
    }


    itensCarrinhoContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('botao-remover-item')) {
            const idParaRemover = event.target.getAttribute('data-id');
            carrinhoItens = carrinhoItens.filter(item => item.id !== idParaRemover);
            atualizarCarrinho();
        }
    });


    // --- 3. CONFIRMAÇÃO DE INSCRIÇÃO NA NEWSLETTER ---
    const formNewsletter = document.querySelector('.formulario-newsletter');

    formNewsletter.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const inputEmail = formNewsletter.querySelector('input[type="email"]');
        const email = inputEmail.value;
        if (email) {
            alert(`Obrigado por se inscrever!\nSeu e-mail ${email} foi cadastrado com sucesso.`);
            inputEmail.value = '';
        }
    });

});