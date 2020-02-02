import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { tUsers } from './entity/tUsers';

createConnection()
	.then(async connection => {
		console.log('Inserting a new user into the database...');
		const user = new tUsers();
		const today = new Date();
		user.sUserid = 'jiheon';
		user.sPassword = 'password';
		user.sNickname = 'jiheon';
		user.sEmail = 'kjhkjh392@naver.com';
		user.sPhone = '010-5485-8853';
		user.sName = '김지헌';
		user.regDate = today;
		user.editDate = today;

		await connection.manager.save(user);
		console.log('Saved a new user with id: ' + user.id);

		console.log('Loading users from the database...');
		const users = await connection.manager.find(tUsers);
		console.log('Loaded users: ', users);

		console.log('Here you can setup and run express/koa/any other framework.');
	})
	.catch(error => console.log(error));
