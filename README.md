# one-piece-card-game
Fullstack project that will cover all applications to reproduce the One Piece TCG rules and gameplay

## Project Architecture
- The project is separated into 2 folders: client and server;
- Both services will be orchestrated by docker-compose file;
- Communication between client and server will be through REST API and Web Socket;
- For the beginning and proof of concept, the server will be built on a monolith structure;

### Client
- The Project's frontend will cover all the gameplay functionalities, login, and deck building at version 1;
    
#### Technologies
- NextJS (React JS framework)
- Typescript (Javascript superset)
- SocketIO (web socket)

### Server

#### Technologies
- Express (Node JS framework)
- Prisma (ORM)
- MongoDB (Data Base)
- SocketIO (web Socket)
