{{ template:title }}
{{ template:description }}
{{ template:toc }}

## Para rodar a aplicação

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

## Para desenvolver seu projeto serverless

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

{{ template:contributors }}
{{ template:license }}