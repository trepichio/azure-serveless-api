<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">azure-serveless-api</h1>
<p align="center">
  <b>Um projeto CRUD de uma API Serveless na Azure.</b></br>
  <sub>Um pequeno projeto de uma API Serveless na Azure desenvolvido durante o Bootcamp de NodeJS da plataforma Digital Innovation One <a href='http://digitalinnovationone.one'>(DIO)</a>.<sub>
</p>

<br />


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Para rodar a aplicação](#-para-rodar-a-aplicao)
	* [Instale Azure Functions Core Tools](#instale-azure-functions-core-tools)
	* [Rode localmente as funções serverless:](#rode-localmente-as-funes-serverless)
* [➤ Para desenvolver seu projeto serverless](#-para-desenvolver-seu-projeto-serverless)
	* [Crie uma conta gratuita na Microsoft Azure:](#crie-uma-conta-gratuita-na-microsoft-azure)
	* [Instale no VS Code a extensão Azure Functions](#instale-no-vs-code-a-extenso-azure-functions)
	* [Utilize o terminal](#utilize-o-terminal)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#para-rodar-a-aplicao)

## ➤ Para rodar a aplicação

### Instale Azure Functions Core Tools

Para rodar localmente o projeto, antes acesse:

https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=linux%2Ccsharp%2Cbash

e instale o **Azure Functions Core Tools** para a sua plataforma (Windows/Mac/Linux)

### Rode localmente as funções serverless:
No terminal, entre com o comando:
<code>func host start</code>

Será listado as urls da API que você pode usar.

Utilize o seu REST Client favorito (Postman, Insomnia, etc);
Há também o arquivo **<code>requests.rest</code>** no repositório com as requisições para facilitar o uso da API.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#para-desenvolver-seu-projeto-serverless)

## ➤ Para desenvolver seu projeto serverless

### Crie uma conta gratuita na Microsoft Azure:
- Acesse https://azure.microsoft.com/en-us/free/open-source/ e crie sua conta.

### Instale no VS Code a extensão Azure Functions

Caso utilize o VS Code como sua IDE, esta extensão facilitará bastante o desenvolvimento e deploy do seu projeto na Azure. É **pré-requisito** ter o *Azure Core Tools* instalado para esta extensão funcionar.

### Utilize o terminal

Use o terminal para rodar comandos como:
- Para inicializar um projeto no diretório atual:
```bash
func init
```
E siga as intruções.

- Para criar uma função:
```bash
func new
```
E siga as intruções. Selecione 8 (HTTP Trigger) para fazer uma operação CRUD da REST API, em seguida dê um nome para sua função. Altere métodos HTTP e a rota no arquivo **<code>function.json</code>** da sua função.
Escreva sua regra de negócio no arquivo **<code>index.js</code>** dentro do diretório da função nomeada.

- Para iniciar localmente o servidor:
```bash
func host start
```

- Par fazer deploy:
No painel de visualização dos arquivos do seu projeto no VS Code, clique com o botão direito e acesse o menu de contexto *Deploy to Function App...* e selecione *Create a new Function App in Azure*


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#contributors)

## ➤ Contributors
	

| [<img alt="João Trepichio" src="https://avatars1.githubusercontent.com/u/11396817?s=60&v=4" width="100">](https://trepichio.github.io) |
|:--------------------------------------------------:|
| [João Trepichio](https://trepichio.github.io)    |
| [trepichio@gmail.com](mailto:trepichio@gmail.com) |
| 🚀                                               |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#license)

## ➤ License
	
Licensed under [ISC](https://opensource.org/licenses/ISC).