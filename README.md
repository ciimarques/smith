# Medieval Store API

## Sobre o Projeto

Este projeto durante o curso da Trybe, e é uma API para uma loja de itens medievais, como espadas personalizadas e outros artefatos. Desenvolvida com Typescript e Sequelize, a aplicação segue uma arquitetura que separa as responsabilidades em diferentes camadas, incluindo Controllers e Services. A autenticação de algumas rotas é realizada através de JWT (JSON Web Tokens), garantindo a segurança e privacidade das operações. Além disso, a aplicação inclui uma série de testes para assegurar seu correto funcionamento.

## Tecnologias Utilizadas

- Node.js
- Typescript
- Sequelize
- JWT para autenticação
- Bibliotecas de teste (ex: Jest, Mocha)

## Como Instalar e Rodar o Projeto

### Pré-requisitos

Para rodar a aplicação, você precisará ter instalado em sua máquina:

- Node.js
- Um gerenciador de pacotes como npm

### Instalação

1. Clone o repositório: git clone git@github.com:ciimarques/smith.git
2. Instale as dependências: npm install 
3. Configure as variáveis de ambiente conforme necessário.
4. Inicie a aplicação: npm run start 

## Endpoints

### Autenticação

- **Login**
  - **Endpoint**: `POST /login`
  - **Descrição**: Autentica um usuário. O corpo da solicitação deve incluir credenciais de usuário válidas.

### Produtos

- **Cadastrar Produto**
  - **Endpoint**: `POST /products`
  - **Descrição**: Cria um novo produto na loja. Requer validações de produto e preço.

- **Listar Produtos**
  - **Endpoint**: `GET /products`
  - **Descrição**: Retorna uma lista de todos os produtos disponíveis na loja.

### Pedidos

- **Criar Pedido**
  - **Endpoint**: `POST /orders`
  - **Descrição**: Registra um novo pedido. Requer autenticação e validação do pedido.

- **Listar Pedidos com Produtos**
  - **Endpoint**: `GET /orders`
  - **Descrição**: Retorna uma lista de pedidos, incluindo os detalhes dos produtos em cada pedido.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato
 **Cíntia Marques** 
- **Email**:  cintiamarques.mk@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/ciimarques
