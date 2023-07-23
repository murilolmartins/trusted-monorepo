# TRUSTED-MONOREPO

O repositorio contem os seguintes apps:

- `server`: API REST com fastify - NodeJS e Typescript
- `web`: Frontend web - NextJS e Typescript
- `schedualing-jobs`: Serviço de agendamento de jobs - NodeJS e Typescript

Para iniciar o projeto voce deve ter o node e o yarn instalados.

execute o comando para instalar as dependencias:

    yarn install

# Comandos de inicialização dos apps

- Iniciar todos os apps

      yarn dev:all

- Testar todos os apps

      yarn test:all

Voce tambem pode rodar os comandos de inicialização e teste de cada app individualmente, basta digitar:

    yarn [app] [comando]
