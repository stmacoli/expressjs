const express = require("express");

const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const ESTOQUE = [
  {
    name: "pepsi",
  },
  {
    name: "dolly",
  },
  {
    name: "guarana",
  },
  {
    name: "sukita",
  },
];

//cRud -> Read
app.get("/itens", (req, res) => {
  console.log("disparou o get");
  return res.status(200).send(ESTOQUE);
});

//Crud -> Create

app.post("/novo-item", jsonParser, (req, res) => {
// acessar o banco de dados e inserir o conteudo da requisição numa nova entrada no banco de dados
if (Object.keys(req.body).length > 0) {
  return res.status(201).send(req.body);
    
} else {
    return res.status(400).send("Algo deu errado")
}
});

app.listen(4002);
