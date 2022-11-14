const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('badge')
		.setDescription('Makes you able to claim Discord Active Developer Badge. It can take up to 24 hours'),
	async execute(interaction) {
		await interaction.reply('After 24 hours, Go to https://discord.com/developers/active-developer and claim your Active Developer Badge. Also don\'t forget to enable community for your server and have at least 1 chat channel.');
	},
};