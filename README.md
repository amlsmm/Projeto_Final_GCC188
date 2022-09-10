<h1 align="center">PROJETO FINAL</h1>
<p align="center">
  Projeto final da disciplina de Engenharia de Software GCC-218, cursada no período 2022/1.
</p>

---
## Sumário

- [Descrição](#descrição)
- [Tecnologias e Versões](#tecnologias-e-versões)
- [Regras de Uso do Git](#regras-de-uso-do-git)

---
## Descrição

- O software desenvolvido é um sistema de gerenciamento escolas, utilizado por coordenadores e alunos de uma instituição de ensino. A finalidade principal do sistema será gerenciar as disciplinas lecionadas por professores,
  que disponibilizarão matrículas para os alunos, de acordo com seus cursos. Assim, o sistema é composto pelas entidades: Departamento, Professor, Aluno, Disciplina, Curso e Coordenador.
- Desse modo, cada Departamento irá disponibilizar disciplinas escolhidas para um professor. Um aluno, que pertence a um curso, poderá se cadastrar nas disciplinas dos departamentos relacionados com seu curso. Com isso,
  o coordenador poderá acessar o sistema para: gerenciar professores, destacar professores para disciplinas e gerenciar departamentos. E o aluno poderá acessar o sistema para: se cadastrar em uma disciplina e acessar seus dados pessoais.

---
## Tecnologias e Versões

### Front End:

![React](https://img.shields.io/badge/react-v18.2.0-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-v12.2.5-%2320232a.svg?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-v4.7.4-%2320232a.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v3.1.8-%2320232a.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Back End:

![Spring](https://img.shields.io/badge/spring-v2.7.0-%2320232a.svg?style=for-the-badge&logo=spring&logoColor=white)

### Data Base:

![MySQL](https://img.shields.io/badge/mysql-v8.0.0-%2320232a.svg?style=for-the-badge&logo=mysql&logoColor=white)

---
## Regras de Uso do Git

### 1. Commit:

Descrever o que foi feito indicando a ação.
Ex.: Criar tela de login.

### 2. Branches:

main, backend e frontend

### 3. Boas Práticas:

- Aplicar Clean Code
- Nomes significativos
- Notação: camelCase
- Comentários: não comentar
- Identar código
- Tesar sempre os programas

### 4. Organização do Projeto:

```
└─ documentos
  ├─ diagrama de classe
  ├─ diagrama de implantação
  ├─ diagrama de sequência
  ├─ padrões adotados
  └─ requisitos
└─ src
  ├─ backend
  └─ frontend
```
