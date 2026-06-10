class Profissional {
    constructor(nome, especialidade, cpf, telefone, email, senha) {
        this.nome = nome;
        this.especialidade = especialidade;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.disponibilidades = [];
    }

    adicionarDisponibilidade(disponibilidade) {
        this.disponibilidades.push(disponibilidade);
    }
}

module.exports = Profissional;