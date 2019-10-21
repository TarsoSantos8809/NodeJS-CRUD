const express = require('express');
const server = express();

//CRUD = Creat, Read, Update, Delete
server.use(express.json());

let numeroDeRequesicao = 0;
const projects = [];

// Middleware
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

//Middleware que dá log no número de requisições
function logRequests(req, res, next) {
  numeroDeRequesicao++;

  console.log(`Número de tentativas: ${numeroDeRequesicao}`);

  return next();
}

server.use(logRequests);

//Lista todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//Cria um projeto
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

//Altera o projeto
server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

//Deleta um projeto
server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

//Cria uma Tarefa
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(4000);