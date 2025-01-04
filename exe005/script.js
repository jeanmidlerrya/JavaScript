function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem'); // Certifique-se de que o ID é "imagem"
    var data = new Date();
    var hora = data.getHours();
    //var hora =18 ; // Hora de teste
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) { // Bom dia
        img.src = 'imagens/imagemmanha.png'; // Certifique-se do caminho
        document.body.style.background = '#f7e2ce';
    } else if (hora >= 12 && hora < 18) { // Boa tarde
        img.src = 'imagens/imagemtarde.png'; // Corrigido o caminho
        document.body.style.background = '#e1a95f';
    } else { // Boa noite
        img.src = 'imagens/imagemnoite2.png'; // Certifique-se do caminho
        document.body.style.background = '#131b1d';
    }
}
