# Proffy
Projeto criado na segunda NLW

O projeto inclui uma interface de cadastro de professores (feita usando HTML e CSS), além de uma interface para pesquisa de professores cadastrados.
Essa interface é servida a partir de um servidor escrito em NodeJS, usando o express.

## Rodando a aplicação:

1 - Clone esse repositório

2 - Na pasta, use o comando ```yarn``` para instalar as dependências.
  (Nota: caso prefira usar o npm, primeiro apague o arquivo yarn.lock e então execute o comando ```npm install```.)

3 - Crie o banco de dados e as tabelas, executando o arquivo db.js (```node ./src/database/db.js```)

4 - Execute o comando ```yarn dev```. Esse comando iniciará o servidor na porta 5500. Abra o navegador e digite localhost:5500 para acessar o servidor.

5 - Adicione alguns professores ao banco de dados, usando o formulário da aplicação.