var agora = new Date();
var hora = agora.getHours(); // Adicione os parênteses aqui
console.log(`Agora são exatamente ${hora} horas.`); // Correção de capitalização

if (hora < 12) {
    console.log('Bom dia');
} else if (hora <= 18) { 
    console.log('Boa tarde'); // Correção de "BOa tarde"
} else {
    console.log('Boa noite');
} 