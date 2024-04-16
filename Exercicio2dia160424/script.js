let pets = {
    cachorro: {
        pequeno: [],
        medio: [],
        grande: []
    },
    gato: {
        pequeno: [],
        medio: [],
        grande: []
    },
    outro: []
};

function adicionarPet() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const tipo = document.getElementById("tipo").value;

    const porte = calcularPorte(idade, peso);

    const pet = {
        nome: nome,
        idade: idade,
        peso: peso,
        porte: porte
    };

    if (tipo === "cachorro" || tipo === "gato") {
        const listaPorte = classificarPorte(porte);
        pets[tipo][listaPorte].push(pet);
    } else {
        pets["outro"].push(pet);
    }

    exibirListaPets();
}

function calcularPorte(idade, peso) {
    const idadeSemanas = idade * 52;
    const porte = peso / idadeSemanas;
    return porte;
}

function classificarPorte(porte) {
    if (porte < 0.01) {
        return "pequeno";
    } else if (porte >= 0.01 && porte < 0.02) {
        return "medio";
    } else {
        return "grande";
    }
}

function exibirListaPets() {
    const listaPets = document.getElementById("listaPets");
    listaPets.innerHTML = '';

    for (const tipo in pets) {
        if (pets.hasOwnProperty(tipo)) {
            const petsTipo = pets[tipo];
            for (const porte in petsTipo) {
                if (petsTipo.hasOwnProperty(porte)) {
                    const petsPorte = petsTipo[porte];
                    if (petsPorte.length > 0) {
                        const tipoPorteLabel = tipo === "outro" ? "Outro" : `${tipo.charAt(0).toUpperCase() + tipo.slice(1)} (${porte.charAt(0).toUpperCase() + porte.slice(1)})`;
                        const tipoPorteDiv = document.createElement("div");
                        tipoPorteDiv.innerHTML = `<h3>${tipoPorteLabel}</h3>`;
                        for (const pet of petsPorte) {
                            tipoPorteDiv.innerHTML += `<div class="pet">${pet.nome} - Porte: ${pet.porte.toFixed(2)}</div>`;
                        }
                        listaPets.appendChild(tipoPorteDiv);
                    }
                }
            }
        }
    }
}
