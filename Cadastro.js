const Profissional = require('./profissional');
const Secretaria = require('./Secretaria');
const Disponibilidade = require('./Disponibilidade');

const profissional = new Profissional(
    "Higor Gabriel",
    "Psicólogo",
    "123.456.789-00",
    "(61) 99999-9999",
    "higuin06@gmail.com",
    "123456"
);

const secretaria = new Secretaria(
    "Maria Silva",
    "maria@gmail.com",
    "(61) 98888-8888",
    "654321",
    "987.654.321-00"
);

// Disponibilidades
const disp1 = new Disponibilidade(
    "Segunda-feira",
    "08:00",
    "12:00"
);

const disp2 = new Disponibilidade(
    "Quarta-feira",
    "14:00",
    "18:00"
);

// Associando ao profissional
profissional.adicionarDisponibilidade(disp1);
profissional.adicionarDisponibilidade(disp2);

console.log(profissional);
console.log(secretaria);