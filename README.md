<h1 align="center">
  <img alt="Logo" src="./public/images/logo.svg" alt="ig.News">
</h1>

<h1 align="center">
    ig.News - Next.js
</h1>
<p align="center">Aplicação para inscrição de newsletter com pagamento via stripe</p>


<p align="center">
 <a href="#sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#configurações-necessárias">Configurações necessárias</a> •
 <a href="#licença">Licença</a> •
 <a href="#autor">Autor</a>
</p>

## Sobre o projeto

This project has been created for development inprovmented using the following steps and hands on a real ReactJs with NextJs application with externals API's and all new atibuttes NextJs offers  to clients subscriptions and clients payment methods.  


This project has been part of Rocketseat module 3 Bootcamp  [Ignite da Rocketseat](https://rocketseat.com.br/)

---

## Main Technologies

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

---

## Configurations

You have to ...

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

You have to create and maybe configurate...

- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

*servicesConfig.md on project root.*

### **Clone do projeto**

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/nelsonsantosaraujo/ignews.git
# Entre na pasta do repositório clonado
$ cd ignews
```

### **Iniciando o projeto**

```bash
# Execute yarn para instalar as dependências
$ yarn

# Na raiz do projeto crie uma copia do arquivo .env.local.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções
$ cp .env.local.example .env.local

# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Para iniciar a aplicação
$ yarn dev

```

---

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

## Autor

Feito por Rodrigo Camargo 👋🏽 Entre em contato!

[![Gmail Badge](https://img.shields.io/badge/-rodrigocamargo854@gmail.com-red?style=flat-square&link=mailto:rodrigocamargo854@gmail.com)](mailto:rodrigocamargo854@gmail.com)