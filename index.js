// Variáveis
var nomeDoHeroi = "Super Herói";
var experienciaDoHeroi = 10001;

// Calcula o nível com base na experiência
var nivelDoHeroi;
switch (true) {
    case experienciaDoHeroi < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case experienciaDoHeroi <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case experienciaDoHeroi <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case experienciaDoHeroi <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case experienciaDoHeroi <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case experienciaDoHeroi <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case experienciaDoHeroi <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";
}

// Saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);
