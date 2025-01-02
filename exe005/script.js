function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // bom dia 
        img.src = 'imagemmanha.png' 
        document.body.style.background = '#f7e2ce'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde 
        img.src = 'imagemtarde.png' 
        document.body.style.background = '#e1a95f'
    } else {
        // boa noite
        img.src = 'imagemnoite2.png' 
        document.body.style.background = '#131b1d'
    }
}
