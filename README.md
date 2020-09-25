# Portfolio GC

This project was built with [Angular](https://github.com/angular) version 10.1.3.

Required for the execution:

- Node 12.17.0
- Yarn

## Development server

Run the following for running a Client-side Single Page Application Server that listens on http://localhost:4200

```sh
# Installs the required dependencies
$ yarn install
# Start the local server for the client-side rendered SPA (Single-Page Application)
$ yarn start
```

## Server-side local server

This application make use of Angular Universal with an Express engine for Server Side rendering

For starting locally an instance of the server-side server on http://localhost:4000

```sh
# Builds the application (client and server)
$ yarn build:ssr:prod

$ yarn start:ssr
```
