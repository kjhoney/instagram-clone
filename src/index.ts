// import 'reflect-metadata';
// import { createConnection } from 'typeorm';
// import { tUsers } from './entity/tUsers';

// createConnection()
// 	.then(async connection => {
// 		console.log('Inserting a new user into the database...');
// 		const user = new tUsers();
// 		const today = new Date();
// 		user.sUserid = 'jiheon';
// 		user.sPassword = 'password';
// 		user.sNickname = 'jiheon';
// 		user.sEmail = 'kjhkjh392@naver.com';
// 		user.sPhone = '010-5485-8853';
// 		user.sName = '김지헌';
// 		user.regDate = today;
// 		user.editDate = today;

// 		await connection.manager.save(user);
// 		console.log('Saved a new user with id: ' + user.id);

// 		console.log('Loading users from the database...');
// 		const users = await connection.manager.find(tUsers);
// 		console.log('Loaded users: ', users);

// 		console.log('Here you can setup and run express/koa/any other framework.');
// 	})
// 	.catch(error => console.log(error));

import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });
import { ApolloServer } from "apollo-server-express";
import app from "./app";
import http from "http";

const PORT: number = Number(process.env.GQL_PORT) || 4000;
const GRAPHQL_ENDPOINT: string = process.env.GQL_ENDPOINT || "/graphql";

async function bootstrap() {
  const server = new ApolloServer({ playground: true });

  server.applyMiddleware({
    app,
    path: GRAPHQL_ENDPOINT
  });

  const httpServer = http.createServer(app);

  server.installSubscriptionHandlers(httpServer);
  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
    );
  });
}

bootstrap();
