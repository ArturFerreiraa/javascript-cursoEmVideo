function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

    if (hora >= 0 && hora < 12) {
        //bom dia
        document.body.style.background = '#b29d66'
        img.src = 'foto-manha.jpg';
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        document.body.style.background = '#7098bf'
        img.src = 'foto-tarde.jpg';
    } else {
        document.body.style.background = '#012d46'
        //boa noite
        img.src = 'foto-noite.jpg';
    }
}
