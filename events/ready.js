module.exports = async (client) => {
    const express = require('express');
	const app = express();
	app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 5);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online
    console.log(
		`Eu estou online agora, meu nome é ${client.user.username}. Há ${
			client.users.cache.size
		} usuario(s) em ${client.guilds.cache.size} servidor(es)!`
	);

	var tabela = [
		{ name: 'Sword Art Online', type: 'PLAYING' },
		{ name: `Prefix '`, type: 'WATCHING' },
		{ name: `Kirito`, type: 'WATCHING' },
		{
			name: `Dormindo com kirito`,
			type: 'STREAMING',
			url: 'https://twitch.tv/'
		}
	];
	function setStatus() {
		var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
		client.user.setActivity(altstatus);
	}
	setStatus();
	setInterval(() => setStatus(), 5000);
}