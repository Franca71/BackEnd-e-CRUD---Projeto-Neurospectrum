# NeuroSpectrum - Backend

##  Sobre o Projeto

O **NeuroSpectrum** é um projeto acadêmico desenvolvido por estudantes do curso de **Análise e Desenvolvimento de Sistemas (ADS)**, com o objetivo de auxiliar profissionais da área da saúde mental no gerenciamento de informações clínicas relacionadas a pacientes com transtornos e condições psiquiátricas.

A plataforma busca otimizar o processo de acompanhamento terapêutico por meio da centralização de dados importantes, como prontuários, diagnósticos, tratamentos, exames e agendamentos de consultas, proporcionando maior organização, segurança e eficiência no atendimento.

---

##  Objetivo do Backend

O backend do NeuroSpectrum é responsável por toda a lógica de negócio da aplicação, gerenciamento das regras do sistema e comunicação com o banco de dados.

Entre suas principais responsabilidades estão:

* Gerenciamento de pacientes e profissionais da saúde;
* Controle de consultas e agendamentos;
* Administração de prontuários eletrônicos;
* Registro de diagnósticos e tratamentos;
* Emissão e armazenamento de receitas médicas;
* Controle da disponibilidade dos profissionais;
* Gerenciamento de usuários administradores do sistema.

---

##  Funcionalidades Implementadas (CRUDs)

Atualmente, o backend possui os seguintes módulos com operações **CRUD (Create, Read, Update e Delete)** implementadas:

###  Paciente (`PACIENTE`)

Responsável pelo gerenciamento das informações dos pacientes cadastrados no sistema.

**Operações:**

* Criar paciente;
* Listar pacientes;
* Buscar paciente por ID;
* Atualizar dados do paciente;
* Remover paciente.

---

###  Profissional (`PROFISSIONAL`)

Gerencia os profissionais da saúde cadastrados na plataforma.

**Operações:**

* Cadastrar profissional;
* Listar profissionais;
* Buscar profissional por ID;
* Atualizar informações profissionais;
* Excluir profissional.

---

###  Consulta (`CONSULTA`)

Controla os atendimentos realizados entre pacientes e profissionais.

**Operações:**

* Agendar consulta;
* Consultar agendamentos;
* Atualizar informações da consulta;
* Cancelar consultas.

---

###  Receita (`RECEITA`)

Responsável pelo gerenciamento das prescrições médicas emitidas.

**Operações:**

* Criar receita;
* Visualizar receitas;
* Atualizar prescrições;
* Excluir receitas.

---

###  Diagnóstico (`DIAGNÓSTICO`)

Armazena os diagnósticos relacionados aos pacientes.

**Operações:**

* Registrar diagnóstico;
* Consultar diagnósticos;
* Atualizar diagnósticos;
* Remover registros.

---

###  Tratamento (`TRATAMENTO`)

Gerencia os tratamentos definidos para cada paciente.

**Operações:**

* Registrar tratamento;
* Consultar tratamentos;
* Atualizar informações do tratamento;
* Encerrar ou excluir tratamentos.

---

###  Exame (`EXAME`)

Responsável pelo controle dos exames solicitados e seus resultados.

**Operações:**

* Cadastrar exame;
* Consultar exames;
* Atualizar resultados;
* Remover registros.

---

###  Prontuário (`PRONTUÁRIO`)

Centraliza todo o histórico clínico do paciente.

**Operações:**

* Criar prontuário;
* Consultar prontuários;
* Atualizar informações clínicas;
* Excluir prontuários.

---

###  Agenda (`AGENDA`)

Gerencia os horários disponíveis para atendimentos.

**Operações:**

* Criar horários;
* Consultar agenda;
* Atualizar horários;
* Remover agendamentos.

---

###  Administrador (`ADMINISTRADOR`)

Controla os usuários responsáveis pela administração do sistema.

**Operações:**

* Cadastrar administrador;
* Consultar administradores;
* Atualizar permissões e informações;
* Remover administradores.

---

###  Disponibilidade (`DISPONIBILIDADE`)

Define os períodos disponíveis para atendimento.

**Operações:**

* Registrar disponibilidade;
* Consultar horários disponíveis;
* Atualizar disponibilidade;
* Excluir horários.

---

###  Profissional x Disponibilidade (`PROF_DISPONIBILIDADE`)

Tabela responsável pela associação entre profissionais e seus respectivos horários disponíveis.

**Operações:**

* Vincular disponibilidade ao profissional;
* Consultar vínculos existentes;
* Atualizar associações;
* Remover vínculos.

---

##  Estrutura dos Módulos

```text
Backend/
├── PACIENTE/
├── PROFISSIONAL/
├── CONSULTA/
├── RECEITA/
├── DIAGNOSTICO/
├── TRATAMENTO/
├── EXAME/
├── PRONTUARIO/
├── AGENDA/
├── ADMINISTRADOR/
├── DISPONIBILIDADE/
└── PROF_DISPONIBILIDADE/
```

---

##  Tecnologias Utilizadas

As tecnologias utilizadas no desenvolvimento do backend podem incluir:

* JavaScript
* Node.js
* Express.js
* Banco de Dados Relacional (MySQL)
* API REST
* ORM (Sequelize ou equivalente)
* Git e GitHub para versionamento

> **Observação:** As tecnologias podem ser ajustadas conforme a implementação final do projeto.

---

##  Equipe de Desenvolvimento

Projeto desenvolvido para fins acadêmicos pelos alunos do curso de **Análise e Desenvolvimento de Sistemas**, visando aplicar conceitos de:

* Desenvolvimento Back-End;
* Modelagem de Banco de Dados;
* APIs RESTful;
* Arquitetura de Software;
* Boas práticas de desenvolvimento.

---

##  Finalidade Acadêmica

O NeuroSpectrum possui caráter exclusivamente **educacional e acadêmico**, sendo desenvolvido como instrumento de aprendizagem e aplicação prática dos conhecimentos adquiridos durante a graduação.
