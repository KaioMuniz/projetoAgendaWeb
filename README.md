
# **Agenda Web - Aplicação Completa de Gestão de Agenda**
![image](https://github.com/user-attachments/assets/50b05493-885b-4fcf-8f0d-fa65bec97dc9)
![image](https://github.com/user-attachments/assets/54450f53-1076-4fc6-a28c-6eb7bdb2e9f7)



Bem-vindo ao **Agenda Web**, uma aplicação moderna e eficiente que permite o gerenciamento de compromissos e eventos de forma ágil e intuitiva. Este projeto é composto por três partes principais:

1. **Frontend**: Desenvolvido em **Angular**, com uma interface interativa e responsiva.
2. **Backend**: API RESTful construída com Java (Spring Boot), que fornece as operações necessárias para o gerenciamento dos dados.
3. **Banco de Dados**: Sistema robusto de banco de dados (relacional) utilizado para armazenar todos os dados de usuários, compromissos e eventos.

### **O Que Você Vai Encontrar Aqui?**

- **Frontend**: Uma aplicação Angular que permite ao usuário interagir com o sistema de agenda diretamente.
- **Backend**: A API foi construída com Spring Boot e contém endpoints para criação, leitura, atualização e exclusão de compromissos.
- **Banco de Dados**: Um banco de dados que armazena dados essenciais para o funcionamento da aplicação.

## Tecnologias Utilizadas

- **Frontend**: 
  - **Angular**: Framework utilizado para criar uma interface interativa e fluida.
  - **TypeScript**: Garantindo a escalabilidade e confiabilidade do código.
  - **HTML/CSS**: Estrutura e design responsivos.

- **Backend**:
  - **Spring Boot**: Framework que facilita o desenvolvimento de APIs robustas em Java.
  - **Swagger**: Documentação interativa para a API, tornando fácil o teste de endpoints diretamente no navegador.

- **Banco de Dados**:
  - **MySQL/PostgreSQL**: Banco de dados relacional para armazenar os dados da agenda.

## Como Rodar o Projeto?

### 1. **Instalação do Frontend** (Angular)
Se você ainda não tem o Angular CLI instalado, instale-o globalmente:

```bash
npm install -g @angular/cli
```

Para rodar a aplicação frontend:

```bash
git clone https://github.com/KaioMuniz/projetoAgendaWeb.git
cd projetoAgendaWeb
npm install
ng serve
```

Isso fará a aplicação ficar disponível em **http://localhost:4200/**.

### 2. **Instalação do Backend** (Spring Boot)
Clone o repositório do backend:

```bash
git clone https://github.com/KaioMuniz/projetoAgendaApi.git
cd projetoAgendaApi
./mvnw spring-boot:run
```

O backend estará disponível em **http://localhost:8081/**.

### 3. **Banco de Dados**
Certifique-se de ter o banco de dados configurado corretamente, seja MySQL ou PostgreSQL. Para um ambiente de desenvolvimento, você pode usar as configurações padrão ou ajustar o arquivo `application.properties` para corresponder ao seu banco de dados.

## Funcionalidades

### **Frontend (Angular)**:
- Visualização de compromissos e eventos agendados.
- Criação, edição e exclusão de compromissos.
- Interface limpa e intuitiva para o usuário.
- Responsividade para uma experiência de usuário otimizada em dispositivos móveis.

### **Backend (Spring Boot)**:
- API RESTful para manipulação de dados de agenda.
- Endpoints para:
  - `GET /api/compromissos`: Listar todos os compromissos.
  - `POST /api/compromissos`: Criar um novo compromisso.
  - `PUT /api/compromissos/{id}`: Atualizar um compromisso existente.
  - `DELETE /api/compromissos/{id}`: Excluir um compromisso.

  **A documentação dos endpoints está disponível via Swagger** em: 
  - **[Swagger UI](http://localhost:8081/swagger-ui/index.html#)**

### **Banco de Dados**:
- Armazena dados relacionados a compromissos, usuários e eventos.
- Relacionamento entre usuários e seus compromissos agendados.

## URLs Importantes

- **Frontend (Angular)**: [http://localhost:4200/](http://localhost:4200/)  
- **Swagger UI (Backend)**: [http://localhost:8081/swagger-ui/index.html#](http://localhost:8081/swagger-ui/index.html#)

