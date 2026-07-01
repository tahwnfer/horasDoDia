function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('img')
    console.log(img);

    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'src/dia.png'
        document.body.style.background = 'rgba(209, 20, 163)'

    }
    else if (hora >= 12 && hora <= 18) {
            img.src = 'src/tarde.png'
        document.body.style.background = 'rgb(219, 155, 48)'
        document.Cabecalho.style.color = '#0000'

    } else { 
        img.src = 'src/noite.png'
        document.body.style.background = 'rgb(109,121,194)'
    }
};