<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

# Desafio-01 **Conceitos de NodeJS* #
<p>Primeiro desafio <strong>#Bootcamp9</strong> </br>
- Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.
<br>

Rotas POST /projects: A rota deve receber id e title dentro do corpo e cadastrar um novo projeto 
dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };
</br></br>
GET /projects: Rota que lista todos projetos e suas tarefas;
</br></br>
PUT /projects/id A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;
</br></br>
DELETE /projects/id A rota deve deletar o projeto com o id presente nos parâmetros da rota;
</br></br>
POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;


# Tecnologias utilizadas:
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :memo: Licença

This project is under the MIT license. See the [LICENSE](LICENSE.md) for more details.






























