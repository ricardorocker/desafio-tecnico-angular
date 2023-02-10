# Teste-Petize Ricardo Rocker

Esse projeto consiste em um teste para o processo seletivo da [Petize](https://www.petize.com.br/).

## Instalação
Para instalar o projeto você deve ter os seguintes programas instalados:
- Node.js versão 16.16.0
- Angular CLI 15.1.5
- Gerenciador de pacotes npm

## Instalando o projeto
1. Clone o projeto na sua máquina utilizando o comando a seguir:
```
gh repo clone ricardorocker/teste-petize
```
2. Instale as dependências do projeto, rodando o seguinte comando na raíz do mesmo:
```
npm install
```

## Rodando o ambiente de desenvolvimento

1. Para rodar o ambiente de desenvolvimento, utilize o seguinte comando na raíz do projeto:
```
ng serve
```
2. Abra o seu navegador web e insira o endereço http://localhost:4200/


## Rodando a build de deploy da aplicação

1. Para rodar a build de deploy da aplicação rode o seguinte comando na raíz do projeto:
```
ng build --prod
```

## Motivação para escolher a biblioteca Bootstrap
Eu já utilizo o Bootstrap no meu dia a dia na empresa que trabalho atualmente e recentemente criei meu site pessoal com ele também. O Bootstrap facilita e acelera o desenvolvimento de sites e aplicativo, economizando tempo e aumentando a produtividade.

## Estrutura do projeto

Para organizar melhor a visualização da estrutura do projeto, foi removido o arquivo app.component.html e app.component.css, que são arquivos desnecessários, e criado mais três pastas:

- components: onde fica o default-layout.component, que é o template que o app.component referencia;
- views: onde armazenam-se as páginas do site;
- services: onde estão todas as requisições para o back-end.
