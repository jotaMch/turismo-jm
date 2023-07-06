const imagens = document.querySelectorAll('.imagem-text');
const form = document.getElementById("form");


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('msg-success');
    
    msg.style.display = 'flex';
    var inputs = document.getElementsByTagName("input");
    var textarea = document.getElementById("mensagem");
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    textarea.value = "";
    
});

function adicionarAoCarrinho() {
    
    var carrinho = document.querySelector(".carrinho");
    var valorAtual = parseInt(carrinho.innerHTML);

    var novoValor = valorAtual + 1;

    if (novoValor === 1) {
        carrinho.innerHTML = novoValor;
        carrinho.style.display = 'inline'
    } else {
        carrinho.innerHTML = novoValor;
    }
}


imagens.forEach(function(imagem) {
    const text = imagem.querySelector('.text');

imagem.addEventListener('mouseover', function() {
    text.style.display = 'block';
});

imagem.addEventListener('mouseout', function() {
    text.style.display = 'none';
});
});



function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function animar() {
    const menu = document.querySelector('.mobile');
    const hamburguer = document.querySelector('.hamburguer');
    const lines = document.querySelectorAll('.line');

    menu.classList.toggle('active');
    hamburguer.classList.toggle('active');
    lines.forEach(line => line.classList.toggle('active'));

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

