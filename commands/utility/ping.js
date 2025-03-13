const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lakers')
		.setDescription('Replies with `LAKERS in 5!`'),
	async execute(interaction) {
		await interaction.reply('LAKERS in 5!');
	},
};